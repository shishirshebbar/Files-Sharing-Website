import mongoose from "mongoose";

const DatabaseConnection=async()=>{
    
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Databse connetced successfully")
    }catch(error){
        console.log(error.message);
    }
}
export default DatabaseConnection;