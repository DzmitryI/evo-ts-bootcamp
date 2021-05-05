import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from 'redux';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {rootReducer} from "./store/reducers/rootReducer";
import {types} from "./store/actions/actionsTypes";
import './index.css';

interface PizzaAction {
	payload: any
	type: types
}

const middlewares = [thunk]
const store = createStore(
	rootReducer,
	compose(applyMiddleware<ThunkDispatch<any, {}, PizzaAction>>(...middlewares))
);

export function logger(payload: any): ThunkAction<Promise<void>, any, {}, PizzaAction> {
	return function (dispatch, getState) {
		return new Promise((res, _) => {
			fetch('http://localhost:3001/log', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					eventName: payload.type,
					pizzaName: payload.payload.name,
					pizzaPrice: payload.payload.cost
				})
			}).then((json) => {
				console.log(json);
			}).catch((ex) => {
				console.log(ex)
			});
			dispatch({
				type: payload.type,
				payload: payload.payload
			})
			res()
		})
	}
}
ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
		 	<App/>
		</React.StrictMode>
	</Provider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
