import React from 'react';
import MainRouter from "../routers/mainRouter";

import { Provider } from "react-redux";

import configureStore from "../store/configureStore";
import { addExpense } from "../actions/expenses";

import './css/main.css';

const store = configureStore();

store.dispatch(addExpense({description: "Water", amount: 500, note: "Water expenses for next week", createdAt: 5000}));
store.dispatch(addExpense({description: "Gas bill", amount: 700, note: "Gas expenses for next week", createdAt: -5000}));
store.dispatch(addExpense({description: "Rent", amount: 1200, note: "Last rent for my roon", createdAt: 2000}));
store.dispatch(addExpense({description: "Food", amount: 800, note: "Food I bought from the super market", createdAt: 7000}));

const jsx = (
    <Provider store={store} >
        <MainRouter />
    </Provider>
)

export default jsx;