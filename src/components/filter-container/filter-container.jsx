import React from "react";
import './filter-container.scss';
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

const FilterContainer = () => (
    <div className="filter-container">
        <div className="title">
            <h2>filter</h2>
        </div>
        <div className="language">
            <h3>Languages</h3>
            <FormGroup className="form">
                <FormControlLabel control={<Checkbox defaultChecked />} label="English" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="Arabic" />
            </FormGroup>
        </div>
    </div>
);

export default FilterContainer;

