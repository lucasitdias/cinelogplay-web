## LUCAS (lucasitdev) - FRONTEND + APOIO BACKEND

### FRONTEND

#### 1: Estrutura e Setup
- [ ] Criar arquivo `frontend/.gitkeep` para garantir pasta no Git
- [ ] Implementar `frontend/index.html` com:
  - [ ] Navbar completa com Bootstrap
  - [ ] Seção de filmes (cards com imagem, título, ano, gênero)
  - [ ] Footer com informações
  - [ ] Responsividade (mobile, tablet, desktop)
- [ ] Implementar CSS em `frontend/css/style.css`:
  - [ ] Estilos globais
  - [ ] Estilos de cards
  - [ ] Hover effects
  - [ ] Media queries para responsividade
- [ ] Implementar JavaScript em `frontend/js/main.js`:
  - [ ] Configuração de API_URL com fallback para mock
  - [ ] Função `getFilmes()` com try/catch
  - [ ] Função `renderFilmes()` para exibir dados
  - [ ] Tratamento de erros

#### 2: Páginas Adicionais
- [ ] Criar `frontend/pages/diretores.html`:
  - [ ] Cards de diretores com nacionalidade e obras
  - [ ] Responsividade
  - [ ] Integração com API `/api/diretores`
- [ ] Criar `frontend/pages/contato.html`:
  - [ ] Formulário com validação JavaScript
  - [ ] Campos: nome, email, mensagem
  - [ ] Fallback para localStorage se API falhar
  - [ ] Resposta visual de sucesso/erro

#### 3: Mock Data
- [ ] Criar `frontend/data/filmes.json`:
  - [ ] Mínimo 5 filmes com id, titulo, ano, genero, diretor_id, tipo, imagem
  - [ ] Seguir estrutura do banco
- [ ] Criar `frontend/data/diretores.json`:
  - [ ] Mínimo 5 diretores com id, nome, nacionalidade, principais_obras

#### 4: Testes Locais
- [ ] Testar sem API (modo mock)
- [ ] Testar responsividade em 3 resoluções
- [ ] Testar navegação entre páginas
- [ ] Testar formulário (envio e salvamento local)

---

# `APOIO BACKEND (HENRIQUE)`

- [ ] Revisar arquitetura do backend
- [ ] Apoiar na integração frontend ↔ backend
- [ ] Testar endpoints durante desenvolvimento
- [ ] Ajudar em correções de bugs críticos

---

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
