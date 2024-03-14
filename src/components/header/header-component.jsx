import React, { useState } from "react";
import './header-component.scss';
import logo from './Logo.svg';
import PersonalLogo from "./menu-personal-logo/personal/personal";
import FavoriteLogo from "./menu-personal-logo/favorite/favorite";
import CartLogo from "./menu-personal-logo/cart/cart";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HeaderDropDown from "../header-dropdown/header-dropdown.component";
import { Link } from "react-router-dom";

const Header = () => {
    const [menuBar, SetMenuBar] = useState(false);
    return(
    <div className="header">
        <div className="container">
            <div className="logo">
                <Link className="link" to={'/'}>
                    <img src={logo} alt="logo" />  
                </Link>  
                <div className="title">
                    <Link className="link" to={'/'}>
                        <h2>bookshelf</h2>
                    </Link>    
                    <span>online book store</span>
                </div>
            </div>
            <div className="menu">
                <Link className="link" to={'/'}>home</Link>
                <Link className="link" to={"/books"}>books</Link>
                <Link className="link" to={"/contactus"}>contact us</Link>
                <Link className="link" to={"/faq"}>faq</Link>
            </div>
            <div className="menu-personal">
                <Link className="menu-personal-favorite-logo" to={'/favorite'}>
                    <FavoriteLogo/>  
                </Link>
                <Link className="menu-personal-cart" to={'/cart'}>
                    <CartLogo/>
                </Link>
                <Link className="menu-personal-personal-logo" to={'/signup'}>
                    <PersonalLogo/>
                </Link>
            </div>
            <div className="menu-bar">
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={()=>SetMenuBar(!menuBar)}   
                >
                    <MenuIcon/>
                </IconButton>
            </div>
        </div>
        {menuBar ? <HeaderDropDown SetMenuBar={SetMenuBar}/> : null}
    </div>
    )
}

export default Header;