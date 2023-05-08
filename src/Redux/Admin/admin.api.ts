
import axios, { AxiosResponse } from "axios";
import { IAdmin } from "./admin.action";

export const adminDataAPI = async () => {
  try {
    let res: AxiosResponse<IAdmin> = await axios("https://onestoredata.onrender.com/products");

    return res;
  } catch (err) {
    console.log(err);
  }
};

export const postAdminDataAPi = async (payload:IAdmin) => {
  try {
    let res: AxiosResponse<IAdmin> = await axios.post("https://onestoredata.onrender.com/products", payload);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const deleteAdminAPi = async (id:number) => {
  try {
    let res: AxiosResponse<IAdmin> = await axios.delete(`https://onestoredata.onrender.com//products/${id}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const categoryAdmin = async (par:String) => {
  try {
    let res: AxiosResponse<IAdmin> = await axios(`https://onestoredata.onrender.com//products?category=${par}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

// export const updateAdminData = async (id:number, title:string, price:number) => {
//   try {
//     let res = await axios(`https://onestoredata.onrender.com//${id}`, { title, price });
//   } catch (err) {
//     console.log(err);
//   }
// };
