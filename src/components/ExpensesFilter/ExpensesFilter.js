import { useState } from "react";
import React from "react";
import './ExpensesFilter.css'
const ExpesnesFilter = (props) => {
    const [selectedYear, setSelectedYear] = useState('');
    function yearHandler(e) {
        const seleteYearValue = e.target.value;
        setSelectedYear(seleteYearValue);
        props.yearFilter(seleteYearValue)
    }
    

    return (
        <div className="filter-container">
            <p className="filter-text">Select the year to be filtered</p>
            <select  className="filter-select" onChange = {yearHandler} value={selectedYear}>
               
                <option></option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
            </select>
        </div>
    )
};

export default ExpesnesFilter