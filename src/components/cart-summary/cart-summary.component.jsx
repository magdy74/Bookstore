import React from "react";
import './cart-summary.style.scss';
import { Button } from "@mui/material";
import { connect } from "react-redux";

const CartSummary = ({cartItems}) => {
    const shippingCost = 20;
    return(
        <div className="cart-summary-component">
            <div className="cart-summary-title">
                    <h1>cart summary</h1>
                </div>
                <div className="cart-summary-details"> 
                    <div className="line-item">
                        <span>item({cartItems.reduce((total, item)=> total + (item.quantity), 0)})</span>
                        <span>{cartItems.reduce((total, item)=> total + (item.price * item.quantity), 0)} EGP</span>
                    </div>
                    <div className="line-item">
                        <span>shipping</span>
                        <span>{shippingCost} EGP</span>
                    </div>
                    <div className="line-item">
                        <span>discount</span>
                        <span>0 EGP</span>
                    </div>
                </div>
                <div className="total">
                    <div className="line-item">
                        <span>Total</span>
                        <span>{cartItems.reduce((total, item)=> total + (item.price * item.quantity), 0) + shippingCost} EGP</span>
                    </div>
                </div>
                <div className="go-to-checkout-button">
                    <Button variant="contained" size="large">
                            go to checkout
                    </Button>
            </div>
        </div>
    )
};


const mapStateToProps = (state) => ({
    cartItems: state.cart.bookList
    });

export default connect(mapStateToProps)(CartSummary);