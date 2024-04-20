import { combineReducers} from "@reduxjs/toolkit";
import { cartReducer } from "./cart-reducer/cart-reducer";
import { favoriteReducer } from "./favorite-reducer/favorite-reducer";

export const rootReducer = combineReducers({
    cart: cartReducer,
    favorite: favoriteReducer,
});