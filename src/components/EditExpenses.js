import React from 'react';
import {connect} from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

const EditExpensePage = (props) => {
    console.log(props.expense.id);
    return (
        <div>
            <p>Editing the expense with the id of {props.match.params.id}</p>
            <ExpenseForm
            expense={props.expense}
            onSubmit={(expense) => {
                props.dispatch(editExpense(props.expense.id,expense));
                props.history.push('/');
                }
            }
            />
            <button onClick={() => {
                props.dispatch(removeExpense(props.expense.id));
                props.history.push('/');
            }}>
                Remove
            </button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    console.log(state.expenses.find((expense) => expense.id === props.match.params.id));
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
};

export default connect(mapStateToProps)(EditExpensePage);