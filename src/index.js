import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducers from './reducers';
import {createStore} from 'redux';

const store = createstore(reducers);

console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('root'));