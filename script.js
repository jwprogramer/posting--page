// ============================================================
// Seletores — Entradas (inputs)
// ============================================================
const form = document.querySelector('#post-form')
const titulo = document.querySelector('#titulo')
const conteudo = document.querySelector('#conteudo')
const btnPostar = document.querySelector('#btn-postar')


const renderizadorTitulo = document.querySelector('#renderizador-titulo')
const renderizadorConteudo = document.querySelector('#renderizador-conteudo')
const postCard = document.querySelector('#post-card')
const postTime = document.querySelector('#post-time')
const postIdLabel = document.querySelector('#post-id-label')
const emptyState = document.querySelector('#empty-state')

form.addEventListener('submit', function (e) {
  e.preventDefault()

  // Validação simples antes de enviar
  if (titulo.value.trim() === '' || conteudo.value.trim() === '') {
    alert('Por favor, preencha o título e o conteúdo antes de publicar.')
    return
  }

  const data = {
    title: titulo.value,
    body: conteudo.value,
    userId: 1
  }

  // Estado de carregamento
  btnPostar.disabled = true
  btnPostar.textContent = 'Publicando...'

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Erro na requisição: ' + response.status)
      }
      return response.json()
    })
    .then(function (json) {
      renderizadorTitulo.innerHTML = data.title
      renderizadorConteudo.innerHTML = data.body
      postTime.textContent = new Date().toLocaleString('pt-BR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
      postIdLabel.textContent = 'Post ID retornado pela API: #' + json.id


      emptyState.classList.add('hidden')
      postCard.classList.remove('hidden')


      form.reset()


      btnPostar.disabled = false
      btnPostar.textContent = 'Publicar'


      postCard.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
    .catch(function (error) {
      console.error('Falha ao publicar o post:', error)
      alert('Não foi possível publicar o post. Verifique sua conexão e tente novamente.')


      btnPostar.disabled = false
      btnPostar.textContent = 'Publicar'
    })
})
