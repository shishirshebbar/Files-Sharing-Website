# Word to PDF Converter Website

## About the Project

A full‑stack (MERN) file sharing web application that lets users upload, download, share, and manage files. The backend provides REST APIs for file handling and optional authentication; the frontend is a responsive web UI.

---

## Features

- Upload and download files (multiple types)  
- Generate shareable links for files  
- File metadata (name, size, upload date, owner)  
- Delete and manage uploaded files  
- Upload progress and basic validation (size / type)  
- Backend API and MongoDB storage (GridFS or file system)  
- Responsive frontend  

---

## Clone the repository

Open a terminal and run:

```bash
git clone https://github.com/shishirshebbar/Files-Sharing-Website.git

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