import React from 'react'
import ExpenseList from './ExpenseList';
import ExpenseListFilters from "./ExpenseListFilters";

function ExpenseDashboardPage() {
    return (
        <div>
            This is from my dashboard Component
            <ExpenseListFilters />
            <ExpenseList />
        </div>
    );
}

export default ExpenseDashboardPage;