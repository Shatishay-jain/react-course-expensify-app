import React from 'react';
import { BrowserRouter , Route , Switch , Link , NavLink} from 'react-router-dom';
const Header=()=>(
    <header>
        <h1>
            Expensify
        </h1>
            <NavLink to='/' activeClassName ='is-active' exact={true}>Go home </NavLink>    
            <NavLink to='/create' activeClassName ='is-active' exact={true}>AddexpensePage </NavLink>
            
            <NavLink to='/help' activeClassName ='is-active' exact={true}>HelpPage 1</NavLink>

    </header>
);
export default Header;