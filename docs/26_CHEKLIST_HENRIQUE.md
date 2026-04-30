## 👤 HENRIQUE + LUCAS - BACKEND + DEVOPS

### BACKEND (HENRIQUE + LUCAS)

#### 1: Setup e Estrutura
- [ ] Configurar `backend/package.json`:
  - [ ] Dependências: express, cors, dotenv, pg
  - [ ] Scripts: dev, start, test
- [ ] Criar `backend/.env.example` com todas as variáveis
- [ ] Implementar `backend/server.js`:
  - [ ] Middleware express
  - [ ] CORS configurado
  - [ ] Health check em `/`
  - [ ] Error handler global
  - [ ] 404 handler

#### 2: Rotas e Controllers
- [ ] Criar rotas em `backend/routes/`:
  - [ ] `filmes.js`: GET / (lista), GET /:id
  - [ ] `diretores.js`: GET / (lista), GET /:id
  - [ ] `contato.js`: POST / (enviar mensagem)
- [ ] Criar controllers em `backend/controllers/`:
  - [ ] `filmesController.js` com getAll() e getById()
  - [ ] `diretoresController.js` com getAll() e getById()
  - [ ] `contatoController.js` com sendMessage()

#### 3: Services e Lógica
- [ ] Criar services em `backend/services/`:
  - [ ] `filmesService.js`: buscar do mock (depois do banco)
  - [ ] `diretoresService.js`: buscar do mock (depois do banco)
  - [ ] `contatoService.js`: salvar mensagem (depois no banco)
- [ ] Implementar fallback com mock:
  - [ ] Se banco falhar, retornar dados do `backend/mock/`
  - [ ] Logging de erros

#### 4: Mock Data
- [ ] Criar `backend/mock/filmes.json`:
  - [ ] Mesmo conteúdo do frontend/data/filmes.json
  - [ ] Usado como fallback se banco cair
- [ ] Criar `backend/mock/diretores.json`:
  - [ ] Mesmo conteúdo do frontend/data/diretores.json

#### 5: Testes Locais
- [ ] Testar GET /api/filmes
- [ ] Testar GET /api/filmes/:id
- [ ] Testar GET /api/diretores
- [ ] Testar GET /api/diretores/:id
- [ ] Testar POST /api/contato com validação
- [ ] Testar fallback (desligar banco e validar respostas)

---

## `DEVOPS (Responsabilidade) HENRIQUE - (IronVisuals)`

#### 1: Docker
- [ ] Criar `docker-compose.yml`:
  - [ ] Serviço PostgreSQL v16
  - [ ] Variáveis de ambiente
  - [ ] Volume para persistência
  - [ ] Network para comunicação

#### 2: GitHub Actions
- [ ] Criar `.github/workflows/ci-cd.yml`:
  - [ ] Trigger: push to main, pull request to main
  - [ ] Job CI: clonar, setup Node, instalar, rodar testes
  - [ ] Job CD: notificar deploy em Vercel/Render

#### 3: Deploy
- [ ] Configurar backend no Render:
  - [ ] Conectar repositório GitHub
  - [ ] Build: `pnpm install`
  - [ ] Start: `node backend/server.js`
  - [ ] Variáveis de ambiente
  - [ ] Deploy automático ativado

#### 4: Validação
- [ ] Testar pipeline CI no GitHub Actions
- [ ] Testar deploy automático no Render
- [ ] Validar endpoint `/api/filmes` online

---

# `TAREFAS COMPARTILHADAS (TODOS) !!!`

### Versionamento e Workflow

#### Branch Management
- [ ] Criar feature branch: `git checkout -b feature/[area]`
- [ ] Manter branch atualizada: `git pull origin main`
- [ ] Commits descritivos: `feat:`, `fix:`, `docs:`, `test:`

#### Pull Requests
- [ ] Criar PR para main com descrição clara
- [ ] Aguardar 1 aprovação mínima
- [ ] Garantir CI verde antes de merge
- [ ] Resolver comentários antes de merge

#### Documentação
- [ ] Atualizar docs se fazer mudanças na arquitetura
- [ ] Documentar novos endpoints (se backend)
- [ ] Documentar novos testes (se testes)

---

# `Deploy e Apresentação`

#### Antes da Apresentação
- [ ] Frontend funciona sem backend
- [ ] Backend funciona sem banco
- [ ] Testes passam localmente
- [ ] CI/CD verde no GitHub
- [ ] Deploy online funcionando

#### Checklist de Apresentação
- [ ] Repositório no GitHub acessível
- [ ] README.md completo e atualizado
- [ ] Projeto rodando localmente
- [ ] Cypress funcionando
- [ ] Pipeline CI executando
- [ ] Frontend online (Vercel)
- [ ] Backend online (Render)
- [ ] Teste de robustez: desligar backend, frontend funciona

---

## Plano de Desenvolvimento — `CineLogPlay`

Este cronograma organiza a divisão de responsabilidades entre os membros do time, Lucas, Matheus e Henrique, garantindo fluxo contínuo de desenvolvimento, testes e DevOps.


> ## Distribuição de Responsabilidades

| Semana | `Lucas (Frontend)` |  `Henrique (Backend+DevOps)` |  `Matheus (Testes)` |
|--------|--------------------|-------------------------------|----------------------|
| **1** | Estrutura base (HTML, CSS, layout inicial, mock data) | Setup do backend (Express, rotas iniciais, estrutura API) | Setup do Cypress + fixtures iniciais |
| **2** | Páginas adicionais + integração com API | Services, regras de negócio + melhorias de arquitetura | Testes E2E (Home, navegação, formulários) |
| **3** | Integração completa + ajustes UI/UX | Docker + CI/CD (GitHub Actions + deploy pipeline) | Validação CI + automação Cypress no pipeline |
| **4** | Ajustes finais + refinamento visual | Ajustes finais + deploy backend | Testes finais + regressão completa |

---

## (DoD)

Uma tarefa está pronta quando:

-  Código funcional
-  Segue padrão do projeto
-  Sem erros no console
-  Funciona com mock/fallback
-  Testes passam localmente
-  Commit realizado corretamente
-  PR criado e aprovado
-  CI verde
-  Deploy refletido online

---