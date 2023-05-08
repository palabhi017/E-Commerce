import axios from "axios";
import { User } from "../../utils/types";
export const getAuth= async(UserData:User)=>{

    try {
        let res = await axios.post(`https://onestoredata.onrender.com/login`,UserData)
      
        return res.data;
    } catch (error) {
        return error;
    }
}