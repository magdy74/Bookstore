import React from "react";
import BooksCardContainer from "../../components/books-card-container/books-card-container";
import Pagination from '@mui/material/Pagination';
import './books.page.scss';
import FilterContainer from "../../components/filter-container/filter-container";
import Books from "../../data/data";

const BooksPage = () => {
    const [page, setPage] = React.useState(1);
    const handleChange = (e,value) => {
        setPage(value);
    } 
    return(
    <div className="books-page">
        <div className="container">
            <div className="filter-books-container">
                <FilterContainer/>
                <BooksCardContainer pagenumber={page}/>
            </div>
            <Pagination className='pagination' count={Math.ceil(Books.length/6)} page={page} onChange={handleChange}/>
        </div>
    </div>
)};

export default BooksPage;