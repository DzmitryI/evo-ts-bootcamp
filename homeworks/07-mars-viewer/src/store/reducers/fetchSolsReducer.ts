import { types } from '../actions/actionsTypes';
import { FetchSols, Sols } from '../actions/appActions';

interface InitialState {sols: Sols, loading: boolean}

const initialState: InitialState = {
  sols: [],
  loading: false,
};

export const fetchSolsReducer = (state = initialState, action: FetchSols): InitialState => {
  const { type, payload } = action;
  switch (type) {
    case types.FetchSolsStart:
      return {
        ...state,
        loading: payload.loading,
      };
    case types.FetchSolsSuccess:
      return {
        ...state,
        loading: payload.loading,
        sols: payload.sols,
      };
    case types.FetchSolsError:
      return {
        ...state,
      };
    default:
      return state;
  }
};
