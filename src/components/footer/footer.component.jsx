import React from "react";
import './footer.style.scss';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from "react-router-dom";

const Footer = () => (
    <div className="footer">
        <div className="container">
            <div className="title-and-logo">
                <div className="title">
                    <h2>Bookoe</h2>
                </div>
                <div className="logo">
                    <ul>
                        <li><FacebookIcon color="primary" /></li>
                        <li><WhatsAppIcon color="success" /></li>
                    </ul>
                </div>
            </div>
            <div className="my-account">
                <ul>
                    <li><Link to={'/'} className="link">home</Link></li>
                    <li><Link to={'/signup'} className="link">your account</Link></li>
                    <li><Link to={'/'} className="link">your orders</Link></li>
                    <li><Link to={'/'} className="link">favorite list</Link></li>
                </ul>
            </div>
            <div className="about-us">
                <ul>
                    <li><Link to={'/'} className="link">about us</Link></li>
                    <li><Link to={'/'} className="link">contact us</Link></li>
                    <li><Link to={'/'} className="link">faq</Link></li>
                    <li><Link to={'/'} className="link">your orders</Link></li>    
                </ul>      
            </div>
        </div>
        <div className="made-by">
            <hr/>
            <h4>made by magdy reffat</h4>
        </div>
    </div>
)

export default Footer;

