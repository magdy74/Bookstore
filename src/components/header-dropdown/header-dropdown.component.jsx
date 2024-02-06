import React from "react";
import './header-dropdown.scss';
import PersonalLogo from "../header/menu-personal-logo/personal/personal";
import FavoriteLogo from "../header/menu-personal-logo/favorite/favorite"; 
import { Link } from "react-router-dom";

const HeaderDropDown = () => (
    <div className="header-dropdown">
        <div className="contanier">
            <Link className="link" to={"/signup"}>
                <span>account</span>
                <PersonalLogo/> 
            </Link>
            <Link className="link" to={"/"}>
                <span>favorite</span>
                <FavoriteLogo/>
            </Link>
            <Link className="link" to={'/'}>home</Link>
            <Link className="link" to={"/books"}>books</Link>
            <Link className="link" to={"/"}>contact us</Link>
            <Link className="link" to={"/"}>faq</Link>
        </div>
    </div>
)

export default HeaderDropDown;

