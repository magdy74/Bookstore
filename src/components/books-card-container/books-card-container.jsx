import React from "react";
import Card from "../card/card.component";
import Books from "../../data/data";
import './books-card-container.scss';

const BooksCardContainer = () => (
    <div className="books-card-container">
            {Books.map(({id, ...rest}) => (
                <Card key={id} {...rest} booksCard={true}/>
                ))}
    </div>
);

export default BooksCardContainer;