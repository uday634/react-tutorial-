import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails'
import Card from '../UI/Card'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log('Clicked!!!!');
  };


  return (
    <Card className="expense-item">
      <ExpenseDate date = {props.date}></ExpenseDate>
      <ExpenseDetails title = {props.title} location = {props.location} amount = {props.amount}></ExpenseDetails>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
