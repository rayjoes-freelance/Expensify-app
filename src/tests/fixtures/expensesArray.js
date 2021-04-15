import moment from 'moment';

const expenses = [{
    id: '1',
    description: "Gum",
    note: '',
    amount :196,
    createAt: -100000
}, { 
    id: '2',
    description: "Rent",
    note: '',
    amount :109500,
    createAt: moment(0).subtract(4, 'days').valueOf(),
}, {
    id: '3',
    description: "credit-card",
    note: '',
    amount :4500,
    createAt: moment(0).add(4, 'day').valueOf(),
}];

export default expenses;
