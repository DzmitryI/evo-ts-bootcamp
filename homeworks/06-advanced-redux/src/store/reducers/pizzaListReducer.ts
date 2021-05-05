import {types} from '../actions/actionsTypes'
import {ActionList} from "../actions/pizzasTypesAction";

type InitialState = {
	arrPizzas: { name: string, price: number, _id: string }[],
}

const initialState: InitialState = {
	arrPizzas: []
}

export const pizzasListReducer = (state = initialState, action: ActionList): InitialState => {
	const {type, payload} = action;
	switch (type) {
		case types.PIZZA_VIEWED:
			return {
				...state,
				arrPizzas: payload
			}
		default:
			return state
	}
}


