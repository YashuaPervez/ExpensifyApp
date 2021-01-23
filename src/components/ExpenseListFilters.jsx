import React, { Component } from 'react'
import { connect } from 'react-redux';

import { setTextFilter, sortByExpense, sortByDate, setStartDate, setEndDate } from '../actions/filters';

import { DateRangePicker } from 'react-dates';

class ExpenseListFilters extends Component {
    state = { 
        calenderFocused: null,
     }
    
    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
     }

    onFocusChange = (calenderFocused) => {
        this.setState({calenderFocused});
    }

    render() { 
        console.log(this.props.filters);
        return (
            <div>
                <input
                    type="text"
                    value={this.props.filters.text}
                    onChange={(e) => {
                        this.props.dispatch(setTextFilter(e.target.value));
                    }}
                />
                <select 
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        const v = e.target.value;
                        if(v === "date"){
                            this.props.dispatch(sortByDate());
                        }else if(v === "expense"){
                            this.props.dispatch(sortByExpense());
                        }
                        
                    }}
                >
                    <option value="date">Date</option>
                    <option value="expense">Expense</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calenderFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
                
            </div>
        );
    }
}

const mapStateTothis = (state) => {

    return {
        filters: state.filters,
    };
};

export default connect(mapStateTothis)(ExpenseListFilters);