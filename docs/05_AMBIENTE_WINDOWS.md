```md
Ambiente Windows — Instalação e Configuração

## LEIA COM ATENÇÃO!!!

Este passo a passo detalha o processo completo para configurar o ambiente de desenvolvimento no Windows, garantindo que todos os integrantes utilizem a mesma base para desenvolvimento do projeto CinelogPlay.

<<<<<<< HEAD
- Git v2.54 (recomendado)
- fnm
- Node.js v24.16.0
=======
- Git v2.53 (recomendado)
- fnm
- Node.js v20.20.2
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
- pnpm (via corepack)
- Docker Desktop
- PostgreSQL (via Docker)
```

---

# Índice

- [Índice](#índice)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação do Git](#instalação-do-git)
    - [Download](#download)
    - [Instalação](#instalação)
    - [Verificação (Git Bash)](#verificação-git-bash)
  - [Instalação do Node.js (fnm)](#instalação-do-nodejs-fnm)
    - [Instalar fnm](#instalar-fnm)
  - [Caso não funcione:](#caso-não-funcione)
    - [Reabrir o Git Bash](#reabrir-o-git-bash)
<<<<<<< HEAD
    - [Instalar Node.js v24.16.0](#instalar-nodejs-v24160)
=======
    - [Instalar Node.js v20.20.2](#instalar-nodejs-v20202)
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
    - [Verificação](#verificação)
  - [Instalação do pnpm](#instalação-do-pnpm)
    - [Documentação](#documentação)
    - [Ativar Corepack](#ativar-corepack)
    - [Verificação](#verificação-1)
  - [Instalação do Docker + PostgreSQL](#instalação-do-docker--postgresql)
    - [Download Docker Desktop](#download-docker-desktop)
    - [Instalação](#instalação-1)
    - [Verificação](#verificação-2)
    - [(Docker Compose)](#docker-compose)
      - [Criar arquivo `docker-compose.yml`](#criar-arquivo-docker-composeyml)
      - [Subir container com Docker Compose](#subir-container-com-docker-compose)
      - [Parar containers](#parar-containers)
    - [Configurar PostgreSQL via Docker (Alternativo)](#configurar-postgresql-via-docker-alternativo)
    - [Baixar imagem](#baixar-imagem)
    - [Criar container](#criar-container)
    - [Verificar container](#verificar-container)
  - [Instalação do Cypress](#instalação-do-cypress)
    - [Documentação](#documentação-1)
    - [Instalação do Cypress](#instalação-do-cypress-1)
    - [Verificação](#verificação-3)
<<<<<<< HEAD
  - [Instalação do Jest](#instalação-do-jest)
    - [Jest](#jest)
=======
  - [Instalação do Jest + Supertest (opcional)](#instalação-do-jest--supertest-opcional)
    - [Jest](#jest)
    - [Supertest](#supertest)
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
    - [Instalar](#instalar)
    - [Verificação](#verificação-4)
  - [Instalação do VS Code + Extensões](#instalação-do-vs-code--extensões)
    - [Download](#download-1)
    - [Extensões recomendadas](#extensões-recomendadas)
  - [Clonar Repositório e Branch](#clonar-repositório-e-branch)
    - [Clonar (Homologação)](#clonar-homologação)
    - [Atualizar base](#atualizar-base)
    - [Criar branch (padrão do projeto)](#criar-branch-padrão-do-projeto)
    - [Outras branches](#outras-branches)
  - [Configuração do Ambiente (`.env`)](#configuração-do-ambiente-env)
    - [Criar arquivo](#criar-arquivo)
- [ou](#ou)
  - [Estrutura padrão (.env.example)](#estrutura-padrão-envexample)
  - [Scripts do Projeto](#scripts-do-projeto)
  - [Criar o arquivo `.gitignore` Obrigatório](#criar-o-arquivo-gitignore-obrigatório)
    - [Scripts esperados (package.json)](#scripts-esperados-packagejson)
    - [Executar projeto](#executar-projeto)
  - [Validação do Ambiente](#validação-do-ambiente)
  - [Observações](#observações)
    - [Observação sobre scripts](#observação-sobre-scripts)

## Pré-requisitos

- Windows 10 ou superior
- Acesso à internet
- Usar Git Bash

## Instalação do Git

### Download

[https://git-scm.com/download/win](https://git-scm.com/download/win)

---

### Instalação

- Baixar o instalador oficial
- Executar normalmente
- Manter opções padrão
- Garantir instalação do **Git Bash**

---

### Verificação (Git Bash)

```bash
git --version
```

---

## Instalação do Node.js (fnm)

[https://github.com/Schniz/fnm](https://github.com/Schniz/fnm)

### Instalar fnm

```bash
winget install Schniz.fnm
```

![alt text](image.png)

Obs: a instalção precisa ser feita na sua Branch,
nunca faça na main.

## Caso não funcione:

```bash
choco install fnm
```

---

### Reabrir o Git Bash

Feche e abra novamente o terminal para carregar o fnm.

---

<<<<<<< HEAD
### Instalar Node.js v24.16.0

```bash
fnm install 24.16.0
fnm use 24.16.0
fnm default 24.16.0
=======
### Instalar Node.js v20.20.2

```bash
fnm install 20.20.2
fnm use 20.20.2
fnm default 20.20.2
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
```

---

### Verificação

```bash
node -v
```

---

## Instalação do pnpm

### Documentação

[https://pnpm.io/](https://pnpm.io/)

### Ativar Corepack

```bash
corepack enable
<<<<<<< HEAD
corepack prepare pnpm@10.12.4 --activate
=======
corepack prepare pnpm@latest --activate
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
```

---

### Verificação

```bash
<<<<<<< HEAD
pnpm -v   # Deve mostrar versão 10.12.4
=======
pnpm -v   # Deve mostrar versão 9.x
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
```

---

## Instalação do Docker + PostgreSQL

### Download Docker Desktop

[https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop)

---

### Instalação

- Instalar normalmente
- Reiniciar o computador

---

### Verificação

```bash
docker --version   # Deve mostrar versão instalada
```

---

### (Docker Compose)

#### Criar arquivo `docker-compose.yml`

```yaml
version: "3.9"

services:
  postgres:
<<<<<<< HEAD
    image: postgres:16-alpine
=======
    image: postgres:16
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
    container_name: postgres-CinelogPlay
    environment:
      POSTGRES_PASSWORD: senha_segura
      POSTGRES_DB: CinelogPlay
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

---

#### Subir container com Docker Compose

```bash
docker compose up -d
```

#### Parar containers

```bash
docker compose down
```

---

> IMPORTANTE:
> Utilize **Docker Compose como padrão do projeto**.
> O uso de `docker run` é apenas para testes rápidos ou uso isolado caso seja necessário.

---

### Configurar PostgreSQL via Docker (Alternativo)

### Baixar imagem

```bash
docker pull postgres:16
```

---

### Criar container

```bash
docker run -d \
  --name postgres-CinelogPlay \
  -e POSTGRES_PASSWORD=senha_segura \
<<<<<<< HEAD
  -e POSTGRES_DB=cinelogplay \
=======
  -e POSTGRES_DB=CinelogPlay \
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
  -p 5432:5432 \
  -v postgres_data:/var/lib/postgresql/data \
  postgres:16
```

---

### Verificar container

```bash
docker ps
```

---

```bash
docker compose ps
```

---

## Instalação do Cypress

### Documentação

[https://docs.cypress.io/](https://docs.cypress.io/)

---

### Instalação do Cypress

<<<<<<< HEAD
```bash
pnpm add cypress --save-dev
```
=======
pnpm add cypress --save-dev
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

---

### Verificação

```bash
<<<<<<< HEAD
pnpm exec cypress -v   # Deve mostrar versão 14.5.4
=======
pnpm exec cypress -v   # Deve mostrar versão 13.x
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
```

---

<<<<<<< HEAD
## Instalação do Jest
=======
## Instalação do Jest + Supertest (opcional)
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

### Jest

[https://jestjs.io/docs/getting-started](https://jestjs.io/docs/getting-started)

<<<<<<< HEAD
=======
### Supertest

[https://github.com/ladjs/supertest](https://github.com/ladjs/supertest)

>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
---

### Instalar

```bash
<<<<<<< HEAD
pnpm add jest --save-dev
=======
pnpm add jest supertest --save-dev
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
```

---

### Verificação

```bash
<<<<<<< HEAD
pnpm exec jest --version   # Deve mostrar versão 30.4.2
=======
pnpm exec jest --version   # Deve mostrar versão 29.x
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
```

---

## Instalação do VS Code + Extensões

### Download

[https://code.visualstudio.com/](https://code.visualstudio.com/)

---

### Extensões recomendadas

- ESLint
  [https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

- Prettier
  [https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

- Docker
  [https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)

- PostgreSQL
  [https://marketplace.visualstudio.com/items?itemName=ckolkman.vscode-postgres](https://marketplace.visualstudio.com/items?itemName=ckolkman.vscode-postgres)

- GitHub Pull Requests and Issues
  [https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)

- Cypress Test Runner
  [https://marketplace.visualstudio.com/items?itemName=cypress.cypress](https://marketplace.visualstudio.com/items?itemName=cypress.cypress)

- REST Client
  [https://marketplace.visualstudio.com/items?itemName=humao.rest-client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

---

## Clonar Repositório e Branch

### Clonar (Homologação)

```bash
git clone https://github.com/Frontend-e-DevOps-Projeto-CinelogPlay/CinelogPlay.git
cd CinelogPlay
```

---

### Atualizar base

```bash
<<<<<<< HEAD
git checkout dev
git pull origin dev
=======
git checkout main
git pull origin main
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
```

---

### Criar branch (padrão do projeto)

```bash
git checkout -b feature/frontend
```

---

### Outras branches

```bash
git checkout -b feature/tests
git checkout -b feature/devops
git checkout -b feature/backend
```

---

## Configuração do Ambiente (`.env`)

### Criar arquivo

```bash
cp .env.example .env  # Git Bash
```

# ou

<<<<<<< HEAD
```bash
copy .env.example .env # CMD/PowerShell
```
=======
copy .env.example .env # CMD/PowerShell
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

---

### Estrutura padrão (.env.example)

```env
DB_HOST=postgres
DB_PORT=5432
DB_USER=postgres
<<<<<<< HEAD
DB_PASSWORD=postgres
DB_NAME=cinelogplay
=======
DB_PASSWORD=senha_segura
DB_NAME=CinelogPlay
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

# Supabase (produção)
SUPABASE_URL=
SUPABASE_KEY=

PORT=3000
NODE_ENV=development
```

- Se usar Docker Compose → usar `postgres` como host

---

## Scripts do Projeto

```bash
pnpm install
pnpm run dev
```

<<<<<<< HEAD
- `pnpm install`
  Instala todas as dependências do projeto listadas no `package.json`.

- `pnpm run dev`
=======
- `pnpm install`  
  Instala todas as dependências do projeto listadas no `package.json`.

- `pnpm run dev`  
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
  Inicia o servidor de desenvolvimento para rodar a aplicação localmente.

---

## Criar o arquivo `.gitignore` Obrigatório

```
node_modules/
.env
dist/
coverage/
```

---

### Scripts esperados (package.json)

```json
{
  "scripts": {
    "dev": "node server.js",
    "start": "node server.js",
    "test": "jest",
    "cy:open": "cypress open",
    "cy:run": "cypress run"
  }
}
```

---

### Executar projeto

```bash
pnpm run dev
```

ou

```bash
pnpm start
```

---

## Validação do Ambiente

```bash
git --version
node -v
pnpm -v
docker --version
docker ps
pnpm exec cypress -v
```

---

## Observações

<<<<<<< HEAD
- Sempre usar **Node.js v24.16.0**
=======
- Sempre usar **Node.js v20.20.2 LTS**
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
- Utilizar **pnpm** para gerenciamento de dependências
- Configurar variáveis sensíveis em `.env`
- Usar senha forte no PostgreSQL (`POSTGRES_PASSWORD`)
- Docker garante isolamento do ambiente de homologação
- Supabase será utilizado em ambiente de produção

### Observação sobre scripts

Os scripts (`dev`, `start`) assumem que o backend será executado com:

```bash
node server.js
```

Caso a estrutura do projeto seja alterada (ex: uso de `nodemon` ou outra arquitetura), os scripts do `package.json` deverão ser atualizados para refletir corretamente a execução do backend.

---
