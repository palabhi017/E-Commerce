import axios,{AxiosResponse} from "axios";
import { Category, Product } from "../../utils/types";
export const getProdata = async (getProductsParam:Category) => {
  

    try {
        let res: AxiosResponse<Product[]> = await axios.get(`https://onestoredata.onrender.com/products`, getProductsParam)
        
        return res.data;
    } catch (error) {
        return error;
    }
}
