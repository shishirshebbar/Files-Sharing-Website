# Word to PDF Converter Website

## About the Project

This project is a web application built using the MERN stack that allows users to convert Word documents into PDF files quickly and efficiently. Users can upload a Word file, and the system processes it to generate a downloadable PDF. The application features a responsive interface for seamless interaction and a backend API to handle file processing and storage.

---

## Features

- Upload Word documents for conversion  
- Download generated PDF files  
- Simple and intuitive user interface  
- Backend API for file handling and conversion  
- Storage of uploaded files in the database  
- Full-stack MERN architecture  

---

## Clone the repository

Open a terminal and run:

```bash
git clone https://github.com/your-username/word-to-pdf-converter.git

```

## Run instructions

### 1. Backend setup

Install backend dependencies from the root directory:

```bash
npm install
```

Create a `.env` file in the root directory and add:

```env
MONGO_URL=your_mongodb_connection_uri
PORT=8000
```

Start the backend server:

```bash
npm start
```

### 2. Frontend setup

Navigate to the frontend directory and install dependencies:

```bash
cd frontend
npm install
```

Start the frontend application:

```bash
npm run dev
```

The frontend will open in your browser and communicate with the backend at http://localhost:8000.