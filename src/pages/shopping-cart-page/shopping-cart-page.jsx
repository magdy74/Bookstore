import React from "react";
import './shopping-cart-page.scss';
import { connect } from "react-redux";
import CardShoppingCart from "../../components/card-shoppingCart/card-shoppingCart";
import CartSummary from "../../components/cart-summary/cart-summary.component";

const ShoppingCartPage = ({cartItems}) =>(
    <div className="shopping-cart-page">
        <div className="container">
            <div className="shopping-cart-container">
                <div className="title">
                    <h1>shopping cart</h1>
                </div>
                <div className="items">
                    {cartItems.map((item)=> 
                    <CardShoppingCart key={item.id} item={item}/>
                    )}
                </div>
            </div>
            <div className="cart-summary-container">
                 <CartSummary/>
            </div>
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    cartItems: state.cart.bookList
    });

export default connect(mapStateToProps)(ShoppingCartPage);