import { TypedUseSelectorHook, useDispatch,useSelector } from "react-redux";
import {
  legacy_createStore,
  applyMiddleware,
  // compose,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { reducer as productReducer } from "./Products/product.reducer";
import { reducer as adminReducer } from "./Admin/admin.reducer";
import { reducer as Auth } from "./Auth/auth.reducer";
const rootReducer = combineReducers({ productReducer, adminReducer,Auth });

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

type DispatchFun = ()=> AppDispatch

export const useAppDispatch:DispatchFun = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector