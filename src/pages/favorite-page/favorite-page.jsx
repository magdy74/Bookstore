import React from "react";
import './favorite-page.scss';
import { connect } from "react-redux";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CardFavorite from "../../components/card-favorite/card-favorite";

const FavoritePage = ({favoriteItems}) =>{
    const navigate = useNavigate();
    return(
    <div className="favorite-page">
        <div className="container">
            <div className="favorite-container">
                <div className="title">
                    <h1>favorite books</h1>
                </div>
                {favoriteItems[0] ? 
                <div className="items">
                    {favoriteItems.map((item)=> 
                    <CardFavorite key={item.id} item={item}/>
                    )}
                </div>
                : <div className="favorite-message">
                    <h2>You don't have any items in your favorite list.</h2>
                    <div  className="start-shopping-button">
                        <Button variant="contained" size="large" onClick={()=>navigate('/')}>
                            start shopping
                        </Button>
                    </div>
                    </div>}
            </div>
        </div>
    </div>
    )
};

const mapStateToProps = (state) => ({
    favoriteItems: state.favorite.bookList
    });

export default connect(mapStateToProps)(FavoritePage);