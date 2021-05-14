import ExpenseSummary from '../../components/ExpensesSummary';
import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expensesArray';


test("Should count the good number of expenses", () => {
    const wrapper = shallow(<ExpenseSummary expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});

