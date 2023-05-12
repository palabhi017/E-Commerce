// import { async } from "@firebase/util";

import { Product } from "../../utils/types";
import { AppDispatch } from "../store";
import {
  adminDataAPI,
  categoryAdmin,
  deleteAdminAPi,
  postAdminDataAPi,
} from "./admin.api";
import {
  ADMIN_DATA_ERROR,
  ADMIN_DATA_LOADING,
  ADMIN_DATA_SUCCESS,
  POST_ADMIN_DATA_ERROR,
  POST_ADMIN_DATA_SUCCESS,
  POST_ADMIN_DATA_LOADING,
  FILTERING_ADMIN_DATA,
} from "./admin.type";

export interface IAdmin{
  email:string,
  password: string
}

export const getAdminData = ():any => async (dispatch:AppDispatch) => {
  dispatch({
    type: ADMIN_DATA_LOADING,
    payload: ""
  });

  try {
    let data = await adminDataAPI();
    if (data) {
      dispatch({ type: ADMIN_DATA_SUCCESS, payload: data });
    }
  } catch (err) {
    dispatch({
      type: ADMIN_DATA_ERROR,
      payload: ""
    });
  }
};

export const postAdminData = (payload:Product):any => async (dispatch:AppDispatch) => {
  dispatch({
    type: POST_ADMIN_DATA_LOADING,
    payload: ""
  });
  try {
    let data = await postAdminDataAPi(payload);
    if (data) {
      dispatch({ type: POST_ADMIN_DATA_SUCCESS, payload: data });
    }
  } catch (err) {
    dispatch({
      type: ADMIN_DATA_ERROR,
      payload: ""
    });
  }
};

export const deleteData = (id:number):any => async (dispatch:AppDispatch) => {
  try {
    let data = await deleteAdminAPi(id);
    dispatch({
      type: ADMIN_DATA_LOADING,
      payload: ""
    });
  } catch (err) {
    console.log(err);
  }
};

export const FilterData = (load:string):any => async (dispatch:AppDispatch) => {
  try {
    let data = await categoryAdmin(load);
    dispatch({ type: FILTERING_ADMIN_DATA, payload: data });
  } catch (err) {
    console.log(err);
  }
};
