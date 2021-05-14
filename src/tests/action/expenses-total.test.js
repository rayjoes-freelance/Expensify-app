import getExpenseTotal from '../../selectors/expenses-total';
import expensesArray from '../fixtures/expensesArray';



test('Should return 0 if no expenses', () => {
    const action = getExpenseTotal([]);
    expect(action).toEqual(0);
});

test('Should add up a single expense', () => {
    const action =getExpenseTotal([expensesArray[0]]);
    expect(action).toEqual(196);
});

test('Shoukd add up multipe expenses', () => {
    const action = getExpenseTotal(expensesArray);
    expect(action).toEqual(114196);
});