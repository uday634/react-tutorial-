import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
  // const expenseItems = [];

  // for (let i = 0; i < props.expenses.length; i++) {
  //   expenseItems.push(
  //     <ExpenseItem
  //       key={i}
  //       title={props.expenses[i].title}
  //       amount={props.expenses[i].amount}
  //       location={props.expenses[i].location}
  //       date={props.expenses[i].date}
  //     />
  //   );
  // }
  return (
    <div>
      <Card>
        {props.expenses.map((expense) => (
          <ExpenseItem
            key = {expense.id}
            title={expense.title}
            amount={expense.amount}
            location={expense.location}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
