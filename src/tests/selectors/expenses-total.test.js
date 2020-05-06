import SelectExpenses from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';
test('should return 0 if no response',()=>{
    const action =SelectExpenses([]);
    expect(action).toBe(0);
});

test('should return the sum correctly for single instance',()=>{
    const res= SelectExpenses([expenses[0]]);
    expect(res).toBe(195);

});
test('should return the sum correctly for multiplr instance',()=>{
    const res= SelectExpenses(expenses);
    expect(res).toBe(3195);
    
});