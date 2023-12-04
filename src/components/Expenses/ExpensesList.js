import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExepnsesList = (props) => {
  let expenseData;
  if (props.filteredExpenses.length > 1) {
    expenseData = props.filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        location={expense.location}
        date={expense.date}
      />
    ));
  } else if (props.filteredExpenses.length === 1) {
    expenseData = (
      <>
        <ExpenseItem
          key={props.filteredExpenses[0].id}
          title={props.filteredExpenses[0].title}
          amount={props.filteredExpenses[0].amount}
          location={props.filteredExpenses[0].location}
          date={props.filteredExpenses[0].date}
        />
        <p>Only single Expense here. Please add more...</p>
      </>
    );
  } else {
    expenseData = <p>No expenses found for the selected year.</p>;
  }

  return <div>{expenseData}</div>;
};

export default ExepnsesList;
