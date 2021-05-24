import { types } from './actionsTypes';

export interface MenuChange {
	readonly type: types.MenuChange
	readonly payload: string
}

export interface SolChange {
	readonly type: types.SolChange
	readonly payload: number
}

export type Sols = {'img_src': string, name: string, id: string}[]

interface FetchSolsStart {
	readonly type: types.FetchSolsStart
	readonly payload: {loading: boolean, sols: Sols}
}

interface FetchSolsSuccess {
	readonly type: types.FetchSolsSuccess
	readonly payload: {loading: boolean, sols: Sols}
}

interface FetchSolsError {
	readonly type: types.FetchSolsError
	readonly payload: {loading: boolean, sols: Sols}
}

interface AddFavouriteSols {
	readonly type: types.AddFavourite
	readonly payload: {favourites: Sols}
}

interface DeleteFavouriteSols {
	readonly type: types.DeleteFavourite
	readonly payload: {favourites: Sols}
}

export type FetchSols = FetchSolsStart | FetchSolsSuccess | FetchSolsError;
export type FavouriteSols = AddFavouriteSols | DeleteFavouriteSols;
