<<<<<<< HEAD
FROM node:24-alpine

WORKDIR /app

RUN corepack enable && \
    corepack prepare pnpm@10.12.4 --activate

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY backend/package.json ./backend/package.json

RUN pnpm install --frozen-lockfile

COPY backend ./backend

WORKDIR /app/backend

EXPOSE 3001

CMD ["pnpm", "dev"]
=======
# Usar a imagem base oficial do Node.js versão 20 com Alpine
FROM node:20-alpine

# Definir o diretório de trabalho dentro do container como /app
WORKDIR /app

# Habilitar o Corepack e preparar o pnpm mais recente para ser usado
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copiar os arquivos de dependência (package.json e pnpm-lock.yaml) para o diretório de trabalho
COPY package.json pnpm-lock.yaml ./

# Instalar as dependências usando pnpm com lockfile congelado
RUN pnpm install --frozen-lockfile

# Copiar todo o código da aplicação para dentro do container
COPY . .

# Informar que a aplicação expõe a porta 3001
EXPOSE 3001

# Definir o comando padrão para iniciar a aplicação em modo de desenvolvimento
CMD ["pnpm", "run", "dev"]
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
