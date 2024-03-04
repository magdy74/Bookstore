import React from "react";
import './detailed-card.scss';
import { Button, Rating } from "@mui/material";

import { addItemToCart } from "../../redux/cart-reducer/cart-reducer";
import { connect } from "react-redux";

const DetailedCard = ({book, addCartItem}) => {
    const {title, image, author, rating, price, pagesNumber, language} = book;
    return(
        <div className="detailed-card">
            <div className="image">
                <img src={image} alt={title} />                
            </div>
            <div className="details">
                <div className="title">
                    <h2>{title}</h2>
                    <h3>{author}</h3>
                </div>
                <div className="rating">
                    <Rating name="half-rating-read" size="small" defaultValue={rating} precision={0.5} readOnly />
                    <h3>{rating}</h3>
                </div>
                <div className="table-description">
                    <h3>pages</h3>
                    <span>{[pagesNumber]}</span>
                    <h3>language</h3>
                    <span>{[language]}</span>
                </div>
                <div className="price">
                    <h2>{price + ' EGP'}</h2>
                </div>
            </div>   
            <div className="buttons">
                    <Button variant="contained" size="large" onClick={()=>{addCartItem(book)}}>
                        add to cart
                    </Button>
                    <Button variant="contained" size="large">
                        add to favorite
                    </Button>
                    <Button variant="contained" size="large">
                        buy now
                    </Button>
            </div>
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    addCartItem: (item) => dispatch(addItemToCart(item))
})

export default connect(null, mapDispatchToProps)(DetailedCard);
