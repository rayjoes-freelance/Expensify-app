import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';
import selectExpense from '../selectors/expenses';
import {connect} from 'react-redux';

const ExpenseDashboardPage = (props) => {
    return (
        <div>
            <ExpensesSummary expenses={props.expenses}/>
            <ExpenseListFilters/>
            <ExpenseList/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        expenses : selectExpense(state.expenses, state.filters),

    };
};


export default connect(mapStateToProps)(ExpenseDashboardPage);