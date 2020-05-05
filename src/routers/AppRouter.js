import React from 'react';
import { BrowserRouter , Route , Switch , Link , NavLink} from 'react-router-dom';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import EditExpensePage from'../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import HelpPage from '../components/HelpPage';
import AddexpensePage from '../components/AddexpensePage';
const AppRouter = ( )=>(
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
    
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddexpensePage} exact={true}/>
            <Route path="/edit/:id" component={EditExpensePage} exact={true}/>
            <Route path="/help" component={HelpPage} exact={true}/>
            <Route component={NotFoundPage} />
  
        </Switch>
    </div>
    
    </BrowserRouter>
);
export default AppRouter;