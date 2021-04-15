import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should set up default filters value', () => {
    const state = filtersReducer(undefined, {type : '@@INIT'});
    expect(state).toEqual({
        text: "",
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
})

test('should set sortBy to amount', () =>{
    const state = filtersReducer(undefined, {type: 'SORT_AMOUNT'});
    expect(state.sortBy).toBe('amount');
})

test('should set sortBy to date', () => {
    const currentState = {
        text: "",
        startDate: undefined,
        endDate:  undefined,
        sortBy: 'amount'
    };
    const action = {type : 'SORT_DATE'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date')
})

test('should set set up text filter', () => {
    const currentState = {
        text: "",
        startDate: undefined,
        endDate:  undefined,
        sortBy: 'amount'
    };
    const action = {type : 'SET_TEXT', string : 'e'};
    const state = filtersReducer(currentState, action);
    expect(state.text).toBe('e')
})

test('should set startDate filter', () => {
    const currentState = {
        text: "",
        startDate: undefined,
        endDate:  undefined,
        sortBy: 'date'
    };
    const action = {type : 'SET_START_DATE', startDate:`${moment(0)}`};
    const state = filtersReducer(currentState, action);
    expect(state.startDate).toBe(`${moment(0)}`)
})

test('should set endDate filter', () => {
    const currentState = {
        text: "",
        startDate: undefined,
        endDate:  undefined,
        sortBy: 'date'
    };
    const action = {type : 'SET_END_DATE', endDate: `${moment(0)}`};
    const state = filtersReducer(currentState, action);
    expect(state.endDate).toBe(`${moment(0)}`)
})