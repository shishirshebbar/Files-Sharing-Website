import axios from "axios";

const URL="hhtp://localhost:8000"

export const uploadFile=async(data)=>{
    try{
        let response = await axios.post(`${URL}/upload`,data)
        return response.data;
    }
    catch(error){
        console.log(error.message);
    }
}