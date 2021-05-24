import { types } from '../actions/actionsTypes';
import { FavouriteSols, Sols } from '../actions/appActions';

interface InitialState {favourites: Sols}

const initialState: InitialState = {
  favourites: [],
};

export const favouritesReducer = (state = initialState, action: FavouriteSols): InitialState => {
  const { type, payload } = action;
  switch (type) {
    case types.AddFavourite:
      return {
        ...state,
        favourites: [...state.favourites, ...payload.favourites],
      };
    case types.DeleteFavourite:
      return {
        ...state,
        favourites: payload.favourites,
      };
    default:
      return state;
  }
};
