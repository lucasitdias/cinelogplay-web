# Definition of Done (DoD) — CineLog

## Proposta

Definir critérios claros e obrigatórios para determinar quando uma tarefa está realmente concluída.

Evita:

- entregas incompletas
- código não testado
- funcionalidades quebradas
- inconsistência entre membros

---

## Conceito

Uma tarefa **NÃO está pronta** quando:

- apenas “funciona na máquina do desenvolvedor”
- não foi testada
- não foi validada
- não foi revisada

Uma tarefa só está pronta quando atende **TODOS os critérios definidos neste documento**.

---

## Regra Principal

> Se qualquer item deste documento não for atendido, a tarefa NÃO pode ser considerada concluída.

---

## Critérios obrigatórios (DoD)

### 1. Código funcional

- A funcionalidade implementada deve funcionar corretamente
- Não pode haver erros no console
- Não pode quebrar outras partes do sistema

---

### 2. Padrão do projeto

- Seguir estrutura definida do projeto
- Seguir organização de pastas
- Seguir padrão de nomenclatura

---

### 3. Integração correta

- Frontend deve consumir API corretamente (quando aplicável)
- Backend deve responder corretamente
- Não pode haver endpoints quebrados

---

### 4. Resiliência aplicada

- Funciona com API ativa
- Funciona sem API (mock)
- Funciona sem banco (fallback backend)

---

### 5. Testes obrigatórios

- Testes Cypress cobrindo a funcionalidade
- Uso de `cy.intercept()` (sem API real)
- Testes passando localmente

---

### 6. Testes no CI

- Pipeline do GitHub Actions deve passar
- Nenhum teste pode falhar

---

### 7. Build funcionando

- Projeto deve buildar sem erro
- Frontend deve gerar `/dist`
- Backend deve iniciar corretamente

---

### 8. Sem dependência local

- Não pode depender de configuração local específica
- Deve funcionar em outro ambiente

---

### 9. Código versionado corretamente

- Commit realizado na branch correta
- Nome da branch seguindo padrão
- Commit claro e objetivo

---

### 10. Pull Request obrigatório

- PR criado para `main`
- Descrição do PR clara
- Relacionado à tarefa

---

### 11. Revisão de código

- PR revisado por pelo menos 1 membro
- Ajustes feitos, se necessário

---

### 12. Deploy validado

- Alteração refletida no ambiente online
- Frontend atualizado (Vercel/GitHub Pages)
- Backend atualizado (Render)

---

### 13. Validação manual

- Testado no navegador
- Testado fluxo completo
- Sem erros visuais ou funcionais

---

## Checklist de conclusão

Antes de finalizar uma tarefa, validar:

- [ ] Funcionalidade implementada
- [ ] Sem erros no console
- [ ] Segue padrão do projeto
- [ ] Funciona com mock (frontend)
- [ ] Funciona sem banco (backend)
- [ ] Testes Cypress criados
- [ ] Testes passando localmente
- [ ] Testes passando no CI
- [ ] Build funcionando
- [ ] Commit realizado corretamente
- [ ] PR criado
- [ ] PR revisado
- [ ] Deploy funcionando
- [ ] Testado manualmente

---

## Fluxo correto de conclusão

1. Desenvolver funcionalidade
2. Testar localmente
3. Criar testes Cypress
4. Validar mock/fallback
5. Commit
6. Push
7. Criar Pull Request
8. Aguardar CI
9. Revisão de código
10. Merge
11. Validar deploy

---

## Responsabilidade da equipe

### Todos devem:

- Seguir o DoD sem exceção
- Não marcar tarefa como pronta sem validação
- Garantir qualidade antes de entregar

---

## Erros críticos (EVITAR)

- Funciona só na minha máquina
- Não criar testes
- Ignorar CI quebrado
- Fazer merge sem revisão
- Não validar deploy

---

## Resultado

- entregas completas
- sistema estável
- código padronizado
- menos retrabalho
- qualidade consistente entre equipe

---
