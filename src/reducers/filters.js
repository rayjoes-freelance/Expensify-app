import moment from 'moment';


const filtersDefaultState ={
    text: '',
    sortBy : 'date',
    startDate: moment().startOf('month'),
    endDate : moment().endOf('month')
};


export default (state = filtersDefaultState, action)  =>{
    switch (action.type){
        case 'SET_TEXT':
            return {
                ...state,
                text : action.string
            };
        case 'SORT_AMOUNT':
            return {
                ...state,
                sortBy : 'amount'
            };
        case  'SORT_DATE':
            return {
                ...state,
                sortBy : 'date'
            };
        case 'SET_START_DATE':
            return{
                ...state,
                startDate : action.startDate
            };
        case 'SET_END_DATE':
            return{
                ...state,
                endDate : action.endDate
            };
        default:
            return state;
    }
};
