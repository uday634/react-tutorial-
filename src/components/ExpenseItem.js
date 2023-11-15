import './ExpenseItem.css'

function ExpenseItem() {
    const expnseDate  = new Date(2021, 2, 28);
    const expenseTitle = 'Car Insurance';
    const localtioOfExpenditure  = 'asr Car Services'
    const expenseAmount = 259.33;


  return (
    <div className="expnse-item">
      <h2>Expense item!</h2>
      <ul>
        <li className="item">{expnseDate.toISOString} {expenseTitle} {localtioOfExpenditure} {expenseAmount} </li>
        <li className="item">Petrol Rs 100</li>
        <li className="item">Movies Rs 200</li> 
      </ul>
    </div>
  );
}

export default ExpenseItem;
