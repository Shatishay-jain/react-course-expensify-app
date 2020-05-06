import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
const ExpenseListItem =({description,amount,createdAt,id})=>(
    <div>
        
        <Link to={`./edit/${id}`} >
        <h3>{description}</h3>
        </Link>
        <p>
        Rs-
    {
        ( amount / 100)
    
    
    
    }
        ,
        {moment(createdAt).format('MMMM Do YYYY')}
        </p>
        
        
    </div>
);

export default ExpenseListItem;
