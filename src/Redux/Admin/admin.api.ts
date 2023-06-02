
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { IAdmin } from "./admin.action";
import { Product } from "../../utils/types";

export const adminDataAPI = async () => {
  try {
    let res: AxiosResponse<Product[]> = await axios("https://onestoredata.onrender.com/products");

    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const postAdminDataAPi = async (payload:Product) => {
  try {
    let res: AxiosResponse<Product[]> = await axios.post("https://onestoredata.onrender.com/products", payload);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteAdminAPi = async (id:number) => {
  try {
    let res: AxiosResponse<Product[]> = await axios.delete(`https://onestoredata.onrender.com//products/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const categoryAdmin = async (par:String) => {
  try {
    let res: AxiosResponse<Product[]> = await axios(`https://onestoredata.onrender.com/products?category=${par}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const updateAdminData = async (id:number, obj: any) => {
  try {
    let res: AxiosResponse<Product[]> = await axios(`https://onestoredata.onrender.com/products/${id}`, obj);
    return res.data
  } catch (err) {
    console.log(err);
  }
};
