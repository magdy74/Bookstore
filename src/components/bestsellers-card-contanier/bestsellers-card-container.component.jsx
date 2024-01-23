import React from "react";
import './bestsellers-card-container.scss';
import Card from "../card/card.component";
import Books from "../../data/data";

const CardContainerBestsellers = () => {
    return(
        <div className="bestseller">
            <div className="container">
                <h1 className="title-bestseller">bestsellers</h1>
                <div className="card-container-bestseller">
                    {Books.map(({id, ...rest})=>
                    <Card key={id} {...rest}/>)}
                </div>
            </div>
        </div>
    )
}

export default CardContainerBestsellers;