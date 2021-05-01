import {types} from "./actionsTypes";

interface UpdateBalance {
	readonly type: types.UPDATE_BALANCE
	readonly payload: number
}

function updateBalance(payload: number): UpdateBalance {
	return {
		type: types.UPDATE_BALANCE,
		payload
	}
}

interface Credit {
	readonly type: types.CREDIT
	readonly payload: number
}

function credit(payload: number): Credit {
	return {
		type: types.CREDIT,
		payload
	}
}

interface SubtractPercentage {
	readonly type: types.SET_BALANCE_WITH_TAX
	readonly payload: number
}

function subtractPercentage(payload: number): SubtractPercentage {
	return {
		type: types.SET_BALANCE_WITH_TAX,
		payload
	}
}

interface Debit {
	readonly type: types.DEBIT
	readonly payload: number
}

function debit(payload: number): Debit {
	return {
		type: types.DEBIT,
		payload
	}
}

export type ActionTypes = UpdateBalance | SubtractPercentage | Credit | Debit;
