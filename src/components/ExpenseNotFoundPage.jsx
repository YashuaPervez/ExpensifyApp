import React from 'react'
import {Link} from 'react-router-dom';

function ExpenseNotFoundPage() {
    return (
        <div>
            404 - <Link to="/">Go Home!</Link>
        </div>
    );
}

export default ExpenseNotFoundPage;