FROM node:20-alpine

# Приймаємо аргумент у білді
ARG NEXT_PUBLIC_API_URL
# Робимо його змінною оточення, щоб Next.js міг її підхопити
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .

# Тепер NEXT_PUBLIC_API_URL вже встановлена
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
