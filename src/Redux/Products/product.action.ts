import { Category } from "../../utils/types";
import { AppDispatch } from "../store";
import { getProdata } from "./product.api";
import * as types from "./product.type";

export const protypes = (payload:string) => {
  return { type: types.PRODUCTS_TYPE, payload: payload };
};

export const getProducts = (getProductsParam:Category) => async (dispatch:AppDispatch) => {
  dispatch({
    type: types.PRODUCTS_LOAD,
    payload: undefined
  });
  try {
    let data = await getProdata(getProductsParam);
    if (data) {
      dispatch({ type: types.PRODUCTS_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({
      type: types.PRODUCTS_ERROR,
      payload: undefined
    });
  }
};
