import React from "react";
import './header-dropdown.scss';
import PersonalLogo from "../header/menu-personal-logo/personal/personal";
import FavoriteLogo from "../header/menu-personal-logo/favorite/favorite"; 
import { Link } from "react-router-dom";

const HeaderDropDown = ({SetMenuBar}) => (
    <div className="header-dropdown" onClick={()=>SetMenuBar(false)}>
        <div className="contanier">
            <Link className="link" to={"/signup"}>
                <span>account</span>
                <PersonalLogo/> 
            </Link>
            <Link className="link" to={"/favorite"}>
                <span>favorite</span>
                <FavoriteLogo/>
            </Link>
            <Link className="link" to={'/'}>home</Link>
            <Link className="link" to={"/books"}>books</Link>
            <Link className="link" to={"/contactus"}>contact us</Link>
            <Link className="link" to={"/faq"}>faq</Link>
        </div>
    </div>
)

export default HeaderDropDown;

