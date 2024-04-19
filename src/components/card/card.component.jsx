import React, { useState } from "react";
import "./card.style.scss";
import { Rating } from "@mui/material";
import FavoriteLogo from "../header/menu-personal-logo/favorite/favorite";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {addItemToCart} from '../../redux/cart-reducer/cart-reducer';

const Card = (item) => {
    const {image, title, author, rating, price, booksCard, addCartItem} = item;
    const [buttonStatus, setStatus] = useState(false);
    return(
        <div className={`card ${booksCard? 'books-card': null}`}>
            <div className="book-image">
                <img src={image} alt="book" />
            </div>
            <div className={`card-details-functions ${booksCard? 'books-card-details-functions': null}`}>
            <ul className="book-details">
                <ul>
                <li className="title">
                    <Link to={`/books/${title}`}>
                    {title}
                    </Link>                                 
                </li>
                <li className="author">{author}</li>
                </ul>
                <li className="rating">
                    <Rating name="half-rating-read" size="small" defaultValue={rating} precision={0.5} readOnly />
                </li>
                <li className="price">{price + ' EGP'}</li>
            </ul>
            <ul className="book-functions">
                <li className="add-favorite-logo">
                    <FavoriteLogo/>
                </li>
                <li className={`add-cart-logo ${buttonStatus ? "button-clicked" :'standard'}`}>
                    <AddShoppingCartIcon fontSize="large" className={`button-add-shopping-cart ${buttonStatus ? "icon-button-clicked" :''}`} onClick={()=> {addCartItem(item); setStatus(true)}}/>
                    <div className="set-timeout-number">
                        {buttonStatus ? setTimeout(()=>setStatus(false), 2000) : ''}
                    </div>
                </li>
            </ul>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addCartItem: (item) => dispatch(addItemToCart(item))
})

export default connect(null, mapDispatchToProps)(Card);
