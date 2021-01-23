import React from 'react';
import ExpenseListItem from "./ExpenseListItem";
import getVisibleExpenses from "../selectors/expenses";


import { connect } from "react-redux";

const ExpenseList = (props) => (
    
        <div>
            <h2>Expense List</h2>

            {props.expenses.map(expense => <ExpenseListItem key={expense.id} {...expense} />)}

        </div>
);

export default connect((state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters),
    };
})(ExpenseList);
