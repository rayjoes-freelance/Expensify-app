import React from 'react';
import {DateRangePicker} from 'react-dates';
import {connect} from 'react-redux';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filter';

class ExpenseListFilters extends React.Component{
    state ={
        calendarFocused: null
    }
    onDatesChange =({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }
    onFocusChange =(calendarFocused) => {
        this.setState(() => ({calendarFocused}))
    }
    render(){
        return (
            <div>
                <input type="texte" defaultValue={this.props.filters.text} onChange={(e) =>{
                    this.props.dispatch(setTextFilter(e.target.value));
                }}/>
                <select defaultValue={this.props.filters.sortBy} 
                id="sortBy"
                onChange={(e) =>{
                    if(e.target.value == 'date'){
                        this.props.dispatch(sortByDate());
                    }
                    else {
                        this.props.dispatch(sortByAmount());
                    }
                }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                startDate={this.props.filters.startDate}
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                showClearDates={true}
                numberOfMonths={1}
                isOutsideRange={() => false}
                />
            </div>
        );
    }
};


const mapStateToProps = (state) => {
    return {
        filters : state.filters,
    };
}

export default connect(mapStateToProps)(ExpenseListFilters);