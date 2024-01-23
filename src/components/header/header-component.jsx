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
                <img src={logo} alt="logo" />
                <div className="title">
                    <h2>bookoe</h2>
                    <span>online book store</span>
                </div>
            </div>
            <div className="menu">
                <Link className="link" to={'/'}>home</Link>
                <Link className="link" to={"/"}>books</Link>
                <Link className="link" to={"/"}>contact us</Link>
                <Link className="link" to={"/"}>faq</Link>
            </div>
            <div className="menu-personal">
                <FavoriteLogo/>
                <CartLogo/>
                <Link to={'/signup'}>
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
        {menuBar ? <HeaderDropDown/> : null}
    </div>
    )
}

export default Header;