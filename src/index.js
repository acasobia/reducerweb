import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers'
import {createStore} from 'redux';
import *as actions from './actions';

const store=createStore(reducers);

console.log(store.getState());

store.subscribe(()=>console.log(store.getState()));

store.dispatch(actions.increment()); //버튼 누르지 않고 디버깅 할 수 있다
store.dispatch(actions.increment());
store.dispatch(actions.decrement());
store.dispatch(actions.setColor([200,200,200]));


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
