```md
Ambiente Linux — Instalação e Configuração

## LEIA COM ATENÇÃO!!!

Este passo a passo detalha o processo completo para configurar o ambiente de desenvolvimento no Linux, garantindo que todos os integrantes utilizem a mesma base para desenvolvimento do projeto CinelogPlay.

<<<<<<< HEAD
- Git v2.54 (recomendado)
- fnm
- Node.js v24.16.0
- pnpm v10.12.4 (via corepack)
- Docker Engine 29.5.2
- PostgreSQL v16-alpine (via Docker)
=======
- Git v2.53 (recomendado)
- fnm
- Node.js v20.20.2
- pnpm (via corepack)
- Docker Engine 29.4.0
- PostgreSQL (via Docker)
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
```

---

# Índice

- [Índice](#índice)
  - [Pré-requisitos](#pré-requisitos)
  - [Atualização do Sistema](#atualização-do-sistema)
  - [Instalação do Git](#instalação-do-git)
    - [Atualizar Git](#atualizar-git)
  - [Instalação do Node.js (fnm)](#instalação-do-nodejs-fnm)
    - [Instalar fnm via script oficial](#instalar-fnm-via-script-oficial)
    - [Ativar fnm no shell](#ativar-fnm-no-shell)
    - [Persistir configuração](#persistir-configuração)
<<<<<<< HEAD
    - [Instalar Node.js v24.16.0](#instalar-nodejs-v24160)
=======
    - [Instalar Node.js v20.20.2 LTS](#instalar-nodejs-v20202-lts)
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
    - [Verificação](#verificação)
  - [Instalação do pnpm](#instalação-do-pnpm)
    - [Documentação](#documentação)
    - [Ativar Corepack e instalar pnpm](#ativar-corepack-e-instalar-pnpm)
    - [Verificação](#verificação-1)
  - [Instalação do Docker + PostgreSQL](#instalação-do-docker--postgresql)
    - [Documentação Docker](#documentação-docker)
    - [PostgreSQL](#postgresql)
    - [Remover versões antigas](#remover-versões-antigas)
    - [Instalar dependências](#instalar-dependências)
    - [Adicionar chave oficial](#adicionar-chave-oficial)
    - [Adicionar repositório](#adicionar-repositório)
    - [Instalar Docker](#instalar-docker)
    - [Ajuste obrigatório (permissão sem sudo)](#ajuste-obrigatório-permissão-sem-sudo)
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
  - [Instalação do Jest + Supertest](#instalação-do-jest--supertest)
    - [Jest](#jest)
    - [Supertest](#supertest)
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
    - [Instalar](#instalar)
    - [Verificação](#verificação-4)
  - [Instalação do VS Code + Extensões](#instalação-do-vs-code--extensões)
    - [Download](#download)
    - [Extensões recomendadas](#extensões-recomendadas)
  - [Clonar Repositório e Branch](#clonar-repositório-e-branch)
    - [Clonar (Homologação)](#clonar-homologação)
    - [Atualizar base](#atualizar-base)
    - [Criar branch (padrão do projeto)](#criar-branch-padrão-do-projeto)
    - [Outras branches](#outras-branches)
  - [Configuração do Ambiente (`.env`)](#configuração-do-ambiente-env)
    - [Criar arquivo](#criar-arquivo)
    - [Estrutura padrão (.env.example)](#estrutura-padrão-envexample)
  - [Scripts do Projeto](#scripts-do-projeto)
  - [Criar o arquivo `.gitignore` Obrigatório](#criar-o-arquivo-gitignore-obrigatório)
    - [Scripts esperados (package.json)](#scripts-esperados-packagejson)
    - [Executar projeto](#executar-projeto)
  - [Validação do Ambiente](#validação-do-ambiente)
  - [Observações](#observações)
    - [Observação sobre scripts](#observação-sobre-scripts)

---

## Pré-requisitos

- Sistema Linux atualizado
- Usuário com permissões `sudo`
- Acesso à internet

---

## Atualização do Sistema

```bash
sudo apt update && sudo apt upgrade -y
```

---

## Instalação do Git

```bash
git --version
```

### Atualizar Git

```bash
sudo apt install git -y
```

<<<<<<< HEAD
Caso a versão não seja a v2.54, recomenda-se instalar via repositório oficial ou compilar.
=======
Caso a versão não seja a v2.53, recomenda-se instalar via repositório oficial ou compilar.
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

---

## Instalação do Node.js (fnm)

[https://github.com/Schniz/fnm](https://github.com/Schniz/fnm)

### Instalar fnm via script oficial

```bash
curl -fsSL https://fnm.vercel.app/install | bash
```

---

### Ativar fnm no shell

```bash
export PATH="$HOME/.fnm:$PATH"
eval "$(fnm env)"
```

---

### Persistir configuração

```bash
echo 'export PATH="$HOME/.fnm:$PATH"' >> ~/.bashrc
echo 'eval "$(fnm env)"' >> ~/.bashrc
source ~/.bashrc
```

---

<<<<<<< HEAD
### Instalar Node.js v24.16.0

```bash
fnm install 24.16.0
fnm use 24.16.0
fnm default 24.16.0
=======
### Instalar Node.js v20.20.2 LTS

```bash
fnm install 20.20.2
fnm use 20.20.2
fnm default 20.20.2
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
```

---

### Verificação

```bash
<<<<<<< HEAD
node -v   # Deve mostrar v24.16.0
=======
node -v   # Deve mostrar v20.20.2
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
```

---

## Instalação do pnpm

### Documentação

[https://pnpm.io/](https://pnpm.io/)

### Ativar Corepack e instalar pnpm

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
pnpm -v   # Deve mostrar versão 10.12.4.x
=======
pnpm -v   # Deve mostrar versão 9.x
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
```

---

## Instalação do Docker + PostgreSQL

### Documentação Docker

[https://docs.docker.com/engine/install/](https://docs.docker.com/engine/install/)

### PostgreSQL

[https://www.postgresql.org/docs/16/](https://www.postgresql.org/docs/16/)

---

### Remover versões antigas

```bash
sudo apt remove docker docker-engine docker.io containerd runc -y
```

---

### Instalar dependências

```bash
sudo apt install ca-certificates curl gnupg -y
```

---

### Adicionar chave oficial

```bash
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
```

---

### Adicionar repositório

```bash
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
  https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo $VERSION_CODENAME) stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

---

### Instalar Docker

```bash
sudo apt update
<<<<<<< HEAD
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y
=======
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin -y
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
```

---

### Ajuste obrigatório (permissão sem sudo)

```bash
sudo usermod -aG docker $USER
newgrp docker
```

---

### Verificação

```bash
<<<<<<< HEAD
docker --version   # Deve mostrar versão 29.5.2
=======
docker --version   # Deve mostrar versão 29.4.0
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
```

---

### (Docker Compose)

#### Criar arquivo `docker-compose.yml`

```yaml
<<<<<<< HEAD
services:
  frontend:
    build:
      context: .
      dockerfile: frontend/Dockerfile

    container_name: cinelogplay-frontend

    ports:
      - "5173:5173"

    volumes:
      - ./frontend:/app/frontend
      - /app/frontend/node_modules

    environment:
      - CHOKIDAR_USEPOLLING=true
      - CI=true

    depends_on:
      - backend

  backend:
    build:
      context: .
      dockerfile: backend/Dockerfile

    container_name: cinelogplay-backend

    ports:
      - "3001:3001"

    volumes:
      - ./backend:/app/backend
      - /app/backend/node_modules

    environment:
      - CI=true

    depends_on:
      - postgres

  postgres:
    image: postgres:16-alpine

    container_name: cinelogplay-postgres

    ports:
      - "5432:5432"

    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: cinelogplay

=======
version: "3.9"

services:
  postgres:
    image: postgres:16
    container_name: postgres-CinelogPlay
    environment:
      POSTGRES_PASSWORD: senha_segura
      POSTGRES_DB: CinelogPlay
    ports:
      - "5432:5432"
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
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

#### Baixar imagem

```bash
<<<<<<< HEAD
docker pull postgres:16-alpine
=======
docker pull postgres:16
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
```

---

#### Criar container

```bash
docker run -d \
<<<<<<< HEAD
  --name postgres-cinelogplay \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=cinelogplay \
  -p 5432:5432 \
  -v postgres_data:/var/lib/postgresql/data \
  postgres:16-alpine
=======
  --name postgres-CinelogPlay \
  -e POSTGRES_PASSWORD=senha_segura \
  -e POSTGRES_DB=CinelogPlay \
  -p 5432:5432 \
  -v postgres_data:/var/lib/postgresql/data \
  postgres:16
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
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

pnpm add cypress --save-dev

---

### Verificação

```bash
<<<<<<< HEAD
pnpm exec cypress -v   # Deve mostrar versão 14.x
=======
pnpm exec cypress -v   # Deve mostrar versão 13.x
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
```

---

<<<<<<< HEAD
## Instalação do Jest
=======
## Instalação do Jest + Supertest
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

### Jest

[https://jestjs.io/docs/getting-started](https://jestjs.io/docs/getting-started)

<<<<<<< HEAD
### Instalar

```bash
pnpm add jest  --save-dev
=======
### Supertest

[https://github.com/ladjs/supertest](https://github.com/ladjs/supertest)

### Instalar

```bash
pnpm add jest supertest --save-dev
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
```

---

### Verificação

```bash
<<<<<<< HEAD
pnpm exec jest --version   # Deve mostrar versão 30.x
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
cp .env.example .env
```

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

Execute os comandos abaixo para garantir que tudo está correto:

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
