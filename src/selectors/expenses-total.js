const getExpenseTotal = (expenses) => {
    if (expenses == []){
        return 0;
    }
    else{
        const costArray = expenses.map( (expense) => {
            return expense.amount;
        });
        return costArray.reduce((a,b) => a+b, 0);
    }
}

export default getExpenseTotal; 