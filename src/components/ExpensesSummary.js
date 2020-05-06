import React from 'react';
import {connect} from 'react-redux';

import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpressSummary=({expenseCount,expensesTotal})=>{
    const ExpenseWord = expenseCount===1?'expense':'expenses';
    const formattedExpenseTotal=expensesTotal/100;
    return(
        <div>
            <h1>
             viewing {expenseCount} {ExpenseWord} totalling Rs-{formattedExpenseTotal}   
            </h1>
        </div>
    );

};
const mapStateToProps=(state)=>{
    const visibleExpenses =selectExpenses(state.expense,state.filters);
    return{
        expenseCount:visibleExpenses.length,
        expensesTotal:selectExpensesTotal(visibleExpenses)
    };


};
export default connect(mapStateToProps)(ExpressSummary);