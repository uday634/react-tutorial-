import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
// import ExpenseItem from "./components/Expenses/ExpenseItem";
import React, {useState} from "react";
import Expenses from "./components/Expenses/Expense";
import Card from './components/UI/Card';

const DUMMY_EXPENSES = [
  {
    id:'e1',
    title: "Car Insurance",
    location: "ASR Car Service",
    amount: 333.4,
    date: new Date(2021, 2, 28),
  },
  {
    id:'e2',
    title: "Groceries",
    location: "Local Supermarket",
    amount: 50.0,
    date: new Date(2021, 3, 15),
  },
  {
    id:'e3',
    title: "Movie Night",
    location: "City Cinema",
    amount: 25.0,
    date: new Date(2021, 4, 5),
  },
  {
    id:'e4',
    title: "Dinner Out",
    location: "Restaurant XYZ",
    amount: 80.0,
    date: new Date(2021, 4, 20),
  },
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const Change = () => {
    console.log('props');
  }

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  }

  return (
    <Card className="App">
      <div className="Cart">
        <h1>Expense Tracking!</h1>
        <NewExpense onChange={Change} onAddExpense={addExpenseHandler}></NewExpense>
        <Expenses expenses = {expenses}></Expenses>
      </div>
    </Card>
  );
}

export default App;
