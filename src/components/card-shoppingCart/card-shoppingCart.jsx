import React from "react";
import './card-shoppingCart.scss';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { connect } from "react-redux";
import { decreaseQuantityItem, increaseQuantityItem, removeCartFromItem } from "../../redux/cart-reducer/cart-reducer";
import { addItemToFavorite } from "../../redux/favorite-reducer/favorite-reducer";
import { Link } from "react-router-dom";

const CardShoppingCart = ({item, increaseQuantityItemAction, decreaseQuantityItemAction, removeCartFromItemAction, moveInFavoriteActione}) =>{
    const {id, image, title, price, quantity} = item;
    return(
        <div key= {id} className="item-card-shopping-cart">
                <div className="image">
                    <Link to={`/books/${title}`}>
                        <img src={image} alt="img" />   
                    </Link>                             
                </div>
                <div className="details-and-price">
                <div className="details">
                    <div className="title">
                        <Link to={`/books/${title}`}>
                            <h2>{title}</h2>
                        </Link>    
                    </div>
                    <div className="remove-and-save-in-favorite">
                        <div className="remove-item" onClick={()=>{removeCartFromItemAction(item)}}>
                            <DeleteOutlineIcon/>
                            <span>remove</span>
                        </div>
                        <div className="space">
                            <span>|</span>
                        </div>
                        <div className="save-in-favorite" onClick={()=>{moveInFavoriteActione(item); removeCartFromItemAction(item)}}>
                            <FavoriteBorderIcon/>
                            <span>move in favorite</span>
                        </div>
                    </div>
                    <div className="quantity">
                        <RemoveCircleIcon onClick={()=>{decreaseQuantityItemAction(item)}}/>
                        <span>{quantity}</span>
                        <AddCircleIcon onClick={()=>{increaseQuantityItemAction(item)}}/>
                    </div>
                </div>
                <div className="price">
                    <h2>{price +' EGP'}</h2>
                </div>
            </div>
        </div>
)
};


const mapDispatchToProps = dispatch => ({
    increaseQuantityItemAction: (item) => dispatch(increaseQuantityItem(item)),
    decreaseQuantityItemAction: (item) => dispatch(decreaseQuantityItem(item)),
    removeCartFromItemAction: (item) => dispatch(removeCartFromItem(item)),
    moveInFavoriteActione: (item) => dispatch(addItemToFavorite(item))
})

export default connect(null, mapDispatchToProps)(CardShoppingCart);