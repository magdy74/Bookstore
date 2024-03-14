import React from "react";
import './shopping-cart-page.scss';
import { connect } from "react-redux";
import CardShoppingCart from "../../components/card-shoppingCart/card-shoppingCart";
import CartSummary from "../../components/cart-summary/cart-summary.component";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ShoppingCartPage = ({cartItems}) =>{
    const navigate = useNavigate();
    return(
    <div className="shopping-cart-page">
        <div className="container">
            <div className="shopping-cart-container">
                <div className="title">
                    <h1>shopping cart</h1>
                </div>
                {cartItems[0] ? 
                <div className="items">
                    {cartItems.map((item)=> 
                    <CardShoppingCart key={item.id} item={item}/>
                    )}
                </div>
                : <div className="shopping-cart-message">
                    <h2>You don't have any items in your cart.</h2>
                    <div  className="start-shopping-button">
                        <Button variant="contained" size="large" onClick={()=>navigate('/')}>
                            start shopping
                        </Button>
                    </div>
                    </div>}
            </div>
            {cartItems[0] ?
            <div className="cart-summary-container">
                 <CartSummary/>
            </div>
            : null}
        </div>
    </div>
    )
};

const mapStateToProps = (state) => ({
    cartItems: state.cart.bookList
    });

export default connect(mapStateToProps)(ShoppingCartPage);