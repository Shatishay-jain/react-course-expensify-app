import moment from 'moment';
import { setStartDate, setEndDate , sortByDate , sortByAmount , setTextFilter  } from '../../actions/filters';

test('should generate start date test object',()=>{
    const action=setStartDate(moment(0));

    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate:moment(0)

    });
});
test('should generate end date test object',()=>{
    const action=setEndDate(moment(0));

    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate:moment(0)
    });
});
test('should generate sortby date test object',()=>{
    const action=sortByDate();
    expect(action).toEqual({
        type:'SORT_BY_DATE'

    })
});
test('should generate sortby amount test object',()=>{
    const action=sortByAmount();
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
        
    })
});
test('should generate text filters test object',()=>{
    const text='someting'
    const action=setTextFilter(text);
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text
    });
});
test('should generate text filters for default test object',()=>{
    const action=setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text :''
    });
});