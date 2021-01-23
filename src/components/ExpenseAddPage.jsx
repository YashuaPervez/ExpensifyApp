import React from 'react'
import ExpenseForm from './ExpenseForm';

import { addExpense } from "../actions/expenses";
import { connect } from "react-redux";


function ExpenseAddPage(props) {
    return (
        <div>
            You can create from here
            <ExpenseForm
                onSubmit={(expense) => {
                    console.log(expense);
                    props.dispatch(addExpense(expense));
                    props.history.push('/');
                }}
            />
        </div>
    );
}



export default connect()(ExpenseAddPage);