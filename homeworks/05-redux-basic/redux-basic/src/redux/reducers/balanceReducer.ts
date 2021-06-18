import {types} from "../actions/actionsTypes";
import {ActionTypes} from "../actions/balanceActions";

export const balance = (state: number | undefined = 0, action: ActionTypes) => {
	const {type, payload} = action;
	switch (type) {
		case (types.UPDATE_BALANCE):
			return state = payload;
		case (types.CREDIT):
			return state - payload;
		case (types.SET_BALANCE_WITH_TAX):
			return state * (1 - 0.14);
		case (types.DEBIT):
			return state + payload;
		default:
			return state;
	}
}
