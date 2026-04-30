# Contribuição no Projeto — CineLog

## Proposta

Este documento define todas as regras obrigatórias para contribuição no projeto CineLog, garantindo:

- Padronização do código
- Organização do repositório
- Qualidade das entregas
- Colaboração eficiente entre os membros

---

## Regra Geral

Nenhum código pode ir direto para a branch `main`.

Todo desenvolvimento deve seguir:

```

tarefa → branch → commit → pull request → revisão → merge

```

---

## Fluxo Obrigatório

### 1. Atualizar base

```bash
git checkout main
git pull origin main
```

---

### 2. Criar branch

```bash
git checkout -b feature/nome-da-feature
```

---

### 3. Desenvolver a tarefa

- Implementar funcionalidade
- Garantir que não quebrou nada
- Seguir padrões do projeto

---

### 4. Commit

```bash
git add .
git commit -m "feat: descrição clara da alteração"
```

---

### 5. Enviar para o repositório

```bash
git push origin feature/nome-da-feature
```

---

### 6. Criar Pull Request (PR)

No GitHub:

- Base: `main`
- Comparar com: sua branch

---

### 7. Revisão obrigatória

- Outro membro deve revisar
- Validar:
  - Código
  - Funcionamento
  - Testes

---

### 8. Merge

Após aprovação:

- Merge na `main`
- Branch pode ser deletada

---

## Padrão de Commits

Usar padrão:

```
tipo: descrição
```

### Tipos permitidos:

- `feat:` nova funcionalidade
- `fix:` correção de bug
- `docs:` documentação
- `style:` formatação
- `refactor:` melhoria interna
- `test:` testes
- `chore:` ajustes gerais

---

### Exemplos

```
feat: adicionar listagem de filmes
fix: corrigir erro na API de diretores
docs: atualizar README
```

---

## Regras de Código

- Código deve ser legível
- Evitar duplicação
- Seguir padrão do projeto
- Não subir código quebrado

---

## Testes Obrigatórios

Antes de abrir PR:

- Rodar Cypress localmente
- Garantir que testes passam

```bash
pnpm run cy:run
```

---

## Boas Práticas

- Fazer commits pequenos
- Nomear bem as branches
- Escrever mensagens claras
- Testar antes de subir

---

## O que NÃO fazer

- Commit direto na `main`
- Subir código quebrado
- Ignorar testes
- Fazer PR sem revisão
- Subir arquivos desnecessários

---

## Conflitos

Caso ocorra conflito:

```bash
git pull origin main
```

Resolver manualmente antes de continuar

---

## Responsabilidade

Cada membro é responsável por:

- Seu código
- Seus commits
- Seus testes
- Sua documentação

---

## Regra Final

Se não seguir este documento:

- O PR deve ser recusado

---

## Validação

Para considerar uma contribuição válida:

- Código funcionando
- Testes passando
- PR aprovado
- Padrões seguidos

---
