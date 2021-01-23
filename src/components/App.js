import React from 'react';
import MainRouter from "../routers/mainRouter";

import { Provider } from "react-redux";

import configureStore from "../store/configureStore";

import './css/main.css';

const store = configureStore();

const jsx = (
    <Provider store={store} >
        <MainRouter />
    </Provider>
)

export default jsx;