import { createStore } from 'redux';
import { StaticRouter } from 'react-router-dom';


const incrementCount=({incrementBy =1}={})=>({
    type:'INCREMENT',
    incrementBy : incrementBy
});
const decrementCount =( {decrementBy = 1}={})=>({
    type:'DECREMENT',
    decrementBy :decrementBy

});
const setCount=({count}={})=>({
    type:'SET',
    count:count
});
const RESET1=()=>({
    type:'RESET'
});
const countReducer=(state= {count:0} , action)=>{
    //console.log('a');
    switch(action.type){
        case 'INCREMENT':
            
            return{
                count:state.count+action.incrementBy
            };
        case 'DECREMENT':
            
            return{
                count:state.count-action.decrementBy
            };
        case 'SET':
            return{
                count:action.count
            };
        case 'RESET':
            return {
                count: 200
            };
        default:
            return state;
    }
};
const store=createStore(countReducer);
const unsubscribe=store.subscribe(()=>{
    console.log(store.getState());
});


//unsubscribe();
store.dispatch(incrementCount({incrementBy :5}));
store.dispatch(incrementCount());


store.dispatch(decrementCount({decrementBy :10}));

store.dispatch(decrementCount());
store.dispatch(setCount({count:105}));
store.dispatch(setCount({count:101}));
store.dispatch(RESET1());

