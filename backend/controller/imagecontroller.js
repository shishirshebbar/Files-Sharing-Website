import file from "../models/model.js";
export const uploadImage =async(req,res)=>
    {
        const fileobject = {
            path:req.file.path,
            name:req.file.originalname
        }
        try{
            const File = await file.create(fileobject);
            console.log(File);
        }catch(error){
            console.error(error.message);
        }
    
} 