import React from "react";
import './filter-container.scss';
import { RadioGroup, FormControlLabel, FormControl, Radio } from '@mui/material';
import { connect } from "react-redux";
import { filterBooksByLanguage } from "../../redux/books-page-filter/books.page.filter";


const FilterContainer = ({selectedLanguage, filterByLanguage}) => {
    const handleChange = (event) => {
        filterByLanguage(event.target.value);
    };
    return(
    <div className="filter-container">
        <div className="title">
            <h2>filter</h2>
        </div>
        <div className="language">
            <h3>Languages</h3>
            <FormControl className="form" component="fieldset">
                <RadioGroup
                    aria-label="language"
                    name="language"
                    value={selectedLanguage}
                    onChange={handleChange}
                >
                    <FormControlLabel value="english" control={<Radio />} label="English" />
                    <FormControlLabel value="arabic" control={<Radio />} label="Arabic" />
                    <FormControlLabel value="all" control={<Radio />} label="All" />
                </RadioGroup>
                </FormControl>
        </div>
    </div>
)
    }


const mapStateToProps = (state) => ({
    selectedLanguage: state.booksFilter.language
});

const mapDispatchToProps = dispatch => ({
    filterByLanguage: (item) => dispatch(filterBooksByLanguage(item)),
})



export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);

