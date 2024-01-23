import React from "react";
import "./card.style.scss";
import { Rating } from "@mui/material";
import FavoriteLogo from "../header/menu-personal-logo/favorite/favorite";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const Card = ({image, title, author, rating, price}) => {
    return(
        <div className="card">
            <div className="book-image">
                <img src={image} alt="book" />
            </div>
            <ul className="book-details">
                <ul>
                <li className="title">{title}</li>
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
                <li className="add-cart-logo">
                    <AddShoppingCartIcon fontSize="large"/>
                </li>
            </ul>
        </div>
    )
}

export default Card;
