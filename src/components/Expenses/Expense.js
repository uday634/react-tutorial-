import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import Card from '../UI/Card';

const Expenses = (props) => {
  const [filteredArray, setFilteredArray] = useState(props.expenses);

  function yearFilterHandler(year) {
    let filteredExpenses
    if(year != 'none'){
      filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear() === +year;
      });
    }else{
      filteredExpenses = props.expenses
    }

    setFilteredArray(filteredExpenses);
  }

  return (
    <div>
      <Card>
        <ExpensesFilter yearFilter={yearFilterHandler} />
        {filteredArray && filteredArray.length > 0 ? (
          filteredArray.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              location={expense.location}
              date={expense.date}
            />
          ))
        ) : (
          <p>No expenses found for the selected year.</p>
        )}
      </Card>
    </div>
  );
};

export default Expenses;
