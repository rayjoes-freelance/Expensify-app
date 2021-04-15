import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseList} from '../../components/ExpenseList';
import expenses from '../fixtures/expensesArray';

test('should render an expense list with expenses', () =>{
    const wrapper = shallow(<ExpenseList expenses= {expenses}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Should render expense list with an empty message', () => {
    const wrapper = shallow(<ExpenseList />);
    expect(wrapper).toMatchSnapshot();
});
