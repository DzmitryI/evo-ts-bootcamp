import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, compose } from 'redux';
import {balance} from '../src/redux/reducers/balanceReducer'
import {types} from '../src/redux/actions/actionsTypes'


declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(balance, undefined, composeEnhancers());

store.dispatch({ type: types.UPDATE_BALANCE, payload: 1000.0 });
store.dispatch({ type: types.CREDIT, payload: 200.0 });
store.dispatch({ type: types.DEBIT, payload: 50.0 });
store.dispatch({ type: types.SET_BALANCE_WITH_TAX, payload: 14.0 });
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
