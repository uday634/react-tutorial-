import { useState } from "react";
import React from "react";
const ExpesnesFilter = (props) => {
    const [selectedYear, setSelectedYear] = useState('');
    function yearHandler(e) {
        const seleteYearValue = e.target.value;
        setSelectedYear(seleteYearValue);
        props.yearFilter(seleteYearValue)
    }
    

    return (
        <div>
            <p>Select the year to be filtered</p>
            <select  onChange = {yearHandler} value={selectedYear}>
                <option>none</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
            </select>
        </div>
    )
};

export default ExpesnesFilter