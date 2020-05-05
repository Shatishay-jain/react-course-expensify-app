import { editExpense, removeExpense , addExpense} from '../../actions/expenses';

test('should setup remove expense id',()=>{
    const action=removeExpense({id:'123abc'});
    expect(action).toEqual(
        {
            type: 'REMOVE_EXPENSE',
            id:'123abc'
        }
    );
});
test('should setup editexpense ',()=>{
    const action=editExpense('123abc' , {note:'there are someting'});
    expect(action).toEqual({
            type:'EDIT_EXPENSE',
            id:'123abc',
            updates:{
                note:'there are someting'
            }
    });
});
test('should setup addexpense file',()=>{
    const expenseData={
        description:'rent',
        amount:9500,
        createdAt:1000,
        note:'someting'
    };
    const action=addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id:expect.any(String)
        }
    });
});
test('shouls setups exopenses for defaults',()=>{
    const expenseData={
        description:'',
            note:'',
            amount:0,
            createdAt:0
    };
    const action=addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id: expect.any(String),
            
        }
    });
});