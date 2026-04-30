# CineLog — Guia de Configuração do Repositório

Este documento descreve **todas as configurações realizadas no repositório GitHub** do projeto CineLog, com explicações detalhadas, decisões tomadas e orientações para manutenções futuras do Time.

---

# IMPORTANTE !!!

### `Este documento deverá sempre ser atualizado por toda a equipe durante o desenvolvimento conforme novas configurações forem adicionadas ao projeto.`

---

# PROPOSTA

Garantir que o projeto tenha:

- Controle de qualidade de código
- Fluxo de trabalho organizado em equipe
- Proteção contra erros críticos
- Base preparada para CI/CD

---

# ESTRUTURA DO PROJETO

```
/frontend
/backend
/docs
README.md
```

---

# PRÉVIA

### Configuração

- Imagem `(Logo)` configurada no repositório
- Tamanho recomendado: **1280x640**

### ATENÇÃO !!!

- Evitar imagens maiores ou fora da proporção (podem ser cortadas)

---

# FEATURES DO REPOSITÓRIO

## Wiki

**Desativado**

### Motivo:

- O projeto já utiliza `/docs` com todas as documentações estruturadas
- Evita duplicação de conteúdo

---

## Issues

**Ativado**

### Uso:

- Controle de tarefas
- Registro de bugs
- Organização do projeto

---

## Projects

**Ativado**

### Uso:

- Gestão de tarefas da equipe

---

## Sponsors

**Desativado**

### Motivo:

- Não é um projeto open source com financiamento externo

---

## Discussions

**Desativado**

### Motivo:

- Não necessário para o escopo atual

---

# CONFIGURAÇÃO DE MERGE

**Ativado**

- Merge commit
- Squash merge

**Desativado**

- Rebase merge

---

## Decisão das configurações aplicadas

### Squash (principal)

- Mantém histórico limpo
- Junta múltiplos commits em um só

### Merge commit

- Mantém histórico completo

### Rebase

- Evitado por ser mais complexo e professor não explicou o cenaário de uso

---

# PROTEÇÃO DE BRANCH (MAIN)

Configuração feita em:

```
Settings → Rules → Rulesets
```

---

### STATUS

Enforcement: **Active**

---

### Target

Default branch (`main`)

---

# REGRAS CONFIGURADAS

### Restrict updates

- Impede push direto na branch main

### Restrict deletions

- Impede deletar a branch

### Block force pushes

- Impede uso de `git push --force`

---

# PULL REQUEST (OBRIGATÓRIO)

### Require a pull request before merging

- Todo código deve passar por PR é obrigatório

---

### Required approvals: **1**

### Motivo:

- Garante revisão mínima
- Evita travar fluxo
- Aprovação deve ser realizada por alguém do time

---

### Dismiss stale approvals

- Remove aprovação quando novos commits são adicionados

---

### Require approval of most recent push

- Exige nova aprovação após alterações

---

### Require conversation resolution

- Obriga resolver comentários antes do merge

---

# STATUS CHECKS (CI/CD)

### Require status checks to pass

### Estado atual:

- Nenhum check configurado ainda

### Motivo:

- CI será configurado posteriormente

---

## Futuro

Após configurar CI:

- Adicionar checks (Cypress, backend tests e demais features)

---

## Require deployments to succeed

- Só permite merge se o deploy for bem-sucedido
- Backend precisa subir no Render
- Frontend precisa subir no Vercel

Usar quando:

- CI/CD completo já estiver funcionando

Situação atual:

- Não utilizar (ativar futuramente)

---

## Require code scanning results

- Analisa automaticamente vulnerabilidades no código

Detecta:

- Falhas de segurança
- Dependências vulneráveis

Usar quando:

- Projeto em produção
- API pública

Situação atual:

- Não utilizar não é prioridade agora

---

## Require code quality results

- Exige validação de qualidade do código
- ESLint
- SonarCloud

Usar quando:

- Pipeline de qualidade estiver configurada

Situação atual:

- Não utilizar agora pois depende do CI configurado

---

## Automatically request Copilot review

- Solicita revisão automática com IA

Usar quando:

- Equipe utiliza GitHub Copilot

Situação atual:

- Desativado

---

# FLUXO DE TRABALHO DEFINIDO EM EQUIPE

## Processo padrão

1. Criar branch

```
feature/nome-da-feature
```

2. Desenvolver

3. Commitar

4. Abrir Pull Request

5. Aguardar:

- CI passar
- 1 aprovação

6. Merge via GitHub

---

## PROIBIDO

- Push direto na `main`
- Merge sem PR
- Forçar push

---

## BOAS PRÁTICAS

- Usar nomes claros de branch
- Commits descritivos
- Revisar código antes de aprovar
- Não ignorar falhas de CI

---

## PRÓXIMO PASSO

- Configurar GitHub Actions (CI/CD)
- Adicionar testes automatizados
- Integrar Cypress

---

# CONCLUSÃO

O repositório agora está:

Protegido contra erros
Organizado para trabalho em equipe
Preparado para CI/CD
Alinhado com boas práticas

---
