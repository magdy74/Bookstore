import { createSlice } from "@reduxjs/toolkit";


const addCartItem = (cartList, item) => {
	const existingItem = cartList.find((cartListItem)=> cartListItem.id === item.id);
	if (existingItem){
		const itemIndex =  cartList.findIndex((cartListItem)=> cartListItem.id === item.id)
		cartList[itemIndex].quantity++;
		return cartList;
	}
		const newList = [...cartList, {...item, quantity:1}]
		return(newList)
}

const quantityModification = (cartList, item, typeModification) => {
	const itemIndex =  cartList.findIndex((cartListItem)=> cartListItem.id === item.id);
	if (typeModification === 'increase'){
		cartList[itemIndex].quantity++;
		return cartList;
	} else if (typeModification === 'decrease'){
		if(cartList[itemIndex].quantity === 1){
			cartList[itemIndex].quantity--;
			cartList.splice(itemIndex,1);
			return cartList;
		}
		else{
			cartList[itemIndex].quantity--;
			return cartList;
		}
	}
}

const removeCartItem = (cartList, item) => {
	const itemIndex =  cartList.findIndex((cartListItem)=> cartListItem.id === item.id);
	cartList[itemIndex].quantity = 0;
	cartList.splice(itemIndex,1);
	return cartList;
}


const INITIAL_STATE = {
	bookList:[]
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        addItemToCart(state, action){
            state.bookList = addCartItem(state.bookList, action.payload) 
        },
		increaseQuantityItem(state, action){
			state.bookList = quantityModification(state.bookList, action.payload, 'increase') 
		},
		decreaseQuantityItem(state, action){
			state.bookList = quantityModification(state.bookList, action.payload, 'decrease') 
		},
		removeCartFromItem(state, action){
			state.bookList = removeCartItem(state.bookList, action.payload)
		}
    }
})

export const {addItemToCart, increaseQuantityItem, decreaseQuantityItem, removeCartFromItem} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;