



store.subscribe(() =>{
    const state = store.getState();
    const visibleExpenses = getVisileExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne =store.dispatch(addExpense({description : 'Rent', amount: 100, createAt: 1000}));
const expenseTwo = store.dispatch(addExpense({description : 'Electricity', amount: 500, createdAt: -1000}));
//store.dispatch(addExpense({description : 'Internet', amount: 20}));

store.dispatch(sortByAmount());