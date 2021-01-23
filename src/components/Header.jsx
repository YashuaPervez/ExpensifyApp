import React from 'react'
import {NavLink} from 'react-router-dom';

function Header

() {
    return (
        <header>
            <h1>Expensify - Expenses under control</h1>
            <ul>
                <li><NavLink to="/" activeClassName="is-active" exact >Home</NavLink></li>
                <li><NavLink to="/create" activeClassName="is-active" >New +</NavLink></li>
                <li><NavLink to="/help" activeClassName="is-active" >Page</NavLink></li>
            </ul>
        </header>
    );
}

export default Header