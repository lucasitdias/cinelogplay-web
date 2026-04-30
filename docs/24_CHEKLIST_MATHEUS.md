## MATHEUS (Mbolsanello) - TESTES (QA)

### CYPRESS E2E

#### 1: Setup
- [ ] Configurar `cypress.config.js`:
  - [ ] baseUrl: http://localhost:3000
  - [ ] specPattern, supportFile corretos
- [ ] Criar `cypress/support/e2e.js`:
  - [ ] Hooks: beforeEach (limpar localStorage)
  - [ ] Custom commands (se necessário)

#### 2: Fixtures
- [ ] Criar `cypress/fixtures/filmes.json`:
  - [ ] Dados de teste para mocks
- [ ] Criar `cypress/fixtures/diretores.json`:
  - [ ] Dados de teste para mocks

#### 3: Testes da Home
- [ ] Criar `cypress/e2e/home.cy.js`:
  - [ ]  Deve carregar a página
  - [ ]  Deve exibir navbar com links
  - [ ]  Deve carregar filmes com intercept (SEM API REAL)
  - [ ]  Deve ter footer
  - [ ]  Deve ser responsivo

#### 4: Testes de Navegação
- [ ] Criar `cypress/e2e/navigation.cy.js`:
  - [ ]  Navegar para página de diretores
  - [ ]  Navegar para página de contato
  - [ ]  Voltar para home
  - [ ]  Exibir diretores com intercept

#### 5: Testes de Formulário
- [ ] Criar `cypress/e2e/formulario.cy.js`:
  - [ ]  Formulário visível
  - [ ]  Validação de campos obrigatórios
  - [ ]  Preencher e enviar (modo offline)
  - [ ]  Limpar campos após envio
  - [ ]  Testar fallback localStorage

#### 6: Execução de Testes
- [ ] Executar testes localmente: `pnpm run cy:open`
- [ ] Executar testes CI: `pnpm run test:ci`
- [ ] Garantir 100% de cobertura dos cenários
- [ ] Validar testes passando no GitHub Actions

#### 7: Validações Finais
- [ ]  Testes NÃO dependem de API real
- [ ]  Todos os testes usam `cy.intercept()`
- [ ]  Testes passam no modo CI
- [ ]  Sem API real, testes continuam passando
- [ ]  Teste de robustez: desligar backend, testes passam

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