FROM node:20-alpine

WORKDIR /app

# Instalar pnpm via Corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copiar arquivos de dependência
COPY package.json pnpm-lock.yaml ./

# Instalar dependências
RUN pnpm install --frozen-lockfile

# Copiar código da aplicação
COPY . .

# Expor porta
EXPOSE 5173

# Comando de desenvolvimento (--host para aceitar conexões externas)
CMD ["pnpm", "run", "dev", "--", "--host"]