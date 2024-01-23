import React from "react";
import BooksCardContainer from "../../components/books-card-container/books-card-container";
import Pagination from '@mui/material/Pagination';
import './books.page.scss';
import FilterContainer from "../../components/filter-container/filter-container";

const BooksPage = () => (
    <div className="books-page">
        <div className="container">
            <div className="filter-books-container">
                <FilterContainer/>
                <BooksCardContainer/>
            </div>
            <Pagination className='pagination' count={5}/>
        </div>
    </div>
);

export default BooksPage;