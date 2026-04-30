# CineLog — Portal de Cinema Cultural

## Tema

**CineLog — Catálogo Informativo de Produções Cinematográficas**

O CineLog é uma plataforma centralizada de consulta sobre o universo do cinema mundial. O objetivo do projeto é oferecer um inventário organizado que vai além da sinopse, apresentando detalhes técnicos de produção, composição de elenco e a trajetória de diretores.

A proposta é ser um "diário de bordo" do cinema, onde o usuário encontra informações rápidas e estruturadas sobre filmes de diversos gêneros e épocas, servindo como uma fonte de referência prática e funcional.

---

> IMPORTANTE !!!
>
> Este documento define o ESCOPO do projeto daquilo que será construído.
>
> Alguns trechos aqui também aparecem de forma resumida, mas possuem documentos específicos e detalhados:
>
> - Arquitetura → ver `ARQUITETURA.md`
> - Resiliência → ver `RESILIENCE.md`
> - Testes → ver `TEST_PLAN.md` e `CYPRESS_E2E.md`
> - CI/CD → ver `CI_CD.md`
> - Deploy → ver `DEPLOY_(VERCEL_RENDER).md`
>
> Este documento não substitui esses arquivos, apenas contextualiza o funcionamento geral do nosso site.

---

## Tecnologias e Versões

### Frontend

