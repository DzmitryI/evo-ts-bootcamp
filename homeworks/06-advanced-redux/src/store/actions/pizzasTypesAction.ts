import {types} from './actionsTypes'

export type PayloadView = { name: string, price: number, _id: string }[]
export type PayloadChange = { _id: string, pizzas: PayloadView }

interface PizzasViewed {
	readonly type: types.PIZZA_VIEWED
	readonly payload: PayloadView
}

function pizzasViewed(payload: PayloadView) {
	return {
		type: types.PIZZA_VIEWED,
		payload
	}
}

interface PizzasAdded {
	readonly type: types.PIZZA_ADDED_INTO_BASKET
	readonly payload: PayloadChange
}

function pizzasAdded(payload: string) {
	return {
		type: types.PIZZA_ADDED_INTO_BASKET,
		payload
	}
}

interface PizzasDelete {
	readonly type: types.PIZZA_REMOVED_FROM_BASKET
	readonly payload: PayloadChange
}

function pizzasDelete(payload: string) {
	return {
		type: types.PIZZA_REMOVED_FROM_BASKET,
		payload
	}
}

export type ActionList = PizzasViewed;
export type ActionBasket = PizzasAdded | PizzasDelete;
