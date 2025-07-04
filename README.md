# 🛠️ MiniBlog Backend – Express + TypeScript + LowDB

This is the backend service for the MiniBlog platform. It provides a simple REST API to create, read, update, and delete blog posts using **Express.js**, **TypeScript**, and **LowDB** (a lightweight JSON database).

---

## 🚀 Tech Stack

- [Express.js](https://expressjs.com/) – Web server and routing
- [TypeScript](https://www.typescriptlang.org/) – Type-safe development
- [LowDB](https://github.com/typicode/lowdb) – JSON file-based storage
- [uuid](https://www.npmjs.com/package/uuid) – Unique ID generation
- [dotenv](https://www.npmjs.com/package/dotenv) – Environment variable support

---

## 📁 Folder Structure

miniblogbackend/
├── src/
│ ├── index.ts # App entry point (Express setup, route SetUp)
│ ├── controllers/
│ │ └── posts.ts # Logic for CRUD operations
│ ├── db/
│ │ └── postsDB.ts # LowDB setup & Post type definition
│
├── posts.json # Auto-generated JSON storage file
├── .env # Environment variables (e.g., PORT)
├── package.json # Project metadata and scripts
├── tsconfig.json # TypeScript config


## ⚙️ Setup Instructions

### 1️⃣ Install Node.js

Ensure Node.js version **18+** is installed.

### 2️⃣ Clone and Install Dependencies

```bash
git clone https://github.com/rbnpappu/mini-blog-backend
cd miniblogbackend
npm install
npm run dev