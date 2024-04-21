import React, { useEffect } from "react";
import BooksCardContainer from "../../components/books-card-container/books-card-container";
import Pagination from '@mui/material/Pagination';
import './books.page.scss';
import FilterContainer from "../../components/filter-container/filter-container";
import { connect } from "react-redux";

const BooksPage = ({booksFiltered}) => {
    const itemNumbers= 6;
    const [page, setPage] = React.useState(1);
    const handleChange = (e,value) => {
        setPage(value);
    } 
    useEffect(() => {
        setPage(1)
      }, [booksFiltered]);
    return(
    <div className="books-page">
        <div className="container">
            <div className="filter-books-container">
                <FilterContainer/>
                <BooksCardContainer pagenumber={page} itemnumbers={itemNumbers}/>
            </div>
            <Pagination className='pagination' count={Math.ceil(booksFiltered.length/itemNumbers)} page={page} onChange={handleChange}/>
        </div>
    </div>
)};

const mapStateToProps = (state) => ({
    booksFiltered: state.booksFilter.bookList
    });

export default connect(mapStateToProps)(BooksPage);