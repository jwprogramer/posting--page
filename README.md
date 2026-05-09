"# 📝 Posting Page

Projeto desenvolvido como desafio de certificação Front End no curso DEVstart.

Simula a criação de posts estilo redes sociais, com comunicação real com uma API externa via `fetch`.

---

## 🚀 Funcionalidades

- Formulário com campo de **título** e **conteúdo**
- Envio dos dados via requisição **HTTP POST** para a [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)
- **Renderização dinâmica** do post retornado pela API na página
- Validação básica dos campos antes do envio
- Feedback visual de carregamento no botão durante a requisição
- Layout responsivo inspirado em redes sociais

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 semântico | Estrutura da página (`nav`, `main`, `section`, `article`, `footer`) |
| CSS3 | Estilização, animações e responsividade |
| JavaScript (ES6+) | Manipulação do DOM, eventos e `fetch` API |
| [JSONPlaceholder](https://jsonplaceholder.typicode.com/) | API REST gratuita usada para simular o POST |

---

## 📁 Estrutura

```
posting--page/
├── index.html   # Estrutura e marcação HTML
├── style.css    # Estilos e layout
├── script.js    # Lógica JavaScript e comunicação com a API
└── README.md
```

---

## ▶️ Como executar

Basta abrir o arquivo `index.html` diretamente no navegador.

---

## 📡 Como funciona a integração com a API

1. O usuário preenche o **título** e o **conteúdo** e clica em **Publicar**
2. O JavaScript monta o objeto:
   ```js
   const data = {
     title: titulo.value,
     body: conteudo.value,
     userId: 1
   }
   ```
3. Uma requisição `POST` é enviada para `https://jsonplaceholder.typicode.com/posts` com o corpo em JSON
4. A resposta da API é recebida e o post é **renderizado dinamicamente** na página

> **Nota:** A JSONPlaceholder é uma API de testes — os dados não são persistidos, mas a resposta simula o comportamento de uma API real, incluindo o retorno de um `id` para o post criado.

---

## 📚 Conceitos praticados

- Seletores DOM com `querySelector`
- Eventos com `addEventListener`
- `event.preventDefault()` em formulários
- `fetch` com método `POST`, `headers` e `JSON.stringify`
- Encadeamento de `.then()` e tratamento de erros com `.catch()`
- Manipulação de `innerHTML` para renderização dinâmica

---

Desenvolvido por **DEVstart** — Certificação Front End · 2026
" 
