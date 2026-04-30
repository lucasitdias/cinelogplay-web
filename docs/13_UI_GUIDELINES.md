# UI Guidelines — CineLog

## Proposta

Definir padrões visuais e de interface do sistema para garantir:

- consistência entre telas
- padronização do frontend
- melhor experiência do usuário
- facilidade de manutenção

---

## Regra principal

> Nenhuma tela deve ser criada fora deste padrão.

---

## Base tecnológica

- HTML5
- CSS3
- Bootstrap 5.3.x

---

## Layout geral

### Estrutura padrão de páginas

Todas as páginas devem seguir:

1. Navbar
2. Conteúdo principal
3. Footer

---

## Navbar

### Requisitos

- Presente em todas as páginas
- Responsiva
- Links obrigatórios:

- Home
- Diretores
- Contato

---

## Footer

### Requisitos

- Presente em todas as páginas
- Informações básicas
- Links ou redes sociais

---

## Grid e Responsividade

### Uso obrigatório

- Utilizar sistema de grid do Bootstrap
- Classes recomendadas:

```html
container row col-md-4 col-lg-3
```

---

### Regras

- Layout deve funcionar em:
  - Desktop
  - Tablet
  - Mobile

- Nunca usar layout fixo

---

## Componentes padrão

### Cards (filmes)

Devem conter:

- imagem
- título
- informações básicas (ano/gênero)

---

### Botões

- Usar classes do Bootstrap:

```html
btn btn-primary btn btn-secondary
```

---

### Formulários

Campos obrigatórios:

- Nome
- Email
- Mensagem

---

### Validação

- Deve ser feita com JavaScript
- Campos obrigatórios não podem ser enviados vazios

---

## Tipografia

### Padrão

- Fonte padrão do Bootstrap
- Tamanhos consistentes

---

### Hierarquia

- Títulos: `<h1>`, `<h2>`, `<h3>`
- Texto: `<p>`

---

## Espaçamento

### Utilizar classes Bootstrap:

```html
mt-3 mb-3 p-3 gap-3
```

---

### Regra

- Evitar CSS manual desnecessário
- Priorizar utilitários do Bootstrap

---

## Cores

### Regra principal

- Utilizar padrão Bootstrap

---

### Exemplo

- Primary → azul padrão
- Secondary → cinza

---

### Evitar

- cores aleatórias
- estilos inconsistentes

---

## Imagens

### Regras

- Sempre responsivas:

```html
img-fluid
```

---

- Manter proporção
- Evitar distorção

---

## Boas práticas

- Código limpo e organizado
- Sem CSS duplicado
- Sem inline styles
- Reutilização de componentes

---

## Estrutura de pastas (Frontend)

```bash
/frontend
  /css
  /js
  /data
  index.html
```

---

## Integração com dados

### Regras

- Dados devem vir de:
  - API (quando disponível)
  - Mock (fallback)

---

- Interface nunca deve quebrar sem dados

---

## Estados da interface

### Carregamento

- Exibir mensagem ou loading

---

### Sem dados

- Exibir mensagem amigável

---

### Erro

- Não quebrar layout
- Mostrar fallback

---

## Responsividade (OBRIGATÓRIO)

Testar em:

- 1920px
- 1024px
- 768px
- 375px

---

## Consistência visual

Todas as páginas devem:

- seguir mesma estrutura
- usar mesmos componentes
- manter padrão visual

---

## Erros críticos (EVITAR)

- layout quebrado em mobile
- estilos diferentes entre páginas
- não usar Bootstrap
- CSS desorganizado
- ausência de responsividade

---

## Resultado

- interface consistente
- layout responsivo
- experiência uniforme
- fácil manutenção

---
