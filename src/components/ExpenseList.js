import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpense from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
    <h1>Expense List</h1>
    {
        props.expenses == undefined ? (
            <p> there is currently no expenses</p>
        ) : 
        (
            props.expenses.map((expense) => {
            return <ExpenseListItem {...expense} key={expense.id}/>;
        })
        )
    }   
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses : selectExpense(state.expenses, state.filters),

    };
};


export default connect(mapStateToProps)(ExpenseList);