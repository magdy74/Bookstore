import React from "react";
import './book-page.scss';
import { useParams } from "react-router-dom";
import Books from "../../data/data";
import DetailedCard from "../../components/detailed-card/detailed-card";

const BookPage = () =>{
    const {id} = useParams();
    return(
        <div className="book-page">
            <div className="container">
                {Books.map((book) => book.title === id ? 
                <DetailedCard key={book.id} book={book}/> : null)}
            <div className="summary">
                <h2>Summary</h2>
                {Books.map((book) => book.title === id ? 
                <span>{book.summary}</span> : null)}
            </div>
            </div>
        </div>
    )
}


export default BookPage;