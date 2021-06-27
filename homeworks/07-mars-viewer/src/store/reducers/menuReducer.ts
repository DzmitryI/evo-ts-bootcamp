import { types } from '../actions/actionsTypes';
import { MenuChange } from '../actions/appActions';

interface InitialState {arrMenuItems: string[], selectedItem: string;}

const initialState: InitialState = {
  arrMenuItems: ['Photos', 'Favourites'],
  selectedItem: 'Photos',
};

export const menuReducer = (state = initialState, action: MenuChange): InitialState => {
  const { type, payload } = action;
  switch (type) {
    case types.MenuChange:
      return {
        ...state,
        selectedItem: payload,
      };
    default:
      return state;
  }
};
