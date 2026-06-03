<<<<<<< HEAD
---
<p align="center">
<img src="../img/cinelogplay.png" alt="CinelogPlay Banner" width="600"/>
</p>
---

## Índice

=======

---

<p align="center">
  <img src="../img/cinelogplay.png" alt="CinelogPlay Banner" width="600"/>
</p>

---

## Índice
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
- [Tema](#tema)
- [Objetivo do Documento](#objetivo-do-documento)
  - [Documentos complementares](#documentos-complementares)
- [Fluxo Geral do Projeto](#fluxo-geral-do-projeto)
  - [Fluxo de Trabalho da Equipe (Obrigatório)](#fluxo-de-trabalho-da-equipe-obrigatório)
- [Tecnologias e Versões](#tecnologias-e-versões)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Arquitetura Geral](#arquitetura-geral)
  - [Características obrigatórias](#características-obrigatórias)
- [Resiliência do Backend](#resiliência-do-backend)

- [Estrutura do Frontend](#estrutura-do-frontend)
- [Integração Frontend + Backend](#integração-frontend--backend)

- [Estrutura do Backend](#estrutura-do-backend)
- [Banco de Dados](#banco-de-dados)

- [Testes](#testes)
- [Versionamento (GitHub)](#versionamento-github)
  - [Estratégia de Branching](#estratégia-de-branching)
  - [Fluxo Técnico de Trabalho (Git)](#fluxo-técnico-de-trabalho-git)
  - [Regras Obrigatórias de Versionamento](#regras-obrigatórias-de-versionamento)

- [DevOps](#devops)
- [Ordem de Desenvolvimento](#ordem-de-desenvolvimento)
- [Ordem de Deploy](#ordem-de-deploy)

- [Modo Offline](#modo-offline)
- [Teste de Robustez](#teste-de-robustez)

- [Documentação](#documentação)
- [Validação Final](#validação-final)
- [Definition of Done (DoD)](#definition-of-done-dod)
- [Entrega](#entrega)

---

## Tema

**CinelogPlay — Catálogo Informativo de Produções Cinematográficas**

O CinelogPlay é uma plataforma centralizada de consulta sobre o universo do cinema mundial. O objetivo do projeto é oferecer um inventário organizado que vai além da sinopse, apresentando detalhes técnicos de produção, composição de elenco e a trajetória de diretores.

A proposta é ser um "diário de bordo" do cinema, onde o usuário encontra informações rápidas e estruturadas sobre filmes de diversos gêneros e épocas, servindo como uma fonte de referência prática e funcional.

---

## Objetivo do Documento

Este documento define **o escopo funcional do projeto**, ou seja, **o que será construído** e **como o sistema deve se comportar**.

Este documento **NÃO cobre configuração de ambiente**.

Para isso, consulte:

- `05_AMBIENTE_WINDOWS.md`
- `06_AMBIENTE_LINUX.md`

---

### Documentos complementares

- Arquitetura → `03_ARQUITETURA.md`
- Resiliência → `17_RESILIENCE.md`
- Testes → `15_TEST_PLAN.md` e `16_CYPRESS_E2E.md`
- CI/CD → `18_CI_CD.md`
- Deploy → `19_DEPLOY_(VERCEL_RENDER).md`

Este documento atua como **visão central do projeto**, conectando todos os demais.

---

## Fluxo Geral do Projeto

Este é o fluxo de execução do projeto:

<<<<<<< HEAD
1. Definição da `arquitetura`
2. Implementação do `backend` (com fallback)
3. Implementação do `frontend` (modo mock)
4. Integração frontend + backend
5. Implementação dos testes usando (`Cypress`) para o frontend e (`Jest`) para o backend
6. SonarQube
7. Configuração de CI/CD
8. Deploy (backend → frontend)
9. Validação final (modo offline incluso)
=======
1. Definição da arquitetura
2. Implementação do backend (com fallback)
3. Implementação do frontend (modo mock)
4. Integração frontend + backend
5. Implementação dos testes (Cypress)
6. Configuração de CI/CD
7. Deploy (backend → frontend)
8. Validação final (modo offline incluso)
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

Este fluxo deve ser seguido por toda a equipe.

---

### Responsabilidade por Área

<<<<<<< HEAD
- Frontend → Lucas
- Backend → Henrique (principal) + Lucas (apoio)
- Testes → Matheus + Winley (apoio)
- DevOps → Henrique + Winley (apoio)
- Documentação → Todos
=======
* Frontend → Lucas
* Backend → Henrique (principal) + Lucas (apoio)
* Testes → Matheus + Winley (apoio)
* DevOps → Henrique + Winley (apoio)
* Documentação → Todos
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

---

## Versionamento (GitHub)

O projeto utiliza controle de versão com fluxo padronizado.

- Repositório privado

### Estratégia de Branching

O projeto utiliza um fluxo baseado em ambiente de desenvolvimento controlado:

- `main` → branch estável (produção / entrega final)
- `dev` → branch de integração contínua (homologação)
- `feature/*` → branches de desenvolvimento criadas a partir de `dev`

<<<<<<< HEAD
### ATENÇÃO!!!
=======

### ATENÇÃO!!! 
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

> ❗ ANTES DE INICIAR A CRIAÇÃO DA BRANCH → ATUALIZAR SEU AMBIENTE LOCAL

---

## Fluxo de Trabalho da Equipe (Obrigatório)

Este fluxo define como os membros devem atuar no projeto utilizando o modelo de versionamento e integração contínua com branch `dev`.

    →  Cada desenvolvedor trabalha em sua branch de feature

1. Sincronizar branch `dev` local:
<<<<<<< HEAD
   - `git checkout dev` → `git pull origin dev`

2. Criar branch `feature/*` a partir da `dev` atualizada:
   - `git checkout -b feature/[area]-nome`

### Exemplos:

```bash
git checkout -b feature/frontend-home
git checkout -b feature/backend-api-filmes
git checkout -b feature/tests-cypress-navbar
git checkout -b feature/devops-docker-setup
git checkout -b feature/docs-nome-do-ajuste
```
=======
    - `git checkout dev` → `git pull origin dev`

2. Criar branch `feature/*` a partir da `dev` atualizada:

    - `git checkout -b feature/[area]-nome`

### Exemplos:

  ```bash
  git checkout -b feature/frontend-home
  git checkout -b feature/backend-api-filmes
  git checkout -b feature/tests-cypress-navbar
  git checkout -b feature/devops-docker-setup
  git checkout -b feature/docs-nome-do-ajuste
  ```
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

3. Desenvolver a funcionalidade seguindo padrões do projeto

4. Commitar alterações seguindo padrão:
<<<<<<< HEAD
   - `tipo: descrição clara`

5. Push para GitHub:
   - `git push origin feature/[area]-nome`
=======
    - `tipo: descrição clara`

5. Push para GitHub:
    - `git push origin feature/[area]-nome`
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

6. Abrir Pull Request para `dev` (base: `dev`, compare: seu-branch)
7. Comunicar no grupo da equipe (`WhatsApp`) com link do PR
8. Aguardar revisão de outro membro da equipe
9. Ajustar caso necessário (novo commit + push)
10. Merge na `dev` após aprovação + CI verde
11. CI executa automaticamente no Pull Request
12. CD será executado após validação em `dev`
13. Realizar exclusão manual da sua branch após finalizar

14. Quando pronto para produção:
    - PR de dev → main → **Deploy final**

---

## Regras Obrigatórias de Versionamento

> **LEIA ANTES DE FAZER QUALQUER COMMIT**

<<<<<<< HEAD
- ❗ Pull Request é obrigatório
- ❗ Todo código deve ser enviado via Pull Request
- ❗ Proibido commit direto na `main`
- ❗ Proibido commit direto na `dev`
- ❗ Toda alteração deve ser feita via branch `feature/*`
- ❗ Todo PR deve ser revisado antes do merge
- ❗ CI deve rodar em todos os PRs
- ❗ Manter commits organizados, claros e limpos
- ❗ Comunicar PR no grupo da equipe via (`WhatsApp`) para aprovção
- ❗ Nunca criar branch a partir de código desatualizado
=======
* ❗ Pull Request é obrigatório
* ❗ Todo código deve ser enviado via Pull Request
* ❗ Proibido commit direto na `main`
* ❗ Proibido commit direto na `dev`
* ❗ Toda alteração deve ser feita via branch  `feature/*`
* ❗ Todo PR deve ser revisado antes do merge
* ❗ CI deve rodar em todos os PRs
* ❗ Manter commits organizados, claros e limpos
* ❗ Comunicar PR no grupo da equipe via (`WhatsApp`) para aprovção
* ❗ Nunca criar branch a partir de código desatualizado
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

> **PR NÃO É OPCIONAL — É REGRA DO PROJETO**

---

## Tecnologias e Versões

### Frontend

<<<<<<< HEAD
- HTML5 → [Site Oficial](https://html.spec.whatwg.org/) | [Referência](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
  - Estrutura das páginas
  - Semântica da aplicação
  - Base da interface do usuário

- CSS3 → [Referência](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
  - Estilização da interface
  - Layout responsivo
  - Customização visual

- Bootstrap v5.3.8 → [Site Oficial](https://getbootstrap.com/) | [Documentação](https://getbootstrap.com/docs/5.3/)
  - Sistema de grid responsivo
  - Componentes visuais
  - Padronização da interface

- JavaScript ES6+ → [Referência](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
  - Regras de negócio do frontend
  - Manipulação do DOM
  - Consumo da API

- Vite v7.3.3 → [Site Oficial](https://vite.dev/) | [Documentação](https://vite.dev/guide/)
  - Empacotamento do frontend
  - Gerenciamento de variáveis de ambiente (.env)
  - Servidor local de desenvolvimento
  - Build de produção

Arquivos de gerenciamento:

- package.json
- pnpm-lock.yaml

---

### Backend

- Node.js v24.16.0 → [Site Oficial](https://nodejs.org/) | [Documentação](https://nodejs.org/docs/latest/api/)
  - Runtime da aplicação
  - Execução do servidor backend
  - Gerenciamento do ambiente JavaScript

- Express.js v4.22.2 → [Site Oficial](https://expressjs.com/) | [Documentação](https://expressjs.com/)
  - Criação da API REST
  - Gerenciamento de rotas
  - Middleware da aplicação

- pnpm v10.12.4 → [Site Oficial](https://pnpm.io/) | [Documentação](https://pnpm.io/)
  - Gerenciamento de dependências
  - Workspace do monorepo
  - Execução de scripts

- PostgreSQL v16-alpine.x → [Site Oficial](https://www.postgresql.org/) | [Documentação](https://www.postgresql.org/docs/16/)
  - Banco de dados relacional
  - Persistência de dados
  - Ambiente de homologação

- Supabase v16.x → [Site Oficial](https://supabase.com/) | [Documentação](https://supabase.com/docs)
  - Banco de dados em produção
  - Serviços gerenciados
  - Autenticação e integração

- Docker Engine v29.5.2 → [Site Oficial](https://www.docker.com/) | [Documentação](https://docs.docker.com/engine/)
  - Containerização da aplicação
  - Padronização do ambiente
  - Homologação local

Arquivos de gerenciamento:

- package.json
- pnpm-lock.yaml

=======
- HTML5 → Documentação (https://www.w3schools.com/html/)
- CSS3 → Documentação (https://www.w3schools.com/css/)
- Bootstrap 5.3.x (framework CSS) → [Download](https://getbootstrap.com/) | Documentação (https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- JavaScript ES6+ ( para filtros, carrossel e validação de formulários ) → Documentação (https://www.w3schools.com/js/)

### Backend

- Node.js v20.20.2 LTS → [Download](https://nodejs.org/en/download) | [Documentação](https://nodejs.org/docs/latest-v20.x/api/)
  - Gerenciamento de versão: fnm ( Linux e Windows ) → [Instalação](https://github.com/Schniz/fnm)
  - Execução:
    - Linux: terminal padrão
    - Windows: Git Bash ( obrigatório )
- Express.js v4.19.x → [Documentação](https://expressjs.com/)
- pnpm v9.x → [Documentação](https://pnpm.io/)
- Docker
  - Linux: Docker Engine 29.4.0 → [Download](https://docs.docker.com/engine/install/) | [Documentação](https://docs.docker.com/engine/)
  - Windows: Docker Desktop 4.69.0 → [Download](https://www.docker.com/products/docker-desktop) | [Documentação](https://docs.docker.com/desktop/)
- PostgreSQL v16.x ( homologação via Docker ) → [Download](https://www.postgresql.org/download/) | [Documentação](https://www.postgresql.org/docs/16/)
- Supabase v16.x ( produção ) → [Site Oficial](https://supabase.com/) | [Documentação](https://supabase.com/docs)
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
---

## Arquitetura Geral

O sistema segue uma arquitetura em 3 camadas:

- Frontend (interface do usuário)
- Backend (API REST)
- Banco de dados (PostgreSQL)

### Características obrigatórias:

- Frontend desacoplado do backend
- Backend resiliente (fallback ativo)
- Testes independentes da API
- Deploy separado por camada

---

## Resiliência do Backend

O backend deve continuar funcionando mesmo se o banco estiver indisponível.

<<<<<<< HEAD
### Implementação obrigatória (Exemplo):
=======
### Implementação obrigatória:
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

```js
let dbConnected = true;

try {
  await conectarBanco();
} catch {
  dbConnected = false;
  console.log("Banco indisponível — modo fallback ativo");
}
```
<<<<<<< HEAD

=======
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
---

### Comportamento esperado:

<<<<<<< HEAD
- Banco ativo → usar dados reais
- Banco indisponível → retornar dados mock
=======
* Banco ativo → usar dados reais
* Banco indisponível → retornar dados mock
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

### Exemplo do endpoint:

```js
const mockFilmes = require("./mock/filmes.json");

app.get("/api/filmes", async (req, res) => {
  try {
    if (!dbConnected) {
      return res.json({
        success: true,
<<<<<<< HEAD
        data: mockFilmes,
=======
        data: mockFilmes
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
      });
    }

    const filmes = await buscarFilmes();

    return res.json({
      success: true,
<<<<<<< HEAD
      data: filmes,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Erro ao buscar filmes",
=======
      data: filmes
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Erro ao buscar filmes"
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
    });
  }
});
```

---

## Estrutura do Frontend

### Home

<<<<<<< HEAD
- Navbar com links para todas as páginas
- Seções:
  - Filmes variados (cards com imagem + título)
  - Lançamentos (carrossel ou grid)
  - Gêneros (cards clicáveis)
  - Por ano de lançamento
  - Clássicos

- Footer com redes sociais
=======
* Navbar com links para todas as páginas
* Seções:

  * Filmes variados (cards com imagem + título)
  * Lançamentos (carrossel ou grid)
  * Gêneros (cards clicáveis)
  * Por ano de lançamento
  * Clássicos
* Footer com redes sociais
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

---

## Integração Frontend + Backend

### Comportamento do Frontend

<<<<<<< HEAD
=======

>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
> Modo Mock (Desacoplamento)

O frontend deve funcionar de forma independente do backend.

<<<<<<< HEAD
### Estrutura obrigatória (exemplo):

```
/frontend/src/data/filmes.json
```

=======
### Estrutura obrigatória:

```
/frontend/data/filmes.json
```
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "titulo": "O Poderoso Chefão",
      "ano": 1972,
      "genero": "Crime",
      "tipo": "Clássico"
    },
    {
      "id": 2,
      "titulo": "Interestelar",
      "ano": 2014,
      "genero": "Ficção Científica",
      "tipo": "Moderno"
    }
  ]
}
```

```
<<<<<<< HEAD
/frontend/src/data/diretores.json
```

=======
/frontend/data/diretores.json
```
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "nome": "Francis Ford Coppola",
      "nacionalidade": "EUA",
<<<<<<< HEAD
      "principais_obras": ["O Poderoso Chefão", "Apocalypse Now"]
=======
      "principais_obras": [
        "O Poderoso Chefão",
        "Apocalypse Now"
      ]
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
    },
    {
      "id": 2,
      "nome": "Christopher Nolan",
      "nacionalidade": "Reino Unido",
      "principais_obras": [
        "Interestelar",
        "A Origem",
        "Batman: O Cavaleiro das Trevas"
      ]
    }
  ]
}
```

---

### Configuração de consumo de API

```js
const API_URL = import.meta.env.VITE_API_URL || "";
const USE_MOCK = !API_URL;
<<<<<<< HEAD
```
=======
````
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

---

### Regra de funcionamento:

<<<<<<< HEAD
- API disponível → consumir backend
- API indisponível → usar mock local
- API não configurada → usar mock automaticamente
=======
* API disponível → consumir backend
* API indisponível → usar mock local
* API não configurada → usar mock automaticamente
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

---

### Implementação:

```js
const API_URL = import.meta.env.VITE_API_URL || "";
const USE_MOCK = !API_URL;

<<<<<<< HEAD
import filmes from "../data/filmes.json";

async function getFilmes() {
  if (USE_MOCK || !API_URL) {
    return filmes.data;
=======
async function getFilmes() {
  if (USE_MOCK || !API_URL) {
    return fetch("/data/filmes.json")
      .then((res) => res.json())
      .then((json) => json.data);
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
  }

  return fetch(`${API_URL}/api/filmes`)
    .then((res) => res.json())
    .then((json) => json.data);
}
```
<<<<<<< HEAD

```js
const API_URL = import.meta.env.VITE_API_URL || "";
const USE_MOCK = !API_URL;

import diretores from "../data/diretores.json";

async function getDiretores() {
  if (USE_MOCK || !API_URL) {
    return diretores.data;
  }

  return fetch(`${API_URL}/api/diretores`)
    .then((res) => res.json())
    .then((json) => json.data);
}
```

=======
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
---

### Fluxo:

- USE_MOCK = true → usa dados locais
- USE_MOCK = false → usa API
- Sem API → fallback automático
- Frontend nunca quebra

Referência:

- [https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

---

### Configuração de Ambiente do Frontend

Criar arquivo `.env`:

```
VITE_API_URL=https://seu-backend.onrender.com
```

---

## ATENÇÃO !!!

- `Nunca deixar VITE_API_URL vazio em produção`
- Nunca subir frontend antes do backend
- Sempre validar API antes do deploy

---

### Obrigatório:

<<<<<<< HEAD
- O frontend nunca pode quebrar
- O sistema deve funcionar sem backend
- O fallback deve ser automático
=======
* O frontend nunca pode quebrar
* O sistema deve funcionar sem backend
* O fallback deve ser automático
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

---

### Página: Diretores Icônicos

<<<<<<< HEAD
- Cards com foto, nome e principais obras
- Informações:
  - Nome
  - Foto
  - Principais obras

- Layout responsivo com Bootstrap
=======
* Cards com foto, nome e principais obras
* Informações:

  * Nome
  * Foto
  * Principais obras
* Layout responsivo com Bootstrap
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

---

### Página: Contato

- Campos obrigatórios no Formulário:
<<<<<<< HEAD
  - Nome
  - Email
  - Mensagem

* Validação em JavaScript
* Integração com backend
=======

   * Nome
   * Email
   * Mensagem
 * Validação em JavaScript
 * Integração com backend
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

---

### Regras:

<<<<<<< HEAD
- Validação via JavaScript
- Integração com backend quando disponível
- Funcionamento offline obrigatório
=======
* Validação via JavaScript
* Integração com backend quando disponível
* Funcionamento offline obrigatório
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

---

### Formulário com fallback

O formulário deve funcionar mesmo se a API falhar.

```js
const API_URL = import.meta.env.VITE_API_URL || "";
const USE_MOCK = !API_URL;

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

### Regras

<<<<<<< HEAD
- O formulário nunca pode falhar
- Em caso de erro → fallback localStorage
- Experiência do usuário deve ser contínua
=======
* O formulário nunca pode falhar
* Em caso de erro → fallback localStorage
* Experiência do usuário deve ser contínua
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

---

## Estrutura do Backend

<<<<<<< HEAD
### Estrutura de pastas inicial:

```
/backend/src
 ├── auth/
 ├── config/
 ├── controllers/
 ├── database/seeders
 ├── middleware/
 ├── mock/
 ├── models/
 ├── routes/
 ├── services/
 ├── tests/
 ├── utils/
=======
### Estrutura de pastas:

```
/backend
 ├── controllers/
 ├── routes/
 ├── services/
 ├── config/
 ├── mock/
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
 └── server.js
```

O backend é responsável por fornecer dados via API REST.

### Responsabilidades:

<<<<<<< HEAD
- Disponibilizar endpoints
- Gerenciar acesso ao banco
- Atuar com fallback em caso de falha
- Garantir respostas consistentes
=======
* Disponibilizar endpoints
* Gerenciar acesso ao banco
* Atuar com fallback em caso de falha
* Garantir respostas consistentes
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

---

### Ambiente de desenvolvimento

O backend deve suportar dois modos de execução:

<<<<<<< HEAD
- Local (Node.js v24.16.0)
=======
- Local (Node.js)
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
- Docker (ambiente de homologação)

#### Requisitos obrigatórios:

<<<<<<< HEAD
- Docker Engine
- Docker Compose (plugin oficial integrado ao Docker)

Comando oficial:

```bash
docker compose
```

### Objetivo:

- Orquestração do PostgreSQL
- Ambiente padronizado para desenvolvimento
- Execução local da aplicação
- `docker-compose.yml` para subida do PostgreSQL
- Variáveis de ambiente configuradas (`.env`)

=======
- `docker-compose.yml` para subida do PostgreSQL
- Variáveis de ambiente configuradas (`.env`)

#### Objetivo:

>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
Garantir que o ambiente de desenvolvimento seja padronizado e reproduzível por todos os membros da equipe.

---

<<<<<<< HEAD
### Endpoints obrigatórios (exemplos):

- /api/filmes
- /api/diretores
- /api/contato
- /api/auth
- /api/atores
- /api/avaliacoes
- /api/favoritos
=======
### Endpoints obrigatórios:

* `/api/filmes`
* `/api/diretores`
* `/api/contato`

>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

### Padrão de resposta da API

Seguir obrigatoriamente o padrão definido em `02_REQUISITOS.md (RF11)`.

Sucesso:

```
{
  "success": true,
  "data": [...]
}
```

Erro:

```
{
  "success": false,
  "error": "mensagem descritiva"
}
```

---

### Dados Mock (Backend)

Estrutura obrigatória:

```
/backend/mock/filmes.json
```

Referência:

- [https://expressjs.com/](https://expressjs.com/)
<<<<<<< HEAD
- [https://nodejs.org/docs/latest-v24.16.0.x/api/](https://nodejs.org/docs/latest-v24.16.0.x/api/)
=======
- [https://nodejs.org/docs/latest-v20.x/api/](https://nodejs.org/docs/latest-v20.x/api/)
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

---

### Regra de fallback:

<<<<<<< HEAD
- Banco disponível → consulta real
- Banco indisponível → retornar mock
=======
* Banco disponível → consulta real
* Banco indisponível → retornar mock
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

---

## Banco de Dados

O sistema utiliza PostgreSQL como banco relacional.

### Tabela: filmes

<<<<<<< HEAD
- id (PK)
- título
- ano
- gênero
- diretor_id (FK)
- tipo
=======
* id (PK)
* título
* ano
* gênero
* diretor_id (FK)
* tipo
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

---

### Tabela: diretores

<<<<<<< HEAD
- id (PK)
- nome
- nacionalidade
- principais_obras
=======
* id (PK)
* nome
* nacionalidade
* principais_obras
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

---

### Tabela: mensagens

<<<<<<< HEAD
- id (PK)
- nome
- email
- mensagem
- data_envio
=======
* id (PK)
* nome
* email
* mensagem
* data_envio
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

---

### Regras:

<<<<<<< HEAD
- Integridade referencial obrigatória
- Dados devem refletir o mock
- Estrutura deve ser compatível com a API
=======
* Integridade referencial obrigatória
* Dados devem refletir o mock
* Estrutura deve ser compatível com a API
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

---

## Testes

O projeto deve garantir qualidade e estabilidade através de testes automatizados.

### Ferramentas

<<<<<<< HEAD
- Cypress v14.5.4.x (E2E) → [Documentação](https://docs.cypress.io/)
- Jest v30.4.2.x → Documentação (https://jestjs.io/docs/getting-started)
=======
- Cypress v13.x (E2E) → [Documentação](https://docs.cypress.io/)
- Jest v29.x → Documentação (https://jestjs.io/docs/getting-started)
- Supertest v6.x (opcional) → [Documentação](https://github.com/ladjs/supertest)
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

---

### Testes End-to-End (Cypress)

<<<<<<< HEAD
=======

>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
Validar o comportamento completo da aplicação do ponto de vista do usuário.

### Cenários obrigatórios

1. Carregamento das páginas
2. Navegação via navbar
3. Interações do usuário
4. Formulário de contato
5. Responsividade

---

### Configuração

<<<<<<< HEAD
Arquivo obrigatório (exemplo):
=======
Arquivo obrigatório:
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

- Criar arquivo do `cypress.config.js`:

```js
module.exports = {
  e2e: {
    baseUrl: "http://localhost:3000",
  },
};
```
<<<<<<< HEAD

=======
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
---

### Testes desacoplados do backend

Os testes NÃO devem depender da API.

<<<<<<< HEAD
=======

>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
### Estrutura:

```
/cypress/fixtures/filmes.json
```

---

### Interceptação obrigatória:

```js
cy.intercept("GET", "/api/filmes", {
  fixture: "filmes.json",
});
```

---

### Benefícios:

<<<<<<< HEAD
- Testes estáveis
- Independência do backend
- Execução confiável
=======
* Testes estáveis
* Independência do backend
* Execução confiável
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

Referência:

- [https://docs.cypress.io/api/commands/intercept](https://docs.cypress.io/api/commands/intercept)

---

## DevOps

O projeto utiliza práticas de integração e entrega contínua para garantir qualidade e consistência.

### Ferramentas

- GitHub Actions (CI/CD) → [Documentação](https://docs.github.com/actions)
- Render (backend) → [Site Oficial](https://render.com/) | [Documentação](https://render.com/docs)
- Vercel ou GitHub Pages (frontend) → [Vercel](https://vercel.com/) | [GitHub Pages](https://pages.github.com/)
<<<<<<< HEAD
- SonarQube → [Site Oficial](https://www.sonarsource.com/products/sonarqube/) | [Documentação](https://docs.sonarsource.com/sonarqube-server/)

---

### Qualidade de Código (SonarQube)

O projeto deverá realizar análise estática de código utilizando SonarQube.

Objetivos:

- Identificar bugs
- Detectar vulnerabilidades
- Avaliar cobertura de testes
- Garantir qualidade mínima do código

Execução:

- Pipeline GitHub Actions
- Execução automática em Pull Requests
- Execução automática na branch dev

Falha no Quality Gate:

- Bloqueia aprovação do Pull Request
=======
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

---

### Integração Contínua (CI)

O pipeline de CI deve executar automaticamente em todos os Pull Requests.

<<<<<<< HEAD
### Execuções obrigatórias:

- Testes E2E (Cypress) em cada PR
- Testes de backend (Jest)
=======

### Execuções obrigatórias:

- Testes E2E (Cypress) em cada PR
- Testes de backend (Jest + Supertest)
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

---

### Regras:

- Cypress deve rodar com dados mock
- Testes não podem depender do backend
- Falha na pipeline → bloqueia merge

---

## Entrega Contínua (CD)

O deploy deve ocorrer após validação completa do sistema.

<<<<<<< HEAD
=======

>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
### Destinos:

- Frontend → Vercel ou GitHub Pages
- Backend → Render
- Banco → Docker (homologação) / Supabase (produção)

---

## Ordem de Desenvolvimento

> Esta seção detalha a execução prática do fluxo definido anteriormente.

A execução do projeto deve seguir a seguinte ordem:

1. Backend (estrutura + endpoints + fallback)
2. Frontend (modo mock)
3. Integração frontend + backend
4. Testes (Cypress)
5. CI/CD
6. Deploy

---

## Ordem de Deploy

### Passo a passo obrigatório:

1. Subir backend no Render
2. Validar endpoint:
   - `/api/filmes`

3. Configurar variável `.env` no frontend:

```
Exemplo: VITE_API_URL=https://seu-backend.onrender.com
```

4. Subir frontend no Vercel ou GitHub Pages

---

### Regras:

- ❗ Nunca subir frontend antes do backend
- ❗ Nunca deixar variável de API vazia em produção
- ❗ Sempre validar API antes do deploy

---

## Modo Offline

O sistema deve ser resiliente a falhas externas.

<<<<<<< HEAD
=======

>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
### Comportamento esperado:

Frontend:

- Utiliza dados mock automaticamente

Backend:

- Utiliza fallback em caso de falha no banco

Testes:

- Utilizam interceptação (Cypress)

---

## Teste de Robustez

Antes da apresentação, deve ser executado o seguinte cenário:

### Procedimento:

1. Desligar o backend
2. Executar o frontend
3. Rodar testes Cypress
4. Testar envio do formulário

<<<<<<< HEAD
=======

>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
### Resultado:

- Aplicação funcionando
- Dados sendo exibidos
- Testes passando
- Formulário operando com fallback

---

## Documentação

O projeto deve conter os seguintes documentos:

<<<<<<< HEAD
### Documentos principais

- `README.md` → Visão geral do projeto
- `01_ESCOPO_DO_PROJETO.md` → Escopo funcional do sistema
- `02_REQUISITOS.md` → Levantamento de requisitos
- `03_ARQUITETURA.md` → Definição da arquitetura do sistema
- `04_TECNOLOGIAS_DO_PROJETO.md` → Stack e tecnologias utilizadas
- `05_AMBIENTE_WINDOWS.md` → Configuração do ambiente Windows
- `06_AMBIENTE_LINUX.md` → Configuração do ambiente Linux
=======

### Documentos principais

* `README.md` → Visão geral do projeto
* `01_ESCOPO_DO_PROJETO.md` → Escopo funcional do sistema
* `02_REQUISITOS.md` → Levantamento de requisitos
* `03_ARQUITETURA.md` → Definição da arquitetura do sistema
* `04_TECNOLOGIAS_DO_PROJETO.md` → Stack e tecnologias utilizadas
* `05_AMBIENTE_WINDOWS.md` → Configuração do ambiente Windows
* `06_AMBIENTE_LINUX.md` → Configuração do ambiente Linux
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

---

### Documentos de processo e organização

<<<<<<< HEAD
- `07_CONFIG_REPO_GITHUB.md` → Configuração do repositório
- `08_WORKFLOW.md` → Fluxo de trabalho do projeto
- `09_VERSIONAMENTO.md` → Regras de versionamento
- `10_BRANCHING.md` → Estratégia de branches
- `11_RESPONSABILIDADES.md` → Papéis da equipe
- `12_CONTRIBUICAO.md` → Regras de contribuição
=======
* `07_CONFIG_REPO_GITHUB.md` → Configuração do repositório
* `08_WORKFLOW.md` → Fluxo de trabalho do projeto
* `09_VERSIONAMENTO.md` → Regras de versionamento
* `10_BRANCHING.md` → Estratégia de branches
* `11_RESPONSABILIDADES.md` → Papéis da equipe
* `12_CONTRIBUICAO.md` → Regras de contribuição
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

---

### Documentos de desenvolvimento

<<<<<<< HEAD
- `13_UI_GUIDELINES.md` → Padrões de interface (UI)
- `14_DEFINITION_OF_DONE.md` → Critérios de conclusão
=======
* `13_UI_GUIDELINES.md` → Padrões de interface (UI)
* `14_DEFINITION_OF_DONE.md` → Critérios de conclusão
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

---

### Documentos de qualidade e testes

<<<<<<< HEAD
- `15_TEST_PLAN.md` → Plano de testes
- `16_CYPRESS_E2E.md` → Testes End-to-End
=======
* `15_TEST_PLAN.md` → Plano de testes
* `16_CYPRESS_E2E.md` → Testes End-to-End
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

---

### Documentos de arquitetura operacional

<<<<<<< HEAD
- `17_RESILIENCE.md` → Estratégia de fallback
- `18_CI_CD.md` → Integração e entrega contínua
- `19_DEPLOY_(VERCEL_RENDER).md` → Processo de deploy
=======
* `17_RESILIENCE.md` → Estratégia de fallback
* `18_CI_CD.md` → Integração e entrega contínua
* `19_DEPLOY_(VERCEL_RENDER).md` → Processo de deploy
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

---

### Documentos de apoio e padronização

<<<<<<< HEAD
- `20_ESTRUTURA_DOC.md` → Estrutura da documentação
- `21_CHANGELOG.md` → Histórico de mudanças
- `22_EXTENSOES_VSCODE.md` → Extensões utilizadas
- `23_CONFIGURACAO_EXTENSOES.md` → Configuração das extensões
=======
* `20_ESTRUTURA_DOC.md` → Estrutura da documentação
* `21_CHANGELOG.md` → Histórico de mudanças
* `22_EXTENSOES_VSCODE.md` → Extensões utilizadas
* `23_CONFIGURACAO_EXTENSOES.md` → Configuração das extensões
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

---

### Documentos operacionais (checklists)

<<<<<<< HEAD
- `24_CHECKLIST_MATHEUS.md` → Checklist operacional
- `25_CHECKLIST_LUCAS.md` → Checklist operacional
- `26_CHECKLIST_HENRIQUE.md` → Checklist operacional
- `27_CHECKLIST_WINLEY.md` → Checklist operacional
=======
* `24_CHECKLIST_MATHEUS.md` → Checklist operacional
* `25_CHECKLIST_LUCAS.md` → Checklist operacional
* `26_CHECKLIST_HENRIQUE.md` → Checklist operacional
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

---

### Documento final

<<<<<<< HEAD
- `28_APRESENTACAO.md` → Material de apresentação

---

### Documentação complementar

- `29_POLITICA_PRIVACIDADE.md` → Política de Privacidade do sistema
- `30_LGPD_COMPLIANCE.md` → Diretrizes de conformidade com a LGPD
- `31_API_DOCS.md` → Documentação dos endpoints da API
- `SECURITY.md` → Política e práticas de segurança do projeto
=======
* `27_APRESENTACAO.md` → Material de apresentação
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

---

### Regras obrigatórias para equipe!!!

<<<<<<< HEAD
- Todos os documentos devem estar **atualizados**
- Todos devem ser **consistentes entre si**
- Nenhum documento pode **contradizer o escopo**
- Devem refletir **exatamente o comportamento real do sistema**
=======
* Todos os documentos devem estar **atualizados**
* Todos devem ser **consistentes entre si**
* Nenhum documento pode **contradizer o escopo**
* Devem refletir **exatamente o comportamento real do sistema**
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

---

## Validação Final

Antes da entrega, o sistema deve atender aos seguintes critérios:

### Requisitos técnicos:

- HTML, CSS, Bootstrap implementados
- JavaScript funcional (ES6+)
<<<<<<< HEAD
- Backend em Node.js v24.16.0 + Express v4.22.2x
- Banco PostgreSQL v16-alpine (Docker + Supabase)
=======
- Backend em Node.js v20.20.2 LTS + Express v4.19.x
- Banco PostgreSQL v16.x (Docker + Supabase)
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
- Testes Cypress implementados
- GitHub privado
- CI/CD configurado
- Deploy (Render + Vercel/GitHub Pages)
- README completo

<<<<<<< HEAD
=======

>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
### Requisitos de projeto:

- Código versionado corretamente
- PRs revisados
- Estrutura organizada
- Documentação completa

---

## Definition of Done (DoD)

Uma tarefa só é considerada concluída quando:

- Código implementado
- Testado (manual ou automatizado)
- Sem erros no console
- Seguindo padrões do projeto
- PR aprovado
- Integrado na branch `dev`

---

### Entrega

O sistema deve:

- Funcionar com backend ativo
- Funcionar sem backend (modo offline)
- Passar em todos os testes
- Estar pronto para apresentação

<<<<<<< HEAD
---
=======
---
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
