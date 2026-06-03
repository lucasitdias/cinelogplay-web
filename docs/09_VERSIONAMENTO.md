# Versionamento — CinelogPlay

## Proposta

Definir como versionar código corretamente usando Git, garantindo:

- Histórico organizado
- Rastreabilidade de mudanças
- Colaboração eficiente
- Segurança no desenvolvimento

---

## Sistema de Versionamento

- Ferramenta: Git
- Repositório: GitHub (privado)
<<<<<<< HEAD
- Branch principal: `main` (produção)
- Branch de integração contínua: `dev` (homologação)
- Branches de desenvolvimento: `feature/*`
=======
- Branch de integração contínua, homologação `dev` 
- Branch principal: `main`
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

```
┌─ PRODUÇÃO ─┐
│   main     │  Entrega final, usuários
└─────┬──────┘
      │ (merge apenas quando pronto)
      │
┌─────▼──────────┐
│      dev       │  Integração contínua, homologação
└─────┬──────────┘
      │ (merges frequentes)
      │
┌─────▼────────────────────┐
│  feature/*               │  Desenvolvimento
│  (criadas de dev)        │
└──────────────────────────┘
```

---

## Ferramentas Obrigatórias

### Gestor de Pacotes:

<<<<<<< HEAD
- pnpm v10.12.4 (OBRIGATÓRIO)
- Node.js: v24.16.0

### Proibido Usar:

- `npm`
- `yarn`

**Motivo ?**

=======
- pnpm v9.x (OBRIGATÓRIO)
- Node.js: v20.20.2 LTS

### Proibido Usar:
-  `npm`
-  `yarn`

**Motivo ?** 
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
- Consistência entre máquinas
- Sincronização com CI/CD
- Evita problemas com lockfile

---

## Princípios

- Todo código deve ser versionado
- Nenhuma alteração deve ser perdida
- Histórico deve ser claro e compreensível
- Mudanças devem ser rastreáveis

---

## Estrutura de Branches

<<<<<<< HEAD
O projeto utiliza o padrão definido em `10_BRANCHING.md`:

- `main` → versão estável (produção)
- `dev` → integração contínua (homologação)
- `feature/*` → desenvolvimento de funcionalidades (criadas a partir de `dev`)
- `hotfix/*` → correções urgentes (criadas a partir de `main`)
=======
O projeto utiliza o padrão definido em `BRANCHING.md`:

- `main` → versão estável
- `feature/*` → desenvolvimento de funcionalidades
- `fix/*` → correções de bugs
- `hotfix/*` → correções urgentes
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

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

### Formato Obrigatório:

```
tipo: descrição clara
```

### Tipos Permitidos:

<<<<<<< HEAD
| Tipo        | Quando Usar         | Exemplo                                  |
| ----------- | ------------------- | ---------------------------------------- |
| `feat:`     | Nova funcionalidade | `feat: implementar página diretores`     |
| `fix:`      | Correção de bug     | `fix: erro na validação email`           |
| `refactor:` | Melhoria interna    | `refactor: reorganizar estrutura pastas` |
| `test:`     | Testes              | `test: testes Cypress home`              |
| `docs:`     | Documentação        | `docs: atualizar README.md`              |
| `style:`    | Formatação          | `style: formatar com Prettier`           |
| `chore:`    | Ajustes gerais      | `chore: atualizar dependências`          |
=======
| Tipo | Quando Usar | Exemplo |
|------|-----------|---------|
| `feat:` | Nova funcionalidade | `feat: implementar página diretores` |
| `fix:` | Correção de bug | `fix: erro na validação email` |
| `refactor:` | Melhoria interna | `refactor: reorganizar estrutura pastas` |
| `test:` | Testes | `test: testes Cypress home` |
| `docs:` | Documentação | `docs: atualizar README.md` |
| `style:` | Formatação | `style: formatar com Prettier` |
| `chore:` | Ajustes gerais | `chore: atualizar dependências` |
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

---

### Exemplos Corretos:

```bash
git commit -m "feat: criar estrutura HTML navbar"
git commit -m "feat: estilizar navbar com CSS"
git commit -m "feat: adicionar links navigation"
```

