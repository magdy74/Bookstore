import React from "react";
import './shop-by-language.scss';
import { connect } from "react-redux";
import { filterBooksByLanguage } from "../../redux/books-page-filter/books.page.filter";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";

const ShopByLanguage = ({filterByLanguage}) =>{
    const navigate = useNavigate()
return(
    <div className="shop-by-language">
        <div className="container">
            <div className="title">
                <h2>shop by language</h2>
            </div>
            <div className="card-container">
                <Button className="language-card" onClick={()=>{navigate(`/books`);filterByLanguage('english')}}>
                        <h2>English</h2>
                </Button>
                <Button className="language-card" onClick={()=>{navigate(`/books`);filterByLanguage('arabic')}}>
                    <h2>Arabic</h2>
                </Button>
            </div>
        </div>
    </div>
)
}

const mapDispatchToProps = dispatch => ({
    filterByLanguage: (item) => dispatch(filterBooksByLanguage(item)),
})

export default connect(null, mapDispatchToProps)(ShopByLanguage);