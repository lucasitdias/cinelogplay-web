# Requisitos do Site — CineLog

Este documento define **todos os requisitos obrigatórios do projeto**, garantindo clareza sobre o que deve ser desenvolvido, evitando dúvidas e desalinhamento entre os membros da equipe.

---

## Classificação dos Requisitos

- Requisitos Funcionais (RF) → O sistema deve FAZER
- Requisitos Não Funcionais (RNF) → Como o sistema deve FUNCIONAR

---

# Requisitos Funcionais (RF)

## RF01 — Exibição de Filmes

O sistema deve exibir uma lista de filmes contendo:

- Título
- Ano
- Gênero
- Imagem

---

## RF02 — Organização por Categorias

O sistema deve organizar filmes nas seguintes seções:

- Lançamentos
- Gêneros
- Clássicos
- Por ano

---

## RF03 — Página de Diretores

O sistema deve exibir diretores contendo:

- Nome
- Nacionalidade
- Principais obras
- Imagem

---

## RF04 — Formulário de Contato

O sistema deve permitir envio de mensagens contendo:

- Nome
- Email
- Mensagem

---

## RF05 — Integração com Backend

O frontend deve consumir dados via API:

- `/api/filmes`
- `/api/diretores`
- `/api/contato`

---

## RF06 — Fallback Frontend (Modo Offline)

O sistema deve funcionar sem backend:

- Utilizar dados locais (`/data/*.json`)
- Ativar automaticamente quando API não estiver disponível

---

## RF07 — Fallback Backend

O backend deve funcionar sem banco:

- Retornar dados mock (`/mock/*.json`)
- Não interromper o funcionamento da API

---

## RF08 — Responsividade

O sistema deve funcionar corretamente em:

- Desktop
- Tablet
- Mobile

---

## RF09 — Navegação

O sistema deve possuir:

- Navbar funcional
- Navegação entre páginas sem erro

---

## RF10 — Testes Automatizados

O sistema deve possuir testes E2E que validem:

- Carregamento de páginas
- Navegação
- Interações
- Formulário

---

# Requisitos Não Funcionais (RNF)

## RNF01 — Desacoplamento

Frontend e backend devem funcionar de forma independente.

---

## RNF02 — Resiliência

O sistema não pode quebrar em caso de falhas:

- Backend indisponível
- Banco indisponível

---

## RNF03 — Performance

- Carregamento rápido das páginas
- Uso eficiente de recursos

---

## RNF04 — Padronização

Todos os membros devem seguir:

- Estrutura de pastas
- Documentação
- Workflow
- Versionamento

---

## RNF05 — Qualidade de Código

- Código organizado
- Sem duplicação desnecessária
- Legível e padronizado

---

## RNF06 — Versionamento

- Uso obrigatório de Git
- Uso de branches
- Uso de Pull Requests

---

## RNF07 — CI/CD

- Testes automatizados obrigatórios
- Deploy automático

---

## RNF08 — Segurança Básica

- Não expor dados sensíveis
- Uso de `.env` para variáveis

---

## RNF09 — Compatibilidade

Sistema deve funcionar em navegadores modernos:

- Chrome
- Edge
- Firefox

---

# Requisitos de Testes

- Testes devem rodar sem backend real
- Uso obrigatório de `cy.intercept`
- Uso de fixtures

---

# Requisitos de Deploy

- Backend deve ser publicado antes do frontend
- Frontend deve usar variável `.env`
- API deve estar validada antes do deploy

---

# Requisitos da Entrega

Deve conter:

- Frontend funcional
- Backend funcional
- Banco configurado
- Testes implementados
- CI/CD funcionando
- Deploy realizado
- Documentação completa

---

# Critérios

- Todas as funcionalidades devem funcionar
- Sistema não quebrar sem backend
- Sistema não quebrar sem banco
- Testes passam
- Deploy online
- Documentação completa

---

# Validação para entrega

Antes da entrega, devemos validar:

1. Rodar frontend sem backend
2. Rodar backend sem banco
3. Executar testes com sucesso
4. Acessar sistema online

---

# Regra

#### `Se não estiver documentado aqui como requisito, não é obrigatório.`

#### `Se estiver aqui, é obrigatório cumprir.`

---
