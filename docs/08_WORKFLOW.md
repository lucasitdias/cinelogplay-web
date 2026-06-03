# Workflow de Desenvolvimento - CinelogPlay

## Índice

<<<<<<< HEAD
- [Workflow de Desenvolvimento - CinelogPlay](#workflow-de-desenvolvimento---cinelogplay)
=======
- [Workflow de Desenvolvimento - CinelogPlay](#workflow-de-desenvolvimento---CinelogPlay)
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
  - [Índice](#índice)
  - [Proposta](#proposta)
  - [Visão Geral](#visão-geral)
  - [Fluxo de Trabalho (Passo a Passo)](#fluxo-de-trabalho-passo-a-passo)
    - [Criação de Tarefas](#criação-de-tarefas)
  - [Criação de Branch](#criação-de-branch)
  - [Desenvolvimento](#desenvolvimento)
  - [Commits](#commits)
    - [Padrão de commits (OBRIGATÓRIO SEGUIR)](#padrão-de-commits-obrigatório-seguir)
  - [Pull Request (PR)](#pull-request-pr)
  - [Code Review](#code-review)
  - [Merge](#merge)
  - [Atualização da Base](#atualização-da-base)
<<<<<<< HEAD
  - [Regras obrigatórias (CRITICO)](#regras-obrigatórias-critico)
=======
  - [Regras obrigatórias (CRITICO)](#regras-obrigatórias--critico)
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
  - [Boas práticas](#boas-práticas)
  - [Erros a evitar (`Com dúvida?` Pergunte a um membro da equipe)](#erros-a-evitar-com-dúvida-pergunte-a-um-membro-da-equipe)
  - [Fluxo resumido](#fluxo-resumido)
  - [Resultado](#resultado)

---

## Proposta

Definir **como a equipe deve trabalhar no dia a dia**, garantindo:

- Organização
- Padronização
- Qualidade do código
- Evitar conflitos e retrabalho

---

## Visão Geral

Todo desenvolvimento deve seguir este fluxo:

```id="workflow-flow"
Tarefa → Branch → Código → Commit → PR → Review → Merge
```

---

## Fluxo de Trabalho (Passo a Passo)

### Criação de Tarefas

Antes de começar qualquer coisa:

- Definir o que será feito
- Ter clareza do objetivo
- Saber qual parte do sistema será afetada

---

## Criação de Branch

<<<<<<< HEAD
Sempre criar uma branch nova a partir da `dev`:

```bash id="create-branch"
git checkout dev
git pull origin dev
git checkout -b feature/[area]-nome-da-feature
=======
Sempre criar uma branch nova a partir da `main`:

```bash id="create-branch"
git checkout main
git pull origin main
git checkout -b feature/nome-da-feature
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
```

---

## Desenvolvimento

Durante o desenvolvimento:

- Seguir arquitetura definida
- Usar mock se necessário
- Não quebrar funcionalidades existentes

---

## Commits

<<<<<<< HEAD
Realizar commits pequenos e organizados, exemplo:
=======
Realizar commits pequenos e organizados:
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

```bash id="commit-example"
git add .
git commit -m "feat: adiciona listagem de filmes"
<<<<<<< HEAD
git commit -m "fix: corrige validação do formulário"
git commit -m "test: adiciona testes Cypress da navbar"
git commit -m "docs: atualiza ambiente Linux"
=======
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
```

---

### Padrão de commits (OBRIGATÓRIO SEGUIR)

- `feat:` nova funcionalidade
- `fix:` correção de erro
- `refactor:` melhoria
- `test:` testes
- `docs:` documentação

---

## Pull Request (PR)

Após finalizar:

```bash id="push-branch"
git push origin feature/nome-da-feature
```

Criar PR no GitHub:

<<<<<<< HEAD
- Base: `dev`
=======
- Base: `main`
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
- Explicar o que foi feito
- Descrever mudanças

---

## Code Review

Antes do merge:

- Outro membro deve revisar
- Validar funcionamento
- Verificar padrões
<<<<<<< HEAD
- O Pull Request deve receber pelo menos 1 aprovação
- Comentários pendentes devem ser resolvidos antes do merge
- Caso novos commits sejam enviados, a revisão poderá ser solicitada novamente
=======
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

---

## Merge

Após aprovação:

<<<<<<< HEAD
- Realizar merge na `dev` (via Pull Request)
- Garantir que CI passou
- A `main` recebe apenas merges de `dev` quando pronto para produção
=======
- Realizar merge na `main`
- Garantir que CI passou
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

---

## Atualização da Base

Após merge:

```bash id="update-main"
<<<<<<< HEAD
git checkout dev
git pull origin dev
=======
git checkout main
git pull origin main
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
```

---

## Regras obrigatórias (CRITICO)

- Nunca commitar direto na `main`
- Nunca pular PR
- Nunca subir código quebrado
- Nunca ignorar CI
- Seguir padrões definidos

---

- Sempre usar branch
- Sempre abrir PR
- Sempre passar pelo CI
- Sempre seguir arquitetura

---

## Boas práticas

- Commits pequenos
- Nome claro de branch
- Código limpo
- Testar antes de subir

---

## Erros a evitar (`Com dúvida?` Pergunte a um membro da equipe)

- Trabalhar direto na main
- Commits gigantes
- Não atualizar base
- Ignorar conflitos
- Não testar código

---

## Fluxo resumido

```id="workflow-summary"
<<<<<<< HEAD
1. Atualizar ambiente
2. Criar branch feature/*
3. Desenvolver
4. Commitar
5. Push
6. PR
7. Comunicar no grupo
8. Revisão
10. Merge
11. Atualizar ambiente
=======
1. Criar tarefa
2. Criar branch
3. Desenvolver
4. Commit
5. Push
6. PR
7. Review
8. Merge
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
```

---

## Resultado

- Código organizado
- Histórico limpo
- Equipe alinhada
- Sem retrabalho
- Deploy seguro

---
