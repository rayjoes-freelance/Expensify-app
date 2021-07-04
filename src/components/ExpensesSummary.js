import React from 'react';
import getExpenseTotal from '../selectors/expenses-total';
import numeral from 'numeral';


 export default (props) =>{
    let expensesNumber = props.expenses.length;
    let expensesTotal =numeral(getExpenseTotal(props.expenses)/ 100)
    .format('$0,0.00');
    const expenseWord = expensesNumber <=1 ? 'expense': 'expenses';
    return (
        <div>
        <h4>
        {`Viewing ${expensesNumber} ${expenseWord} totalling of ${expensesTotal}`}
        </h4>
    </div>
    );
};
