import React from "react";
import './home.page.scss';
import Discount from "../../components/discount/discount.component";
import CardContainerBestsellers from "../../components/bestsellers-card-contanier/bestsellers-card-container.component";
import ShopByLanguage from "../../components/shop-by-language/shop-by-language";

const HomePage = () => (
    <div className="home-page">
        <Discount/>
        <CardContainerBestsellers/>
        <ShopByLanguage/> 
    </div>
)

export default HomePage;