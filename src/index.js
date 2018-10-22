import React from 'react';
import ReactDOM from 'react-dom';

// import  '../node_modules/bootstrap/scss/bootstrap/bootstrap.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './services/redux/storeReducers';

const store = createStore(reducer);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
