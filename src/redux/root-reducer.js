import { combineReducers} from "@reduxjs/toolkit";
import { cartReducer } from "./cart-reducer/cart-reducer";
import { favoriteReducer } from "./favorite-reducer/favorite-reducer";
import { booksFilterReducer } from "./books-page-filter/books.page.filter"


export const rootReducer = combineReducers({
    cart: cartReducer,
    favorite: favoriteReducer,
    booksFilter: booksFilterReducer
});