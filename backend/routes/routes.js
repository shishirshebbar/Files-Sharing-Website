import express from "express";
import {uploadImage,downloadImage} from "../controller/imagecontroller.js"
import upload from "../utilities/upload.js"
const router = express.Router();


router.post('/upload',upload.single('file'),uploadImage);
router.get('/file/:fileId',downloadImage);

export default router;
