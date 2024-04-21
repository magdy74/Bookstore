import React from "react";
import './card-favorite.scss';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { connect } from "react-redux";
import { removeItemFromFavorite } from "../../redux/favorite-reducer/favorite-reducer";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { addItemToCart } from "../../redux/cart-reducer/cart-reducer";
import { Link } from "react-router-dom";

const CardFavorite = ({item, removeItemFromfavoriteAction, moveToShoppingCartAction}) =>{
    const {id, image, title, price} = item;
    return(
        <div key= {id} className="item-card-favorite">
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
                    <div className="remove-and-add-to-cart">
                        <div className="remove-item" onClick={()=>{removeItemFromfavoriteAction(item)}}>
                            <DeleteOutlineIcon/>
                            <span>remove</span>
                        </div>
                        <div className="space">
                            <span>|</span>
                        </div>
                        <div className="add-to-cart" onClick={()=>{moveToShoppingCartAction(item);removeItemFromfavoriteAction(item)}}>
                            <AddShoppingCartIcon/>
                            <span>move to cart</span>
                        </div>
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
    removeItemFromfavoriteAction: (item) => dispatch(removeItemFromFavorite(item)),
    moveToShoppingCartAction: (item) => dispatch(addItemToCart(item))
})

export default connect(null, mapDispatchToProps)(CardFavorite);