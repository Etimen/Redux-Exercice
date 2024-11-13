import { legacy_createStore } from "redux";
import { ProductReducer } from "./reducers/productReducers";

const store= legacy_createStore(ProductReducer)

export default store