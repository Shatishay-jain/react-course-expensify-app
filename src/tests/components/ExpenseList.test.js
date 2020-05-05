import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseList} from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

test('should render expenseList from expense',()=>{
    const wrapper=shallow(<ExpenseList expense={expenses} />);
    expect(wrapper).toMatchSnapshot();
});
test('should render nothing for empty expense',()=>{
    const wrapper=shallow(<ExpenseList expense={[]} />);
    expect(wrapper).toMatchSnapshot();
});