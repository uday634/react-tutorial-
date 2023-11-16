import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import Cart from './components/Card'

function App() {
  const expenses = [
    {
      title: "Car Insurance",
      location: "ASR Car Service",
      amount: 333.4,
      date: new Date(2021, 2, 28),
    },
    {
      title: "Groceries",
      location: "Local Supermarket",
      amount: 50.0,
      date: new Date(2021, 3, 15),
    },
    {
      title: "Movie Night",
      location: "City Cinema",
      amount: 25.0,
      date: new Date(2021, 4, 5),
    },
    {
      title: "Dinner Out",
      location: "Restaurant XYZ",
      amount: 80.0,
      date: new Date(2021, 4, 20),
    },
  ];

  const expenseItems = [];

  for (let i = 0; i < expenses.length; i++) {
    expenseItems.push(
      <ExpenseItem
        key={i}
        title={expenses[i].title}
        amount={expenses[i].amount}
        location={expenses[i].location}
        date={expenses[i].date}
      />
    );
  }
  return (
    <Cart className="App">
      <div className="Cart">
        <h1>Expense Tracking!</h1>
        {expenseItems}
      </div>
    </Cart>
  );
}

export default App;
