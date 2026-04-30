# CI/CD

## Índice

- [CI/CD](#cicd)
  - [Índice](#índice)
  - [Requisitos do Projeto](#requisitos-do-projeto)
  - [Conceito do CI/CD](#conceito-do-cicd)
    - [CI (Continuous Integration)](#ci-continuous-integration)
    - [CD (Continuous Deployment)](#cd-continuous-deployment)
  - [Estrutura Obrigatória](#estrutura-obrigatória)
  - [Pipeline CI/CD (GitHub Actions)](#pipeline-cicd-github-actions)
    - [Arquivo: `.github/workflows/ci-cd.yml`](#arquivo-githubworkflowsci-cdyml)
  - [CI](#ci)
    - [Resultado:](#resultado)
  - [CD — Deploy automático](#cd--deploy-automático)
    - [Frontend (Vercel)](#frontend-vercel)
    - [Build:](#build)
    - [Output:](#output)
    - [Backend (Render)](#backend-render)
  - [Integração com o Projeto](#integração-com-o-projeto)
    - [Frontend `.env`](#frontend-env)
  - [Testes (Cypress)](#testes-cypress)
    - [CRÍTICO](#crítico)
  - [Validação do CI/CD](#validação-do-cicd)
    - [1. Teste de CI](#1-teste-de-ci)
    - [2. Teste de CD](#2-teste-de-cd)
  - [Requisitos que devemos atender no projeto](#requisitos-que-devemos-atender-no-projeto)
  - [Erros (EVITAR)](#erros-evitar)
  - [Resultado](#resultado-1)
  - [Dúvidas](#dúvidas)
    - [Fazemos isso no VSCode?](#fazemos-isso-no-vscode)
    - [No VSCode:](#no-vscode)
    - [Fora dele:](#fora-dele)
    - [Preciso criar esse documento?](#preciso-criar-esse-documento)

---

## Requisitos do Projeto

Implementar a integração contínua (CI) e entrega contínua (CD) utilizando GitHub Actions, garantindo:

- Testes automáticos a cada alteração
- Deploy automático do site
- Estabilidade do projeto

---

## Conceito do CI/CD

### CI (Continuous Integration)

Toda vez que alguém envia código:

- instala dependências
- sobe o servidor local
- roda testes (Cypress com mock)
- valida se está tudo funcionando

---

### CD (Continuous Deployment)

Após passar nos testes:

- faz deploy automático do sistema
- atualiza o site online

---

## Estrutura Obrigatória

Criar dentro do projeto:

```
.github/workflows/ci-cd.yml
```

---

## Pipeline CI/CD (GitHub Actions)

### Arquivo: `.github/workflows/ci-cd.yml`

```yaml
name: CI/CD CineLog

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  ci:
    name: Rodar Testes (CI)
    runs-on: ubuntu-latest

    steps:
      - name: Clonar repositório
        uses: actions/checkout@v4

      - name: Configurar Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Ativar Corepack
        run: corepack enable

      - name: Instalar dependências
        run: pnpm install

      - name: Rodar testes Cypress (modo CI)
        run: pnpm run test:ci

  cd:
    name: Deploy (CD)
    runs-on: ubuntu-latest
    needs: ci

    steps:
      - name: Deploy concluído
        run: echo "Deploy realizado automaticamente via Vercel e Render"
```

---

## CI

Quando fizermos:

```bash
git push origin main
```

O GitHub vai:

1. Clonar o projeto
2. Configurar Node.js
3. Ativar Corepack
4. Instalar dependências com pnpm
5. Subir servidor (via test:ci)
6. Rodar Cypress automaticamente

### Resultado:

- Falhou → pipeline quebra
- Passou → segue para CD

---

## CD — Deploy automático

### Frontend (Vercel)

1. Acessar Vercel
2. Importar repositório
3. Conectar com GitHub
4. Deploy automático ativado

### Build:

```bash
pnpm install && pnpm run build
```

### Output:

```
dist
```

---

### Backend (Render)

1. Criar serviço no Render
2. Conectar repositório
3. Definir:

Build:

```bash
pnpm install
```

Start:

```bash
node server.js
```

4. Deploy automático ativado

---

## Integração com o Projeto

### Frontend `.env`

```
VITE_API_URL=https://seu-backend.onrender.com
```

---

## Testes (Cypress)

Garantir estrutura:

```
/cypress/e2e/
/cypress/fixtures/
cypress.config.js
```

Rodar com:

```bash
pnpm run test:ci
```

---

### CRÍTICO

- NUNCA usar API real nos testes
- SEMPRE usar:

```js
cy.intercept(...)
```

---

## Validação do CI/CD

### 1. Teste de CI

```bash
git push origin main
```

Verificar:

- GitHub → Actions
- Pipeline executando
- Testes passando

---

### 2. Teste de CD

1. Alterar frontend
2. Commit + push

Verificar:

- Vercel atualizou
- Render atualizou

---

## Requisitos que devemos atender no projeto

- GitHub Actions configurado
- Pipeline CI funcionando
- Cypress rodando automaticamente
- Testes independentes do backend
- Deploy automático ativo
- Integração frontend/backend

---

## Erros (EVITAR)

- Não usar pnpm no CI
- Não ter script `test:ci`
- Cypress dependendo da API real
- Pipeline quebrando por dependência
- Não conectar Vercel/Render
- Não testar antes da entrega

---

## Resultado

- Push no GitHub → roda testes automaticamente
- Testes passam → deploy acontece sozinho
- Site online atualizado sem intervenção manual

---

## Dúvidas

### Fazemos isso no VSCode?

**PARTE SIM, PARTE NÃO**

### No VSCode:

- Código
- Cypress
- Arquivo `.github/workflows/ci-cd.yml`

### Fora dele:

- Deploy (Vercel / Render)
- Execução do pipeline (GitHub Actions)

---

### Preciso criar esse documento?

**SIM**

Salvar como:

```
docs/CI_CD.md
```

---
