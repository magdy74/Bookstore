import { createSlice } from "@reduxjs/toolkit";


const addfavoriteItem = (favoritetList, item) => {
	const existingItem = favoritetList.find((favoriteListItem)=> favoriteListItem.id === item.id);
	if (existingItem){
		return favoritetList;
	}
		const newList = [...favoritetList, {...item}]
		return(newList)
}

const removefavoriteItem = (favoriteList, item) => {
	const itemIndex =  favoriteList.findIndex((favoriteListItem)=> favoriteListItem.id === item.id);
	favoriteList.splice(itemIndex,1);
	return favoriteList;
}

const INITIAL_STATE = {
	bookList:[]
};

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: INITIAL_STATE,
    reducers: {
        addItemToFavorite(state, action){
            state.bookList = addfavoriteItem(state.bookList, action.payload) 
        },
		removeItemFromFavorite(state, action){
			state.bookList = removefavoriteItem(state.bookList, action.payload)
		}
    }
})

export const {addItemToFavorite, removeItemFromFavorite} = favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer;