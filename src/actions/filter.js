export const setTextFilter = (string) => ({
    type : 'SET_TEXT',
    string
});

export const sortByAmount = () =>({
    type : 'SORT_AMOUNT',
});

export const sortByDate = () => ({
    type : 'SORT_DATE'
});

export const setStartDate = (startDate) => ({
    type : 'SET_START_DATE',
    startDate
})
export const setEndDate = (endDate) => ({
    type : 'SET_END_DATE',
    endDate
})
