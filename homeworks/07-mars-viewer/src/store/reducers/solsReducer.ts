import { types } from '../actions/actionsTypes';
import { SolChange } from '../actions/appActions';

interface InitialState {
  selectedSol: number,
}

const initialState: InitialState = {
  selectedSol: 1,
};

export const solsReducer = (state = initialState, action: SolChange): InitialState => {
  const { type, payload } = action;
  switch (type) {
    case types.SolChange:
      return {
        ...state,
        selectedSol: payload,
      };
    default:
      return state;
  }
};
