import { combineReducers} from "@reduxjs/toolkit";
import { cartReducer } from "./cart-reducer/cart-reducer";

export const rootReducer = combineReducers({
    cart: cartReducer
});