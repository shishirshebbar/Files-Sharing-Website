import express from "express";
import dotenv from "dotenv";
import router from "../backend/routes/routes.js"
import cors from "cors";
import DatabaseConnection from "./databaseconfig/db.js";

const app = express();
const PORT=process.env.PORT||8000;
dotenv.config();
app.use(cors());
app.use('/',router);


DatabaseConnection();

app.listen(PORT,()=>console.log(`Server running on PORT ${PORT}`))