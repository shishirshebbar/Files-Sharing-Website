import mongoose from "mongoose";


const fileSchema = new mongoose.Schema({

    path:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    downloadFile:{
        type:Number,
        required:true,
        default:0
    }
})

const file = mongoose.model("file",fileSchema)

export default file;