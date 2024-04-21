import { createSlice } from "@reduxjs/toolkit";
import Books from "../../data/data";

const filterBooksByLanguageFunction = (bookList, language) => {
    if(language === 'all'){
        return [bookList, 'all'];
    } else if(language === 'english'){
        return [bookList.filter(({language}) => language === 'english'), 'english'];
    } else if(language === 'arabic'){
        return [bookList.filter(({language}) => language === 'arabic'), 'arabic'];
    }
}

const INITIAL_STATE = {
	bookList: Books,
    language:'all'
};

export const booksFilterSlice = createSlice({
    name:'booksFilter',
    initialState: INITIAL_STATE,
    reducers:{
        filterBooksByLanguage(state, action){
            state.bookList = filterBooksByLanguageFunction(Books, action.payload)[0]
            state.language = filterBooksByLanguageFunction(Books, action.payload)[1]
        }
    }

})

export const {filterBooksByLanguage} = booksFilterSlice.actions;

export const booksFilterReducer = booksFilterSlice.reducer;

