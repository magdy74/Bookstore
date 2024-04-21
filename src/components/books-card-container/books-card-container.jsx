import React from "react";
import Card from "../card/card.component";
import './books-card-container.scss';
import { connect } from "react-redux";

const BooksCardContainer = ({pagenumber, itemnumbers, booksFiltered}) => {
    // from, to, filter() 1*6 
    const pageNumber= pagenumber;
    const itemNumbers= itemnumbers;
    const dividedBooks = booksFiltered.filter((item, index) => (pageNumber*itemNumbers-itemNumbers) <= index && index < (pageNumber*itemNumbers));
    // n to match list with page
    return(
        <div className="books-card-container">
                {dividedBooks.map(({id, ...rest}) => (
                    <Card key={id} id={id} {...rest} booksCard={true}/>
                    ))}
        </div>
    )
};

const mapStateToProps = (state) => ({
    booksFiltered: state.booksFilter.bookList
    });

export default connect(mapStateToProps)(BooksCardContainer);