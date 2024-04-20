import React, { useState } from "react";
import './detailed-card.scss';
import { Button, Rating } from "@mui/material";

import { addItemToCart } from "../../redux/cart-reducer/cart-reducer";
import { connect } from "react-redux";
import { addItemToFavorite } from "../../redux/favorite-reducer/favorite-reducer";

const DetailedCard = ({book, addCartItem, addFavoriteItem}) => {
    const {title, image, author, rating, price, pagesNumber, language} = book;
    const [buttonAddCartStatus, setAddCartStatus] = useState(false);
    const [buttonAddFavoriteStatus, setAddFavoritetStatus] = useState(false);
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
                    <div  className={`${buttonAddCartStatus ? 'button-clicked': ''}`} >
                        <Button className={`add-to-cart ${buttonAddCartStatus ? 'button-clicked-style': ''}`} variant="contained" size="large" onClick={()=>{addCartItem(book); setAddCartStatus(true); setTimeout(()=> setAddCartStatus(false), 2000)}}>
                            add to cart
                        </Button>
                    </div>
                    <div className={`${buttonAddFavoriteStatus ? 'button-clicked': ''}`}>
                    <Button className={`add-to-favorite ${buttonAddFavoriteStatus ? 'button-clicked-style': 'standard'}`} variant="contained" size="large" onClickCapture={()=>{addFavoriteItem(book); setAddFavoritetStatus(true); setTimeout(()=> setAddFavoritetStatus(false), 2000)}}>
                        add to favorite
                    </Button>
                    </div>
                    {/* <Button variant="contained" size="large">
                        buy now
                    </Button> */}
            </div>
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    addCartItem: (item) => dispatch(addItemToCart(item)),
    addFavoriteItem: (item) => dispatch(addItemToFavorite(item))
})

export default connect(null, mapDispatchToProps)(DetailedCard);
