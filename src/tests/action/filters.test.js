import moment from 'moment';
import {setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate} from '../../actions/filter';

test('Should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type : 'SET_START_DATE',
        startDate:  moment(0)
    })
})

test('should generate set end date', () =>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate : moment(0)
    })
})

test('should generate a text filter action object', () =>{
    const action = setTextFilter('Zlatan');
    expect(action).toEqual({
        type: 'SET_TEXT',
        string : 'Zlatan'
    })
})

test('should generate a text filter action object', () =>{
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT',
        string: undefined
    })
})

test('should sort by amount action object', () =>{
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_AMOUNT',
    })
})

test('should sort by date action object', () =>{
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_DATE',
    })
})