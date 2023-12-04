import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const form = document.getElementsByClassName("add-expense__form");
  const expenseVisibulBtn = document.getElementsByClassName("expenseVisibulBtn");

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredLocation, setEnteredLocation] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle:'',
  //   enteredAmount:'',
  //   enteredDate: ''
  // })

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    // setUserInput((prevState)=>{
    //   return { ...prevState, enteredTitle: event.target.value};
    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput, enteredAmount: event.target.value,
    // });
  };
  const locationChangeHandler = (event) => {
    setEnteredLocation(event.target.value);
    // setUserInput({
    //   ...userInput, enteredAmount: event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput, enteredDate: event.target.value,
    // });
  };
  const SubmitHandler = (event) => {
    event.preventDefault();
    let expenseData = {
      title: enteredTitle,
      location: enteredLocation,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredLocation("");
    setEnteredDate("");
    CancelHandler();
  };

  const CancelHandler = () => {
    form[0].hidden = 'true';
    expenseVisibulBtn[0].hidden = !expenseVisibulBtn[0].hidden
  };

  const formVisibleHandler = () => {
    form[0].hidden = !form[0].hidden;
    expenseVisibulBtn[0].setAttribute("hidden", "true");
  };

  return (
    <div>
      <button onClick={formVisibleHandler} className="expenseVisibulBtn">
        Add new Expense
      </button>
      <form onSubmit={SubmitHandler} className="add-expense__form" hidden>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Expense title</label>
            <input
              type="text"
              value={enteredTitle}
              className="Expense"
              onChange={titleChangeHandler}
            />
          </div>

          <div className="new-expense__control">
            <label>Expense Amount</label>
            <input
              type="number"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>

          <div className="new-expense__control">
            <label>Expense Location</label>
            <input
              type="text"
              value={enteredLocation}
              onChange={locationChangeHandler}
            />
          </div>

          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-10"
              max="2024-01-10"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
          <div className="new-expense__actions">
            <button type="submit" className="btn" onClick={CancelHandler}>
              Cancel
            </button>
            <button type="submit" className="btn" onClick={SubmitHandler}>
              Add Expense
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
