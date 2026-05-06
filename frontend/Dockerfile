# Usa a imagem base oficial do Node.js versão 20 com Alpine (leve)
FROM node:20-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Instala o pnpm via Corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copia arquivos de dependência (package.json e lockfile)
COPY package.json pnpm-lock.yaml ./

# Instala dependências com pnpm (lockfile congelado garante versões exatas)
RUN pnpm install --frozen-lockfile

# Copia todo o código da aplicação para dentro do container
COPY . .

# Expõe a porta 5173 (usada pelo Vite no modo dev)
EXPOSE 5173

# Comando padrão de inicialização em modo desenvolvimento
# (--host permite aceitar conexões externas)
CMD ["pnpm", "run", "dev", "--", "--host"]
