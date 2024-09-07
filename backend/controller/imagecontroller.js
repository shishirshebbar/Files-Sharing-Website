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
            res.status(200).json({path:`htttp://localhost:8000/file/${file._id}`});
        }catch(error){
            console.error(error.message);
            res.status(500).json({message:error.message})
        }
    
} 

export const downloadImage=async(req,res)=>{
    try{
        const File = await file.findById(req.params.fileId);
        File.downloadContent++;
        await File.save();
        res.download(File.path,File.name)

    }catch(error){
        console.log(error);
        return res.status(500).json({message:error.message})

    }
}