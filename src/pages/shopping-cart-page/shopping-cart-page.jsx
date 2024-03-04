import React from "react";
import './shopping-cart-page.scss';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { connect } from "react-redux";
import { increaseQuantityItem, decreaseQuantityItem, removeCartFromItem } from "../../redux/cart-reducer/cart-reducer";



const ShoppingCartPage = ({cartItems, increaseQuantityItemAction, decreaseQuantityItemAction, removeCartFromItemAction}) =>(
    <div className="shopping-cart-page">
        <div className="container">
            <div className="title">
                <h1>Shopping Cart</h1>
            </div>
            <div className="items">
                {cartItems.map((item)=> {
                const {id, image, title, price, quantity} = item;
                return(
                <div key= {id} className="item">
                    <div className="image">
                        <img src={image} alt="img" />
                    </div>
                    <div className="details">
                        <div className="title">
                            <h2>{title}</h2>
                        </div>
                        <div className="remove-and-save-in-favorite">
                            <div className="remove-item" onClick={()=>{removeCartFromItemAction(item)}}>
                                <DeleteOutlineIcon/>
                                <span>remove</span>
                            </div>
                            <div className="space">
                                <span>|</span>
                            </div>
                            <div className="save-in-favorite">
                                <FavoriteBorderIcon/>
                                <span>save in favorite</span>
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
                )})}
            </div>
            <div className="total">
                Total: 200 EGP
            </div>
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    cartItems: state.cart.bookList
    });

const mapDispatchToProps = dispatch => ({
    increaseQuantityItemAction: (item) => dispatch(increaseQuantityItem(item)),
    decreaseQuantityItemAction: (item) => dispatch(decreaseQuantityItem(item)),
    removeCartFromItemAction: (item) => dispatch(removeCartFromItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartPage);