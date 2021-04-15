import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {sortByDate} from './actions/filter';
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import './styles/style.scss';



const store = configureStore();

store.dispatch(addExpense({description: 'Water bill', amount: 500, createAt: 1000 }));
store.dispatch(addExpense({description: 'Gas bill', amount: 4500, createAt: 0}));
store.dispatch(sortByDate());
store.dispatch(addExpense({description: 'Rent', amount: 1500, createAt: 10500}));

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

