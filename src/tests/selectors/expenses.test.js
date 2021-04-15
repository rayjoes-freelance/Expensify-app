import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expensesArray';
import moment from 'moment';

test('Should filter by text value', () => {
    const filters ={
        text: "e",
        sortBy: "date",
        startDate : undefined,
        endDate : undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1]]);
});

test('Should filter by startDate', () => {
    const filters ={
        text:  "",
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result= selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0]]);
})

//test filter by end date
test('Should filter by end date', () => {
    const filters ={
        text: "",
        sortBy: "date",
        startDate: undefined,
        endDate: moment(0).add(2, 'day')
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]]);
})

//test  sort by date 
test('Should filter by date', () => {
    const filters ={
        text: "",
        sortBy: "date",
        startDate: undefined,
        endDate: undefined
    };
    const result =selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
})

//test sort by amount
test('Should filter by amount', () => {
    const filters ={
        text: "",
        sortBy: "amount",
        startDate: undefined,
        endDate: undefined
    };
    const result =selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
})