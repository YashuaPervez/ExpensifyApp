import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import ExpenseAddPage from '../components/ExpenseAddPage';
import ExpenseEditPage from '../components/ExpenseEditPage';
import ExpenseHelpPage from '../components/ExpenseHelpPage';
import ExpenseNotFoundPage from '../components/ExpenseNotFoundPage';

import Header from '../components/Header';

const mainRouter = () => (
        <Router>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact />
                <Route path="/create" component={ExpenseAddPage} />
                <Route path="/edit/:id" component={ExpenseEditPage} />
                <Route path="/help" component={ExpenseHelpPage} />
                <Route component={ExpenseNotFoundPage} ></Route>
            </Switch>
        </Router>
);

export default mainRouter;