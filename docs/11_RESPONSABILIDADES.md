# Responsabilidades da Equipe — CineLog

## Proposta

Definir de forma clara e obrigatória **quem faz o quê dentro do projeto**, garantindo:

- Organização
- Distribuição equilibrada de tarefas
- Evitar sobrecarga
- Evitar retrabalho
- Garantir entrega completa

Este documento é nossa **regra oficial do projeto**.

---

## Estrutura da Equipe

A equipe está dividida nas seguintes áreas:

- Frontend
- Backend
- Testes (QA)
- DevOps
- Gestão/Organização (todos)

---

# Frontend

## Responsabilidades: Lucas (lucasitdev)

- Desenvolver toda interface do sistema
- Implementar telas conforme ESCOPO
- Aplicar padrões do UI_GUIDELINES
- Consumir API do backend
- Garantir responsividade
- Criar validações visuais (formulários)

## Deve seguir:

- ESCOPO_DO_PROJETO.md
- UI_GUIDELINES.md
- REQUISITOS.md
- WORKFLOW.md

## Entregas obrigatórias:

- Home completa
- Página de diretores
- Página de contato
- Integração com backend
- Interface funcional sem quebrar

---

# Backend

## Responsabilidades: Henrique (IronVisuals) + apoio Lucas (lucasitdev)

- Criar API REST
- Implementar endpoints definidos
- Integrar com banco de dados
- Garantir estabilidade da aplicação
- Implementar fallback (resiliência)

## Deve seguir:

- ARQUITETURA.md
- REQUISITOS.md
- RESILIENCE.md
- WORKFLOW.md

## Entregas obrigatórias:

- Endpoint `/api/filmes`
- Endpoint `/api/diretores`
- Endpoint `/api/contato`
- Integração com PostgreSQL/Supabase
- API funcional e estável

---

# Testes (QA)

## Responsabilidades: Matheus (Mbolsanello)

- Criar testes automatizados E2E
- Garantir que sistema funcione sem backend real (mock)
- Validar fluxos principais do sistema

## Deve seguir:

- TEST_PLAN.md
- CYPRESS_E2E.md
- REQUISITOS.md

## Entregas obrigatórias:

- Testes de carregamento
- Testes de navegação
- Testes de formulário
- Uso obrigatório de `cy.intercept`

## Regras:

- NÃO usar API real
- Testes devem rodar no CI
- Testes devem passar sempre

---

# DevOps

## Responsabilidades: Henrique (IronVisuals)

- Configurar CI/CD
- Garantir execução automática dos testes
- Configurar deploy automático

## Deve seguir:

- CI_CD.md
- DEPLOY\_(VERCEL_RENDER).md

## Entregas obrigatórias:

- GitHub Actions funcionando
- Cypress rodando no CI
- Deploy automático ativo:
  - Frontend (Vercel ou GitHub Pages)
  - Backend (Render)

---

# Gestão e Organização (TODOS)

- Seguir workflow do projeto
- Criar branch corretamente
- Fazer commits organizados
- Criar Pull Requests
- Revisar código dos colegas

## Deve seguir:

- WORKFLOW.md
- BRANCHING.md
- CONTRIBUTION.md
- DEFINITION_OF_DONE.md

---

## Regras (OBRIGATÓRIO)

Todos os membros DEVEM:

- Seguir os documentos oficiais
- Não trabalhar direto na `main`
- Criar branch para cada tarefa
- Fazer Pull Request
- Testar antes de subir código
- Não quebrar o projeto

---

## Comunicação

- Informar bloqueios imediatamente
- Alinhar mudanças com equipe
- Não alterar arquitetura sem consenso

---

## Integração entre áreas

### Frontend ↔ Backend

- Frontend consome API
- Backend garante retorno correto

### Backend ↔ Testes

- Testes NÃO dependem do backend real

### DevOps ↔ Todos

- Todos devem garantir que:
  - código roda local
  - testes passam

---

## Critério de Responsabilidade

Cada membro é responsável por:

- Sua área
- Qualidade do que entrega
- Impacto no projeto
- Documentação

---

## Regra crítica

Se algo quebrar:

- Quem fez a alteração → corrige

---

## Resultado

- Projeto organizado
- Equipe alinhada
- Entregas completas
- Sem retrabalho
- Sem confusão de responsabilidades

---
