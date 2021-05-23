import {types} from '../actions/actionsTypes'
import {ActionBasket} from "../actions/pizzasTypesAction";

type InitialState = {
	arrBasket: { _id: string, count: number, price: number, name: string }[],
	total: number,
}

const initialState: InitialState = {
	arrBasket: [],
	total: 0
}

export const pizzaBasketReducer = (state = initialState, action: ActionBasket): InitialState => {
	const {type, payload} = action;
	switch (type) {
		case types.PIZZA_ADDED_INTO_BASKET:
			let indexAdd = state.arrBasket.findIndex((good) => good._id === payload._id);
			const [curPizzaAdd] = payload.pizzas.filter(pizza => pizza._id === payload._id)
			const resAdd = [...state.arrBasket]
			if (indexAdd !== -1) {
				resAdd[indexAdd].count += 1
			} else {
				resAdd.push({_id: payload._id, count: 1, name: curPizzaAdd.name, price: curPizzaAdd.price})
			}
			const totalAdd = resAdd.reduce((acc, good) => acc + (good.count * good.price), 0)
			return {
				...state,
				arrBasket: resAdd,
				total: totalAdd
			}
		case types.PIZZA_REMOVED_FROM_BASKET:
			let index = state.arrBasket.findIndex((good) => good._id === payload._id);
			const res = [...state.arrBasket]
			if (index !== -1 && res[index].count > 1) {
				res[index].count -= 1
			} else if (index !== -1 && res[index].count === 1) {
				res.splice(index, 1)
			}
			const total = res.reduce((acc, good) => acc + (good.count * good.price), 0)
			return {
				...state,
				arrBasket: res,
				total
			}
		default:
			return state
	}
}


