import { combineReducers } from 'redux';
import { menuReducer } from './menuReducer';
import { solsReducer } from './solsReducer';
import { fetchSolsReducer } from './fetchSolsReducer';
import { favouritesReducer } from './favouritesSolsReducer';

export const rootReducer = combineReducers({
  menu: menuReducer,
  sols: solsReducer,
  fetchSols: fetchSolsReducer,
  favouritesSols: favouritesReducer,
});

export type RootState = ReturnType<typeof rootReducer>
