# Branching - CineLog

## Índice

- [Branching - CineLog](#branching---cinelog)
  - [Índice](#índice)
  - [Proposta](#proposta)
    - [O projeto utiliza uma estratégia baseada em:](#o-projeto-utiliza-uma-estratégia-baseada-em)
  - [Estrutura de Branches](#estrutura-de-branches)
  - [Branch Principal](#branch-principal)
    - [`main`](#main)
  - [Branch de Desenvolvimento](#branch-de-desenvolvimento)
    - [`feature/*`](#feature)
  - [Branches de Feature](#branches-de-feature)
  - [Branches de Hotfix](#branches-de-hotfix)
  - [Padrão de Nomenclatura](#padrão-de-nomenclatura)
    - [Features:](#features)
    - [Hotfix:](#hotfix)
    - [Regras:](#regras)
  - [Fluxo de Uso das Branches](#fluxo-de-uso-das-branches)
  - [Regras obrigatórias](#regras-obrigatórias)
  - [Boas práticas](#boas-práticas)
  - [Erros a evitar](#erros-a-evitar)
  - [Exemplos práticos](#exemplos-práticos)
    - [Criar branch:](#criar-branch)
    - [Atualizar branch:](#atualizar-branch)
    - [Enviar para o GitHub:](#enviar-para-o-github)
  - [Resultado](#resultado)
    - [Essa estratégia garante:](#essa-estratégia-garante)

---

## Proposta

Definir **como as branches devem ser utilizadas no projeto**, garantindo:

- Organização do código
- Histórico limpo
- Facilidade de manutenção
- Controle de versões eficiente

#### O projeto utiliza uma estratégia baseada em:

```id="branch-model"
main → produção
feature/* → desenvolvimento
hotfix/* → correções urgentes
```

---

## Estrutura de Branches

```id="branch-structure"
main
│
├── feature/frontend
├── feature/backend
├── feature/tests
├── feature/devops
│
└── hotfix/*
```

---

## Branch Principal

### `main`

- Contém código estável
- Sempre pronto para deploy
- Protegida (não permite push direto)

---

## Branch de Desenvolvimento

### `feature/*`

Utilizadas para desenvolver funcionalidades.

Exemplos:

- `feature/frontend`
- `feature/backend`
- `feature/tests`
- `feature/devops`

---

## Branches de Feature

Cada funcionalidade deve ser desenvolvida em uma branch:

```bash id="feature-branch"
git checkout -b feature/nome-da-feature
```

---

## Branches de Hotfix

Usadas para correções urgentes em produção:

```bash id="hotfix-branch"
git checkout -b hotfix/correcao-urgente
```

Após correção:

- Merge direto na `main`
- Deploy imediato

---

## Padrão de Nomenclatura

### Features:

```id="naming-feature"
feature/nome-da-feature
```

---

### Hotfix:

```id="naming-hotfix"
hotfix/nome-do-problema
```

---

### Regras:

- Usar letras minúsculas
- Usar hífen (`-`) ao invés de espaço
- Nome claro e objetivo
- Siga sempre os padrões

---

## Fluxo de Uso das Branches

```id="branch-flow"
1. Atualizar main
2. Criar branch
3. Desenvolver
4. Commit
5. Push
6. PR
7. Review
8. Merge na main
```

---

## Regras obrigatórias

- Nunca commitar direto na `main`
- Nunca fazer merge sem PR
- Nunca deixar branch desatualizada

---

- Sempre criar branch
- Sempre usar PR
- Sempre atualizar base antes de trabalhar
- Sempre seguir nomenclatura padrão

---

## Boas práticas

- Manter branches pequenas
- Atualizar frequentemente com `main`
- Resolver conflitos localmente
- Nomear corretamente

---

## Erros a evitar

- Trabalhar direto na main
- Branch muito grande
- Não atualizar base
- Nome confuso de branch
- Ignorar conflitos

---

## Exemplos práticos

### Criar branch:

```bash id="example-create"
git checkout main
git pull origin main
git checkout -b feature/listagem-filmes
```

---

### Atualizar branch:

```bash id="example-update"
git checkout main
git pull origin main
git checkout feature/listagem-filmes
git merge main
```

---

### Enviar para o GitHub:

```bash id="example-push"
git push origin feature/listagem-filmes
```

---

## Resultado

- Código organizado
- Histórico limpo
- Sem conflitos frequentes
- Deploy seguro
- Equipe alinhada

### Essa estratégia garante:

- Controle total do código
- Segurança na `main`
- Desenvolvimento paralelo entre membros sem conflitos

---
