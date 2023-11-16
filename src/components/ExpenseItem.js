import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails'
import Card from './Card'
import './ExpenseItem.css'

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date = {props.date}></ExpenseDate>
      <ExpenseDetails title = {props.title} location = {props.location} amount = {props.amount}></ExpenseDetails>
    </Card>
  );
}

export default ExpenseItem;