```bash
git commit -m "feat: implementar fallback localStorage"
git commit -m "fix: corrigir erro rota /api/filmes"
git commit -m "test: testes responsividade mobile"
git commit -m "docs: atualizar WORKFLOW.md"
git commit -m "refactor: melhorar estrutura services"
```

### Exemplos Incorretos:

```bash
git commit -m "feat: homepage completa com 50 mudanças"
```

```bash
 "update"
 "ajustes"
 "código novo"
 "fix bug"
 "wip"
```
<<<<<<< HEAD

=======
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
---

## Organização do Histórico

O histórico **deve permitir**:

<<<<<<< HEAD
- Entender O QUE foi feito (descrição clara)
- Saber QUANDO foi feito (timestamp)
- Identificar QUEM fez (autor)
- Rastrear problema até origem
=======
-  Entender O QUE foi feito (descrição clara)
-  Saber QUANDO foi feito (timestamp)
-  Identificar QUEM fez (autor)
-  Rastrear problema até origem
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

---

## Uso de Pull Requests

Toda alteração deve passar por PR:

- Revisão obrigatória
- Aprovação antes do merge
- Histórico preservado
<<<<<<< HEAD
- CI deve estar aprovado
- Pelo menos 1 aprovação é obrigatória
- Comentários pendentes devem ser resolvidos
=======
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

---

## Atualização de Branch

Antes de trabalhar:

```bash id="update-branch"
<<<<<<< HEAD
git checkout dev
git pull origin dev
=======
git checkout main
git pull origin main
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
```

---

## Fluxo de Commits

#### 1. Ver o que mudou
<<<<<<< HEAD

=======
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
```bash
git status
```

#### 2. Adicionar arquivo ao staging

```bash
git add arquivo.js
```

#### 3. Commitar

```bash
git commit -m "feat: adicionar validação email"
```

#### 4. Quando terminar, fazer push

```bash
git push origin feature/seu-branch
```

#### 5. Sincronização no ambiente de desenvolvimento

<<<<<<< HEAD
- `dev` atualiza merge:
=======
  -  `dev` atualiza merge:
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

```bash
git merge dev
```

#### 6. Depois do Merge em `dev`

```bash
git checkout dev
git pull origin dev

# dev agora tem suas alterações + de outros

git branch -d feature/seu-branch

# Deletar branch local após finalizar
```

---

## Sincronização de Branch

Durante o desenvolvimento:

```bash id="sync-branch"
<<<<<<< HEAD
git checkout dev
git pull origin dev
=======
git pull origin main
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
```

Resolver conflitos antes de continuar

---

## Tags (Versões)

Quando o projeto atingir um marco importante, deve-se criar uma tag:

```bash
git tag -a v1.0.0 -m "Versão 1.0.0 - Release inicial"
git push origin v1.0.0
```

---

### Padrão Semântico:

```
MAJOR.MINOR.PATCH
```

- MAJOR → grandes mudanças
- MINOR → novas funcionalidades
- PATCH → correções

<<<<<<< HEAD
=======

>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
### Exemplos:

- v1.0.0 → primeira versão
- v1.1.0 → nova funcionalidade
- v1.1.1 → correção de bug
- v2.0.0 → grandes mudanças

---

## Controle de Alterações

Toda mudança relevante deve:

- Estar em um commit
- Estar em um PR
- Estar documentada

---

## Arquivos que NÃO devem ser versionados

`.gitignore` deve conter:

```
# Dependências
node_modules/
<<<<<<< HEAD
=======
pnpm-lock.yaml (apenas em monorepo)
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

# Ambiente
.env
.env.local
.env.*.local

# Build
dist/
build/

# Testes
coverage/

# Editor
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*
pnpm-debug.log*
```
<<<<<<< HEAD

=======
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
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
- Commit direto em `dev`
- Commits genéricos ( tipo: "update")
- Não atualizar branch antes de trabalhar
- Ignorar conflitos
- Subir arquivos sensíveis `.env` ou `node_modules`
- Usar `git push --force` em `main`/`dev`

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
<<<<<<< HEAD
- Nenhum commit direto foi realizado em main ou dev
=======
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8

---

## Regra

Se não estiver versionado corretamente:

- Não pode ser considerado entregue

---
