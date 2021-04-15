import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expensesArray';



test('should set default state', () => {
    const state = expensesReducer(undefined, {type : '@POINT'});
    expect(state).toEqual([]);
})

test('should remove expense by id', () => {
    const action = {type : 'REMOVE_EXPENSE',
    id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0],expenses[2]]);
})

test('should remove no expenses by id', () => {
    const action = {type : 'REMOVE_EXPENSE',
    id : undefined
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})

//should add expense
test('should add expense', ()=>{
    const action ={type : 'ADD_EXPENSE',
    expense: {
        id: '4',
        description: "Gum",
        note: '',
        amount :196,
        createAt: -100000
    }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(state, ...action.expense)
})

//should edit expense
test('Should edit expense', () =>{
    const action = {
        type : 'EDIT_EXPENSE',
        id : 1,
        updates : {
            description: "Laser",
            note: '',
            amount :196,
            createAt: -100000
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].description).toBe('Laser')
})

//should not edit expense 
/*
test('Should not edit expense', () =>{
    const action = {
        type: 'EDIT_EXPENSE',
        
    };
    const state = expensesReducer(expenses, action);
    expect(state).toBe(expenses);

})
*/