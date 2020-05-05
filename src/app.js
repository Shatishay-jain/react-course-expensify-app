import React from 'react';
import ReactDOM from'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configStore' ;
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';

import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'



const store = configureStore();
store.dispatch(addExpense({description : 'water bill',amount: 4500,createdAt:2000}));
store.dispatch(addExpense({description : 'gas bill' ,createdAt:3000}));
store.dispatch(addExpense({description : 'Rent',amount: 14500}));

const state = store.getState();
const visibleExpense = getVisibleExpenses(state.expense,state.filters);
console.log(visibleExpense);

const jsx=(
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));
/*
const Layout=(props)=>{
    return(
        <div>
            <p>Header</p>
            {props.children}
        </div>
    );
}
const template = (
    <div>
        <p>this is my page</p>
        <h1>yes</h1>
    </div>
);



/*const User=function(props){
    return(
        <p>Name:{props.name}</p>
    );
}*/
/*class OldSyntax{
    constructor()
    {
        this.name = 'sasss';
        this.getGretting=this.getGretting.bind(this);
        
    }
    getGretting(){
        return `hi,my name is ${this.name}`;
    }
    
}
const old = new OldSyntax();
const xxx = old.getGretting; 
console.log(xxx());
class NewSyntrax{
    name= 'aa';
    GET=()=>{
        return `hi i m ${this.name}`;
    }
}
const new1=new NewSyntrax();
const cc=new1.GET;

console.log(cc());
//we can use class bases and stateless function together but statless fuction is used only where there is no states




//import './utils.js';
/*import { y, add }  from './utils.js';
console.log('appg.js is running');
console.log(y(3));
console.log(add(2,3));
import x , { isAdult , canDrink } from './person.js';
console.log(isAdult(12));
console.log(canDrink(29));
console.log(x(70));
import validator from 'validator';
console.log(validator.isEmail('a@yahoo.com'));*/