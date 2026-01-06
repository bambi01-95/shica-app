FROM node:20-alpine

WORKDIR /app

# 依存関係（キャッシュを効かせるため先に）
COPY package.json package-lock.json* ./
RUN npm ci

# ソースコード
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]