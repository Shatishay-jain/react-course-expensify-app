import expenseReducer from '../../reducers/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';
test('should set default state',()=>{
    const state = expenseReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual([]);
});
test('should remove expense by id',()=>{
    const action ={
        type:'REMOVE_EXPENSE',
        id:expenses[1].id
    };
    const state= expenseReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]]);
});
test('should not remove expense by id if id does not exisit',()=>{
    const action ={
        type:'REMOVE_EXPENSE',
        id:'-2'
    };
    const state= expenseReducer(expenses,action);
    expect(state).toEqual(expenses);
});
test('should add expense by id',()=>{
    const expense={
        id:'4',
        description:'Rent',
        note:'',
        amount:10095,
        createdAt:moment(0).subtract(6,'days').valueOf()
    };
    const action={
        type:'ADD_EXPENSE',
        expense
    }
    const state=expenseReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[1],expenses[2],expense]);
});
test('should edit expense by id',()=>{
    const amount=1222200;
    const action={
        type:'EDIT_EXPENSE',
        id:expenses[1].id,
        updates:{
            amount
        }
        
    };
    const state=expenseReducer(expenses,action);
    expect(state[1].amount).toEqual(amount);
});
test('should not edit expense by id if id doesnt exists',()=>{
    const amount=1222200;
    const action={
        type:'EDIT_EXPENSE',
        id:'-2',
        updates:{
            amount
        }
        
    };
    const state=expenseReducer(expenses,action);
    expect(state).toEqual(expenses);
});