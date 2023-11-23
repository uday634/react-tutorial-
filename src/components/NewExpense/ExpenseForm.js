import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

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
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput, enteredDate: event.target.value,
    // });
  };
  const SubmitHandler = (event) =>{
    event.preventDefault();
    let expenseData = {
      title: enteredTitle,
      amount:enteredAmount,
      date:new Date(enteredDate)
    };
    console.log(expenseData)
  }



  return (
    <form onSubmit={SubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense title</label>
          <input type="text" className="Expense" onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Expense Amount</label>
          <input type="number" onChange={amountChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-10"
            max="2024-01-10"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit" className="btn" onClick={SubmitHandler}>Add</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
