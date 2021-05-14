import {addExpense, editExpense, removeExpense } from '../../actions/expenses';


test('Should setup remove expense action object', () => {
    const action =removeExpense('axdcf');
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id:'axdcf'
    })
})

test('Should setup remove expense action object', () => {
    const editer =editExpense('12345aze', {note : "new notes"})
    expect(editer).toEqual({
        type: 'EDIT_EXPENSE',
        id : '12345aze',
        updates : {note : "new notes"}
    })
})

test('Should setup add expense action object', () =>{
    const addOne= {
        description: "Rent",
        amount: "109500",
        createAt: 1000,
        note: 'Monthly rent'
    };
    const action = addExpense(addOne);
    expect(action).toEqual({
        type : 'ADD_EXPENSE',
        expense: {
            ...addOne,
            id: expect.any(String)
        }
    })
})

test('Should return addExpense default', () =>{
    const action = addExpense();
    expect(action).toEqual({
    expense :{
    description : '',
     note :'', 
     amount:0, 
     createAt:0,
     id: expect.any(String)},
     type: 'ADD_EXPENSE'
    })
})