- HTML5 → Documentação (https://www.w3schools.com/html/)
- CSS3 → Documentação (https://www.w3schools.com/css/)
- Bootstrap 5.3.x (framework CSS) → [Download](https://getbootstrap.com/) | Documentação (https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- JavaScript ES6+ (opcional, para filtros, carrossel e validação de formulários) → Documentação (https://www.w3schools.com/js/)

### Backend

- Node.js v20.20.2 LTS → [Download](https://nodejs.org/en/download) | [Documentação](https://nodejs.org/docs/latest-v20.x/api/)
  - Gerenciamento de versão: fnm (Linux e Windows) → [Instalação](https://github.com/Schniz/fnm)
  - Execução:
    - Linux: terminal padrão
    - Windows: Git Bash (obrigatório)
- Express.js v4.19.x → [Documentação](https://expressjs.com/)
- pnpm v9.x → [Documentação](https://pnpm.io/)
- Docker
  - Linux: Docker Engine 29.4.0 → [Download](https://docs.docker.com/engine/install/) | [Documentação](https://docs.docker.com/engine/)
  - Windows: Docker Desktop 4.69.0 → [Download](https://www.docker.com/products/docker-desktop) | [Documentação](https://docs.docker.com/desktop/)
- PostgreSQL v16.x (homologação via Docker) → [Download](https://www.postgresql.org/download/) | [Documentação](https://www.postgresql.org/docs/16/)
- Supabase v16.x (produção) → [Site Oficial](https://supabase.com/) | [Documentação](https://supabase.com/docs)

---

### Resiliência do Backend

O backend deve continuar funcionando mesmo se o banco de dados estiver indisponível.

#### Implementação obrigatória:

```js
let dbConnected = true;

try {
  await conectarBanco();
} catch {
  dbConnected = false;
  console.log("Banco indisponível — modo fallback ativo");
}
```

---

#### Comportamento esperado:

- Se banco estiver ativo → usar dados reais
- Se banco falhar → retornar dados mock

#### Exemplo do endpoint:

```js
const mockFilmes = require("./mock/filmes.json");

app.get("/api/filmes", (req, res) => {
  if (!dbConnected) {
    return res.json(mockFilmes);
  }

  // consulta no banco
});
```

---

### Dados Mock do Backend

Criar estrutura:

```
/backend/mock/filmes.json
```

---

Referência:

- [https://expressjs.com/](https://expressjs.com/)
- [https://nodejs.org/docs/latest-v20.x/api/](https://nodejs.org/docs/latest-v20.x/api/)

---

## Estrutura do Site (Frontend)

### 1. Home

- Navbar com links para todas as páginas
- Seções:
  - Filmes variados (cards com imagem + título)
  - Lançamentos (carrossel ou grid)
  - Gêneros (cards clicáveis)
  - Por ano de lançamento
  - Clássicos
- Footer com redes sociais

---

### Modo Mock / Desacoplamento do Frontend

O frontend deve funcionar independente do backend.

#### Estrutura:

```
/frontend/data/filmes.json
/frontend/data/diretores.json
```

---

### Configuração de Ambiente do Frontend

Criar arquivo `.env`:

```
VITE_API_URL=https://seu-backend.onrender.com
```

---

# ATENÇÃO !!!

- `Nunca deixar VITE_API_URL vazio em produção`
- Nunca subir frontend antes do backend
- Sempre validar API antes do deploy

---

#### Implementação:

```js
const API_URL = import.meta.env.VITE_API_URL || "";
const USE_MOCK = !API_URL;

async function getFilmes() {
  if (USE_MOCK || !API_URL) {
    return fetch("/data/filmes.json").then((res) => res.json());
  }

  return fetch(`${API_URL}/api/filmes`).then((res) => res.json());
}
```

---

#### Fluxo:

- USE_MOCK = true → usa dados locais
- USE_MOCK = false → usa API
- Sem API → fallback automático
- Frontend nunca quebra

---

Referência:

- [https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

---

### 2. Diretores Icônicos

- Cards com foto, nome e principais obras
- Layout em grid com Bootstrap

### 3. Contato

- Formulário:
  - Nome
  - Email
  - Mensagem
- Validação em JavaScript
- Integração com backend

---

### Formulário com Fallback

O formulário deve funcionar mesmo se a API falhar.

```js
const API_URL = import.meta.env.VITE_API_URL || "";
async function enviarFormulario(dados) {
  try {
    await fetch(`${API_URL}/api/contato`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    });

    alert("Mensagem enviada com sucesso!");
  } catch {
    alert("Modo offline: mensagem salva localmente");
    localStorage.setItem("mensagem", JSON.stringify(dados));
  }
}
```

---

## Estrutura do Backend

### Endpoints da API

- `/api/filmes`
- `/api/diretores`
- `/api/contato`

---

## Testes

- Cypress v13.x (E2E) → [Documentação](https://docs.cypress.io/)
- Jest v29.x (opcional) → Documentação (https://jestjs.io/docs/getting-started)
- Supertest v6.x (opcional) → [Documentação](https://github.com/ladjs/supertest)

---

## Testes (Cypress)

### Cenários

1. Carregamento das páginas
2. Navegação via navbar
3. Interatividade
4. Formulário de contato
5. Responsividade

---

### Configuração do Cypress

Criar arquivo `cypress.config.js`:

```js
module.exports = {
  e2e: {
    baseUrl: "http://localhost:3000",
  },
};
```

---

### Testes Desacoplados

Os testes NÃO devem depender do backend.

#### Estrutura:

```
/cypress/fixtures/filmes.json
```

#### Interceptação:

```js
cy.intercept("GET", "/api/filmes", {
  fixture: "filmes.json",
});
```

#### Benefícios:

- testes sempre passam
- independência do backend

---

Referência:

- [https://docs.cypress.io/api/commands/intercept](https://docs.cypress.io/api/commands/intercept)

---

### DevOps

- GitHub Actions (CI/CD) → [Documentação](https://docs.github.com/actions)
- Render (backend) → [Site Oficial](https://render.com/) | [Documentação](https://render.com/docs)
- Vercel ou GitHub Pages (frontend) → [Vercel](https://vercel.com/) | [GitHub Pages](https://pages.github.com/)

---

### Banco de Dados

#### Tabela `filmes`

- id (PK)
- título
- ano
- gênero
- diretor_id (FK)
- tipo

#### Tabela `diretores`

- id (PK)
- nome
- nacionalidade
- principais_obras

#### Tabela `mensagens`

- id (PK)
- nome
- email
- mensagem
- data_envio

---

## Versionamento (GitHub)

- Repositório privado
- Branch principal: `main`

### Branches

- `feature/frontend` → Lucas
- `feature/tests` → Matheus
- `feature/devops` → Henrique
- `feature/backend` → Henrique (com apoio do Lucas)

- Pull Requests obrigatórios
- Histórico de commits consistente
- PR obrigatório

---

## DevOps (CI/CD)

### Pipeline CI

- Testes Cypress em cada PR
- Testes backend (Jest + Supertest)
  - No modo offline
  - Cypress roda com mock
  - NÃO depende do backend

### Pipeline CD

- Frontend → Vercel ou GitHub Pages
- Backend → Render
- Banco → Docker (homologação) / Supabase (produção)

- Alterações refletidas durante apresentação

---

## Ordem de Deploy

#### Passo a passo obrigatório:

1. Subir backend no Render
2. Validar endpoint:
   - [https://seu-backend/api/filmes](https://seu-backend/api/filmes)

3. Configurar variável `.env` no frontend:

```
Exemplo: VITE_API_URL=https://seu-backend.onrender.com
```

4. Subir frontend no Vercel ou GitHub Pages

---

# ATENÇÃO !!!

- `Nunca deixar VITE_API_URL vazio em produção`
- Nunca subir frontend antes do backend
- Sempre validar API antes do deploy

---

## Modo Offline

O sistema deve funcionar mesmo em falhas externas.

### Regras:

Frontend:

- usa mock automaticamente

Backend:

- usa fallback

Testes:

- usar intercept

---

## Teste de Robustez

Antes da apresentação:

1. Desligar backend
2. Rodar frontend
3. Rodar Cypress
4. Testar envio do formulário

### Resultado esperado:

- Site funcionando
- Dados carregando
- Testes passando
- Formulário não quebrando

---

## Documentação

- Descrição do projeto
- Tecnologias e versões
- Instalação e execução
- Homologação (Docker + PostgreSQL)
- Produção (Supabase + Render)
- Link do sistema
- Créditos da equipe

---

## Validação Final

- HTML, CSS, Bootstrap
- JavaScript ES6+
- Node.js v20.20.2 LTS + Express v4.19.x
- PostgreSQL v16.x (Docker + Supabase)
- Cypress v13.x
- GitHub privado
- CI/CD
- Deploy (Render + Vercel/GitHub Pages)
- README completo

---
