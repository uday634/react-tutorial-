import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const titleChangeHandler = (event) => {
    console.log(event.target.value)
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense title</label>
          <input type="text" className="Expense" onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Expense Amount</label>
          <input type="number" onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-10"
            max="2014-01-10"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
