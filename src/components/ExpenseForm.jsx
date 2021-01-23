import React, { Component } from 'react';
import moment from 'moment';

import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'

// const dateNow = moment();

// console.log(dateNow.format("Do MMM, YYYY"));

class ExpenseForm extends Component {

    constructor(props){
        super(props);

        this.state = { 
            description: props.expense ? props.expense.description : "",
            note: props.expense ? props.expense.note : "",
            expense: props.expense ? (props.expense.amount / 100).toString() : "",
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused: false,
            error: ""
        }
    }

    


    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState({description});
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState({note});
    }

    onExpenseChange = (e) => {
        const expense = e.target.value;
        if(!expense || expense.match(/^\d{1,}(\.\d{0,2})?$/))
        this.setState({expense});
    }

    onDateChange = (createdAt) => {
        if(createdAt)
        this.setState({createdAt})
    }

    onFocusChange = ({ focused }) => {
        console.log(focused)
        this.setState({ calenderFocused: focused});
    }

    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.description || !this.state.expense){
            
            this.setState({error: "Please enter a value for amount and description"});
       
        } else {

            this.setState({error: ""});
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.expense, 10) * 100,
                note: this.state.note,
                createdAt: this.state.createdAt.valueOf(),
            });
        }
    }

    render() { 
        return ( 
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit} >
                    <input
                        type="text"
                        value={this.state.description}
                        autoFocus
                        placeholder="Description"
                        onChange={this.onDescriptionChange}
                    />
                    <br />
                    <br />
                    <input 
                        type="text"
                        placeholder="Expense (Amount)"
                        value={this.state.expense}
                        onChange={this.onExpenseChange}
                    />
                    <br />
                    <br />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={(day) => {
                            return false;
                        }}
                    />
                    <br />
                    <br />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        onChange={this.onNoteChange}
                        value={this.state.note}
                    ></textarea>
                    <br />
                    <br />
                    <button>{this.props.expense ? "Edit Expense" : "Add Expense" }</button>
                    
                </form>
            </div>
         );
    }
}
 
export default ExpenseForm;