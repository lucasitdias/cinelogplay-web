# Versionamento — CineLog

## Proposta

Este documento define como o versionamento do projeto deve ser realizado utilizando Git e GitHub, garantindo:

- Histórico organizado
- Rastreabilidade de mudanças
- Colaboração eficiente
- Segurança no desenvolvimento

---

## Sistema de Versionamento

- Ferramenta: Git
- Repositório: GitHub (privado)
- Branch principal: `main`

---

## Padronização de Ferramentas

Todo o projeto deve utilizar:

- Gerenciador de pacotes: **pnpm**
- Node.js: **v20.20.2 LTS**

## É proibido o uso de:

- npm
- yarn

Motivo:

- Garantir consistência entre ambiente local e CI/CD
- Evitar conflitos de lockfile

---

## Princípios

- Todo código deve ser versionado
- Nenhuma alteração deve ser perdida
- Histórico deve ser claro e compreensível
- Mudanças devem ser rastreáveis

---

## Estrutura de Branches

O projeto utiliza o padrão definido em `BRANCHING.md`:

- `main` → versão estável
- `feature/*` → desenvolvimento de funcionalidades
- `fix/*` → correções de bugs
- `hotfix/*` → correções urgentes

---

## Frequência de Commits

### Regra obrigatória:

- Commits devem ser frequentes
- Evitar commits grandes e genéricos

---

### Boa prática:

- Commitar a cada:
  - Nova funcionalidade
  - Correção de bug
  - Alteração relevante

---

### Evitar:

- Commits com muitas alterações diferentes
- Commits sem contexto

---

## Padrão de Commits

Formato obrigatório:

```id="commit-format"
tipo: descrição clara
```

---

### Tipos permitidos:

- `feat:` nova funcionalidade
- `fix:` correção de bug
- `docs:` documentação
- `style:` formatação
- `refactor:` melhoria interna
- `test:` testes
- `chore:` ajustes gerais

---

### Exemplos:

```id="commit-examples"
feat: adicionar página de diretores
fix: corrigir erro na rota /api/filmes
docs: atualizar CI/CD.md
```

---

## Organização do Histórico

O histórico deve permitir:

- Entender o que foi feito
- Identificar quando foi feito
- Saber quem fez

---

## Uso de Pull Requests

Toda alteração deve passar por PR:

- Revisão obrigatória
- Aprovação antes do merge
- Histórico preservado

---

## Atualização de Branch

Antes de trabalhar:

```bash id="update-branch"
git checkout main
git pull origin main
```

---

## Sincronização de Branch

Durante o desenvolvimento:

```bash id="sync-branch"
git pull origin main
```

Resolver conflitos antes de continuar

---

## Tags (Versões)

Quando o projeto atingir um marco importante, deve-se criar uma tag:

```bash id="create-tag"
git tag v1.0.0
git push origin v1.0.0
```

---

### Padrão de versão

```
MAJOR.MINOR.PATCH
```

- MAJOR → grandes mudanças
- MINOR → novas funcionalidades
- PATCH → correções

---

### Exemplos:

- v1.0.0 → primeira versão estável
- v1.1.0 → nova funcionalidade
- v1.1.1 → correção de bug

---

## Controle de Alterações

Toda mudança relevante deve:

- Estar em um commit
- Estar em um PR
- Estar documentada

---

## Arquivos que NÃO devem ser versionados

Garantir `.gitignore` contendo:

```
node_modules/
.env
dist/
coverage/
```

---

## Responsabilidade

Cada membro deve:

- Versionar corretamente seu código
- Fazer commits claros
- Atualizar sua branch
- Resolver conflitos

---

## Erros a evitar

- Commit direto na `main`
- Commits genéricos (ex: "update")
- Não atualizar branch antes de trabalhar
- Ignorar conflitos
- Subir arquivos sensíveis

---

## Integração com CI/CD

- Cada push pode disparar pipeline
- Código quebrado impacta o time
- Commits devem estar estáveis

---

## Validação

O versionamento está correto quando:

- Histórico é claro
- Commits são organizados
- PRs são utilizados
- Não há código perdido
- Pipeline CI/CD funciona

---

## Regra

Se não estiver versionado corretamente:

- Não pode ser considerado entregue

---
