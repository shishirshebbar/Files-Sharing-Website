import express from "express";
import {uploadImage} from "../controller/imagecontroller.js"
import upload from "../utilities/upload.js"
const router = express.Router();


router.post('/upload',upload.single('file'),uploadImage);

export default router;
