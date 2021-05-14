import React from 'react';
import getExpenseTotal from '../selectors/expenses-total';
import numeral from 'numeral';


 export default (props) =>{
    console.log(props.expenses);
    let expensesNumber = props.expenses.length;
    let expensesTotal =numeral(getExpenseTotal(props.expenses)/ 100)
    .format('$0,0.00');
    return (
        <div>
        <h4>{`Viewing ${expensesNumber} expenses totalling of ${expensesTotal}`} </h4>
    </div>
    );
};
