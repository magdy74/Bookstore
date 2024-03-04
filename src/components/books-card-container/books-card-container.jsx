import React from "react";
import Card from "../card/card.component";
import Books from "../../data/data";
import './books-card-container.scss';



const BooksCardContainer = ({pagenumber, itemnumbers}) => {
    // from, to, filter() 1*6 
    const pageNumber= pagenumber;
    const itemNumbers= itemnumbers;
    const dividedBooks = Books.filter((item, index) => (pageNumber*itemNumbers-itemNumbers) <= index && index < (pageNumber*itemNumbers));
    // n to match list with page
    return(
        <div className="books-card-container">
                {dividedBooks.map(({id, ...rest}) => (
                    <Card key={id} id={id} {...rest} booksCard={true}/>
                    ))}
        </div>
    )
};

export default BooksCardContainer;