// Expenses.js
import React from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import "./Expense.css";

const Expenses = (props) => {
  const yearFilterHandler = (year) => {
    props.filteredYear(year);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === props.filterYearInput;
  });

  return (
    <div>
      <Card>
        <ExpensesFilter yearFilter={yearFilterHandler} />
        {filteredExpenses.length > 1 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              location={expense.location}
              date={expense.date}
            />
          ))}
        {filteredExpenses.length === 1 && (
          <>
            <ExpenseItem
              key={filteredExpenses[0].id}
              title={filteredExpenses[0].title}
              amount={filteredExpenses[0].amount}
              location={filteredExpenses[0].location}
              date={filteredExpenses[0].date}
            />
            <p>Only single Expense here. Please add more...</p>
          </>
        )}
        {filteredExpenses.length === 0 && (
          <p>No expenses found for the selected year.</p>
        )}
      </Card>
    </div>
  );
};

export default Expenses;
