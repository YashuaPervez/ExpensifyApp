import React from 'react'

import { Link } from "react-router-dom";

function ExpenseListItem(props) {
    return (
        <div>
            <h3><Link to={"/edit/" + props.id} >Expense: {props.description}</Link></h3>
            <p>costs <strong>{props.amount}</strong>, created at <i>{props.createdAt}</i></p>
            <p>{props.note}</p>
            
        </div>
    )
}

export default ExpenseListItem;
