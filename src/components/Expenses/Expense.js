import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {

    
      const expenseItems = [];
    
      for (let i = 0; i < props.expenses.length; i++) {
        expenseItems.push(
          <ExpenseItem
            key={i}
            title={props.expenses[i].title}
            amount={props.expenses[i].amount}
            location={props.expenses[i].location}
            date={props.expenses[i].date}
          />
        );
      }
      return expenseItems;
};

export default Expenses;