# 🍲 Recipe Book

A full-featured web application for creating and viewing recipes, intuitive and easy to use.

---

## 📂 Project Structure

```
recipes-book/
├── client/          # Frontend built with Next.js
├── server/          # Backend built with NestJS
├── docker-compose.yml
└── README.md
```

---

## 🚀 Technologies

* **Frontend:** Next.js (port: `3001`)
* **Backend:** NestJS (port: `3000`)
* **Docker** and **Docker Compose** for running and scaling the application

---

## 🐳 Running the Application with Docker Compose

Ensure Docker and Docker Compose are installed on your computer.

Run the following command:

```bash
docker-compose up --build
```

After successful launch, the application will be accessible at:

* 📌 **Frontend:** [http://localhost:3001](http://localhost:3001)
* 📌 **Backend:** [http://localhost:3000](http://localhost:3000)

---

## 🛠️ Development

### Running the frontend locally

```bash
cd client
npm install
npm run dev
```

### Running the backend locally

```bash
cd server
npm install
npm run start:dev
```

---

## 🔄 Frontend and Backend Communication

* The backend API is available on port `3000`.
* The frontend communicates with the backend via the environment variable `NEXT_PUBLIC_API_URL`.

---

## 📦 Requirements

* 🐳 Docker
* 📦 Docker Compose
* 🟢 Node.js (recommended version: v20)

---

## 💡 Useful Links

* 📖 [Next.js Documentation](https://nextjs.org/docs)
* 📘 [NestJS Documentation](https://docs.nestjs.com)
* 🐳 [Docker Compose Documentation](https://docs.docker.com/compose)

---
