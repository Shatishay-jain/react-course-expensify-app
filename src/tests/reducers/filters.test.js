import moment from 'moment';
import filterReducer from '../../reducers/filters';
import { unstable_batchedUpdates } from 'react-dom';

test('should setup default values',()=>{
    const state =filterReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual({
        text :'',
        sortBy : 'date',
        startDate : moment().startOf('month'),
        endDate : moment().endOf('month')

    });
});
test('should set sortBY to amount',()=>{
    const state=filterReducer(undefined,{type:'SORT_BY_AMOUNT'});
    expect(state.sortBy).toEqual('amount');
});
test('should sortBy date',()=>{
    const currentState={
        text :'',
    sortBy : 'amount',
    startDate : moment().startOf('month'),
    endDate : moment().endOf('month')
    };
    
    const action= {type:'SORT_BY_DATE'};
    const state=filterReducer(currentState,action);
    expect(state.sortBy).toBe('date');
});
test('should check the textfilter',()=>{
    const text='some values';
    const action= {type:'SET_TEXT_FILTER',text};
    const state=filterReducer(undefined,action);
    expect(state.text).toBe('some values');
});
test('should check the start date',()=>{
    const startDate=moment();
    const action={type:'SET_START_DATE',startDate};
    const state=filterReducer(undefined,action);
    expect(state.startDate).toEqual(startDate);
});
test('should check the end date',()=>{
    const endDate=moment();
    const action={type:'SET_END_DATE',endDate};
    const state=filterReducer(undefined,action);
    expect(state.endDate).toEqual(endDate);
});