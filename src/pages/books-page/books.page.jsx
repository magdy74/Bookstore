import React from "react";
import BooksCardContainer from "../../components/books-card-container/books-card-container";
import Pagination from '@mui/material/Pagination';
import './books.page.scss';
import FilterContainer from "../../components/filter-container/filter-container";
import Books from "../../data/data";

const BooksPage = () => {
    const itemNumbers= 6;
    const [page, setPage] = React.useState(1);
    const handleChange = (e,value) => {
        setPage(value);
    } 
    return(
    <div className="books-page">
        <div className="container">
            <div className="filter-books-container">
                <FilterContainer/>
                <BooksCardContainer pagenumber={page} itemnumbers={itemNumbers}/>
            </div>
            <Pagination className='pagination' count={Math.ceil(Books.length/itemNumbers)} page={page} onChange={handleChange}/>
        </div>
    </div>
)};

export default BooksPage;