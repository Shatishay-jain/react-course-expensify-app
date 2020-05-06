import React from 'react';
import {shallow} from 'enzyme';
import {ExpressSummary} from '../../components/ExpensesSummary';

test('should correctly render expreesSummary with 1 expense',()=>{
    const action=shallow(<ExpressSummary expenseCount={1} expensesTotal={235}/>);
    expect(action).toMatchSnapshot();
});
test('should correctly render expreesSummary with multipleexpense',()=>{
    const action=shallow(<ExpressSummary expenseCount={23} expensesTotal={2356546854}/>);
    expect(action).toMatchSnapshot();
});