import { types } from '../actions/actionsTypes';
import { FavouriteSols } from '../actions/appActions';

interface InitialState {favourites: string[]}

const initialState: InitialState = {
  favourites: [],
};

export const favouritesReducer = (state = initialState, action: FavouriteSols): InitialState => {
  const { type, payload } = action;
  switch (type) {
    case types.AddFavourite:
      return {
        ...state,
        favourites: [...state.favourites, payload.favourite],
      };
    case types.DeleteFavourite:
      // eslint-disable-next-line no-case-declarations
      const arr = [...state.favourites];
      // eslint-disable-next-line no-case-declarations
      const idx = arr.findIndex((el: string) => el === payload.favourite);
      arr.splice(idx, 1);
      console.log(arr);
      return {
        ...state,
        favourites: arr,
      };
    default:
      return state;
  }
};
