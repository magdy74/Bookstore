import React from "react";
import './discount.scss';
import img from './Unsplash.svg';

const Discount = () => (
    <div className="discount">
        <div className="container">
            <div className="discount-text">
                <h2>All books are 20% off now!</h2>
                <h2>Don't miss such a deal!</h2>
            </div>
            <div className="discount-image">
                <img src={img} alt="img" />
            </div>
        </div>
    </div>
)

export default Discount;