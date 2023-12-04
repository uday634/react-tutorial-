// Expenses.js
import React from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExepnsesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


import "./Expense.css";



let filteredExpenses 

const Expenses = (props) => {

  
  const yearFilterHandler = (year) => {
    props.filteredYear(year);
  };

  if(props.filterYearInput === ''){
    filteredExpenses = props.expenses
  }else{
    filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === props.filterYearInput;
  });
  }
  

  return (
    <div>
      <Card>
        <ExpensesFilter yearFilter={yearFilterHandler} />
        <ExpensesChart expenses= {filteredExpenses}></ExpensesChart>
        <ExepnsesList filteredExpenses={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
