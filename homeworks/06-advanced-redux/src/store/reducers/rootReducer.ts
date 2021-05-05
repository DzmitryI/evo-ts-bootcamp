import {combineReducers} from 'redux'
import {pizzasListReducer} from './pizzaListReducer';
import {pizzaBasketReducer} from './pizzaBasketReducer'

export const rootReducer = combineReducers({
	pizzaList: pizzasListReducer,
	pizzaBasket: pizzaBasketReducer
});

export type RootState = ReturnType<typeof rootReducer>
