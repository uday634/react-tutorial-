import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails'
import Card from '../UI/Card'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
  // function clickHandeler() {}

  const [amount, setTitle] = useState(props.amount); //userState is the React hook ( it return an array)

  // const clickHandler = () => {
  //   setTitle('100'); //useState does not update value right away but it will scedule it. 
  //   console.log(amount);
  // };


  return (
    <Card className="expense-item">
      <ExpenseDate date = {props.date}></ExpenseDate>
      <ExpenseDetails title = {props.title} location = {props.location} amount = {amount}></ExpenseDetails>
      {/* <button onClick={clickHandler}>Change Title</button> */}
       
    </Card>
  );
}

export default ExpenseItem;
