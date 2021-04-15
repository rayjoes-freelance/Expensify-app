import React from 'react';
import {shallow} from 'enzyme';
import ExpenseDashboard from '../../components/ExpenseDashboard';

test('should render not found component',()=>{
    const wrapper= shallow(<ExpenseDashboard/>);
    expect(wrapper).toMatchSnapshot();
});