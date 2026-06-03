# Tecnologias e Arquitetura

> IMPORTANTE
>
> Este documento define exclusivamente as tecnologias utilizadas no projeto.
>
> Algumas seções aqui aparecem de forma resumida, mas possuem documentos específicos:
>
> - Arquitetura → ver `ARQUITETURA.md`
> - Testes → ver `TEST_PLAN.md` e `CYPRESS_E2E.md`
> - CI/CD → ver `CI_CD.md`
> - Deploy → ver `DEPLOY_(VERCEL_RENDER).md`
> - Versionamento → ver `VERSIONAMENTO.md`
>
> Este documento não substitui esses arquivos.

---

## Frontend

- HTML5 → Documentação (https://www.w3schools.com/html/)
- CSS3 → Documentação (https://www.w3schools.com/css/)
<<<<<<< HEAD
- Bootstrap 5.3.8.x → [Download](https://getbootstrap.com/) | Documentação (https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- JavaScript ES6+ → Documentação (https://www.w3schools.com/js/)
- Vite v7.3.3 → [Site Oficial](https://vite.dev/) | [Documentação](https://vite.dev/guide/)
  - Servidor de desenvolvimento
  - Build de produção
  - Gerenciamento de variáveis de ambiente
=======
- Bootstrap 5.3.x → [Download](https://getbootstrap.com/) | Documentação (https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- JavaScript ES6+ → Documentação (https://www.w3schools.com/js/)
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

---

## Backend

<<<<<<< HEAD
- Node.js v24.16.0 → [Download](https://nodejs.org/en/download) | [Documentação](https://nodejs.org/docs/latest-v24.x/api/)
=======
- Node.js v20.20.2 LTS → [Download](https://nodejs.org/en/download) | [Documentação](https://nodejs.org/docs/latest-v20.x/api/)
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
  - Gerenciamento de versão: fnm (Linux e Windows) → [Instalação](https://github.com/Schniz/fnm)
  - Execução:
    - Linux: terminal padrão
    - Windows: Git Bash (obrigatório)
<<<<<<< HEAD
- pnpm v10.12.4.x (`corepack enable pnpm`) → [Documentação](https://pnpm.io/)
- Express.js v4.22.2.x → [Documentação](https://expressjs.com/)
- JSON Web Token (JWT)
  - Autenticação
  - Autorização
  - Proteção de rotas
- Docker
  - Linux: Docker Engine 29.5.2 → [Download](https://docs.docker.com/engine/install/) | [Documentação](https://docs.docker.com/engine/)
  - Windows: Docker Desktop 4.69.0 → [Download](https://www.docker.com/products/docker-desktop) | [Documentação](https://docs.docker.com/desktop/)
- PostgreSQL v16-alpine (homologação) → [Download](https://www.postgresql.org/download/) | [Documentação](https://www.postgresql.org/docs/16/)
=======
- pnpm v9.x (`corepack enable pnpm`) → [Documentação](https://pnpm.io/)
- Express.js v4.19.x → [Documentação](https://expressjs.com/)
- Docker
  - Linux: Docker Engine 29.4.0 → [Download](https://docs.docker.com/engine/install/) | [Documentação](https://docs.docker.com/engine/)
  - Windows: Docker Desktop 4.69.0 → [Download](https://www.docker.com/products/docker-desktop) | [Documentação](https://docs.docker.com/desktop/)
- PostgreSQL v16.x (homologação) → [Download](https://www.postgresql.org/download/) | [Documentação](https://www.postgresql.org/docs/16/)
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
- Supabase v16.x (produção) → [Site Oficial](https://supabase.com/) | [Documentação](https://supabase.com/docs)

---

## Testes

<<<<<<< HEAD
- Cypress v14.5.4.x → [Documentação](https://docs.cypress.io/)
- Jest v30.4.2.x → [Documentação](https://jestjs.io/docs/getting-started)
=======
- Cypress v13.x → [Documentação](https://docs.cypress.io/)
- Jest v29.x (opcional) → Documentação (https://jestjs.io/docs/getting-started)
- Supertest v6.x (opcional) → [Documentação](https://github.com/ladjs/supertest)
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

---

## DevOps

<<<<<<< HEAD
- GitHub Actions → Documentação (https://docs.github.com/actions)

- SonarQube Community Edition
  - Análise estática de código
  - Quality Gate
  - Integração com GitHub Actions

- Render → Site Oficial (https://render.com/) | Documentação (https://render.com/docs)

- Vercel ou GitHub Pages
  - Vercel (https://vercel.com/)
  - GitHub Pages (https://pages.github.com/)
=======
- GitHub Actions → [Documentação](https://docs.github.com/actions)
- Render → [Site Oficial](https://render.com/) | [Documentação](https://render.com/docs)
- Vercel ou GitHub Pages → [Vercel](https://vercel.com/) | [GitHub Pages](https://pages.github.com/)
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

---

## Ferramentas de Desenvolvimento

<<<<<<< HEAD
- **Git v2.54 (recomendado)** → [Download](https://git-scm.com/downloads) | [Documentação](https://git-scm.com/doc)
=======
- **Git v2.53 (recomendado)** → [Download](https://git-scm.com/downloads) | [Documentação](https://git-scm.com/doc)
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
- **Visual Studio Code (VS Code)** → [Download](https://code.visualstudio.com/) | [Documentação](https://code.visualstudio.com/docs)

### Extensões recomendadas para VS Code

- ESLint → Extensão (https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
<<<<<<< HEAD
  - Padronização de código JavaScript
  - Análise estática
  - Identificação de problemas de qualidade

=======
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
- Prettier → Extensão (https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- Docker → Extensão (https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
- PostgreSQL → Extensão (https://marketplace.visualstudio.com/items?itemName=ckolkman.vscode-postgres)
- GitHub Pull Requests and Issues → Extensão (https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)
- Cypress Test Runner → Extensão (https://marketplace.visualstudio.com/items?itemName=cypress.cypress)
- REST Client → Extensão (https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

---

## Estrutura do Site (Frontend)

### Home

- Navbar
- Seções:
  - Filmes por Categorias
  - Lançamentos
  - Gêneros
  - Por ano
  - Clássicos
- Footer

### Diretores Icônicos

- Grid com cards

### Contato

- Formulário com validação
- Integração com backend

---

## Estrutura do Backend

### Endpoints

- `/api/filmes`
- `/api/diretores`
- `/api/contato`

### Banco

- `filmes` → id, título, ano, gênero, diretor_id, tipo
- `diretores` → id, nome, nacionalidade, principais_obras
- `mensagens` → id, nome, e-mail, mensagem, data_envio

---

## Testes (Cypress)

1. Carregamento
2. Navegação
3. Interatividade
4. Formulário
5. Responsividade

---

## Versionamento

- Repositório privado

- Branch `main` → produção
- Branch `dev` → integração

### Branches

- Uso obrigatório de branches no padrão:
  - feature/<area>-nome

Exemplos:
<<<<<<< HEAD

=======
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
- feature/frontend-home
- feature/backend-api-filmes
- feature/tests-navbar
- feature/devops-pipeline

### Regras obrigatórias

- Proibido commit direto em `main` e `dev`
- Toda alteração deve ser feita via branch `feature/*`
- Pull Request obrigatório para `dev`
- Merge somente após aprovação

---

## CI/CD

### CI

- Cypress
<<<<<<< HEAD
- Jest
=======
- Jest + Supertest
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

### CD

- Frontend → Vercel / GitHub Pages
- Backend → Render
- Banco → Docker / Supabase

---

## Documentação

- Setup completo
- Execução
- Homologação
- Produção
- Créditos

---

## Validações

- HTML, CSS, Bootstrap
- JavaScript ES6+
<<<<<<< HEAD
- Node.js v24.16.0 + Express
=======
- Node.js v20.20.2 LTS + Express
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
- PostgreSQL + Supabase
- Cypress
- GitHub
- CI/CD
- Deploy
- README completo
- Git instalado e configurado
- VS Code com extensões recomendadas

---
