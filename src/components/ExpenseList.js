import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpense from '../selectors/expenses';

export const ExpenseList=(props)=>(
    <div>
       {
           props.expense.length===0?(<p>No expenses</p>):(
            props.expense.map((expenses)=>{
                return <ExpenseListItem key={expenses.id} {...expenses}/>;
            })
           )
       }
        
       
    </div>
);
const mapStateToProps=(state)=>{
    return{
        expense : selectExpense(state.expense,state.filters)
    }
};
export default  connect(mapStateToProps)(ExpenseList);

