# Arquitetura do Site - CineLog

## Índice

- [Arquitetura do Site - CineLog](#arquitetura-do-site---cinelog)
  - [Índice](#índice)
  - [Proposta](#proposta)
  - [Visão Geral da Arquitetura](#visão-geral-da-arquitetura)
  - [Modelo Arquitetural](#modelo-arquitetural)
  - [Estrutura do Projeto](#estrutura-do-projeto)
  - [Camadas do Sistema](#camadas-do-sistema)
    - [Frontend](#frontend)
      - [Tecnologias:](#tecnologias)
    - [Backend](#backend)
      - [Tecnologias:](#tecnologias-1)
    - [Banco de Dados](#banco-de-dados)
      - [Tecnologia:](#tecnologia)
  - [Fluxo de Comunicação](#fluxo-de-comunicação)
    - [Fluxo padrão:](#fluxo-padrão)
  - [Resiliência do Sistema](#resiliência-do-sistema)
    - [Frontend (Mock)](#frontend-mock)
    - [Backend (Fallback)](#backend-fallback)
    - [Resultado:](#resultado)
  - [Estrutura de Dados](#estrutura-de-dados)
    - [Tabela: filmes](#tabela-filmes)
    - [Tabela: diretores](#tabela-diretores)
    - [Tabela: mensagens](#tabela-mensagens)
  - [Endpoints da API](#endpoints-da-api)
  - [Organização do Código](#organização-do-código)
    - [Backend](#backend-1)
      - [Responsabilidades:](#responsabilidades)
    - [Frontend](#frontend-1)
      - [Responsabilidades:](#responsabilidades-1)
  - [Padrões obrigatórios](#padrões-obrigatórios)
  - [Fluxo de desenvolvimento](#fluxo-de-desenvolvimento)
  - [Integração com CI/CD](#integração-com-cicd)
  - [Boas práticas](#boas-práticas)
  - [Erros a evitar](#erros-a-evitar)
  - [Resultado](#resultado-1)
    - [Essa arquitetura garante que:](#essa-arquitetura-garante-que)

---

## Proposta

Definir **como o sistema é estruturado internamente**, garantindo:

- Organização clara do projeto
- Separação de responsabilidades
- Facilidade de manutenção
- Padronização entre todos os membros da equipe

---

## Visão Geral da Arquitetura

O CineLog segue uma arquitetura baseada em:

- Frontend desacoplado
- Backend com API REST
- Banco de dados relacional
- Sistema resiliente (funciona sem backend)

---

## Modelo Arquitetural

Arquitetura em **3 camadas (Three-Tier Architecture)**:

```
Frontend (Cliente)
↓
Backend (API REST)
↓
Banco de Dados (PostgreSQL)
```

---

## Estrutura do Projeto

```
CineLog/
│
├── frontend/
│   ├── index.html
│   ├── pages/
│   ├── css/
│   ├── js/
│   └── data/ (mock)
│
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   ├── database/
│   └── mock/
│
├── cypress/
│
├── docs/
│
└── .github/workflows/
```

---

## Camadas do Sistema

### Frontend

Responsável por:

- Interface do usuário
- Consumo da API
- Exibição de dados
- Fallback com dados mock

#### Tecnologias:

- HTML5
- CSS3
- Bootstrap
- JavaScript (ES6+)

---

### Backend

Responsável por:

- Regras de negócio
- API REST
- Integração com banco
- Fallback (modo offline)

#### Tecnologias:

- Node.js
- Express

---

### Banco de Dados

Responsável por:

- Armazenamento persistente
- Relacionamento entre entidades

#### Tecnologia:

- PostgreSQL

---

## Fluxo de Comunicação

### Fluxo padrão:

1. Usuário acessa frontend
2. Frontend chama API:

```js
fetch("/api/filmes");
```

3. Backend processa
4. Retorna JSON
5. Frontend renderiza dados

---

## Resiliência do Sistema

### Frontend (Mock)

Se API falhar:

```js
fetch("/data/filmes.json");
```

---

### Backend (Fallback)

Se banco falhar:

```js
return res.json(mockFilmes);
```

---

### Resultado:

- Sistema nunca quebra
- Sempre retorna dados

---

## Estrutura de Dados

### Tabela: filmes

- id
- titulo
- ano
- genero
- diretor_id
- tipo

---

### Tabela: diretores

- id
- nome
- nacionalidade
- principais_obras

---

### Tabela: mensagens

- id
- nome
- email
- mensagem
- data_envio

---

## Endpoints da API

- `GET /api/filmes`
- `GET /api/diretores`
- `POST /api/contato`

---

## Organização do Código

### Backend

```
backend/
├── routes/
├── controllers/
├── services/
├── database/
├── mock/
```

#### Responsabilidades:

- routes → define endpoints
- controllers → recebe requisição
- services → lógica de negócio
- database → conexão
- mock → fallback

---

### Frontend

```
frontend/
├── pages/
├── js/
├── css/
├── data/
```

#### Responsabilidades:

- pages → telas
- js → lógica
- css → estilos
- data → mock

---

## Padrões obrigatórios

- Separação clara de responsabilidades
- Código modular
- Uso de `.env`
- Uso de mock (frontend e testes)
- API REST padronizada

---

## Fluxo de desenvolvimento

1. Criar funcionalidade no frontend com mock
2. Criar endpoint no backend
3. Integrar frontend com API
4. Criar testes Cypress (com intercept)
5. Validar localmente
6. Subir PR

---

## Integração com CI/CD

- Cypress roda no CI
- Backend não é obrigatório para testes
- Deploy automatizado

---

## Boas práticas

- Nomear arquivos corretamente
- Arquivos dentro das suas respectivas `(Pastas)`
- Evitar código duplicado
- Códigos comentados e claros
- Separar lógica de UI
- Validar dados no backend
- Usar try/catch

---

## Erros a evitar

- Acoplamento frontend/backend
- Não usar fallback
- Misturar responsabilidades
- Não usar mock

---

## Resultado

- Sistema organizado
- Código estruturado
- Equipe alinhada
- Projeto resiliente
- Fácil manutenção

### Essa arquitetura garante que:

- O sistema funcione mesmo com falhas
- O desenvolvimento seja paralelo (frontend/backend)
- O projeto seja escalável

---
