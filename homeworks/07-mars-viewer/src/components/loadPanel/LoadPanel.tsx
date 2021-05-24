import React, { ChangeEventHandler, MouseEventHandler, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers/rootReducer';
import { types } from '../../store/actions/actionsTypes';
import style from './loadPanel.module.css';
import { fetchSols } from '../../api/fetchAPI';

export function LoadPanel() {
  const dispatch = useDispatch();
  const { selectedSol } = useSelector((state: RootState) => state.sols);
  const { selectedItem } = useSelector((state: RootState) => state.menu);

  const onClickHandle: MouseEventHandler<HTMLButtonElement> = async () => {
    dispatch({ type: types.FetchSolsStart, payload: { loading: true } });
    try {
      const { data }: {data: {photos: {'img_src': string, name: string}[]}} = await fetchSols(selectedSol);
      dispatch({
        type: types.FetchSolsSuccess,
        payload: { loading: false, sols: data.photos },
      });
    } catch (err) {
      dispatch({ type: types.FetchSolsError, payload: { loading: false } });
    }
  };

  const onChangeInput: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    const { value } = event.currentTarget;
    dispatch({ type: types.SolChange, payload: value });
  }, [dispatch]);
  if (selectedItem === 'Favourites') {
    return null;
  }

  return (
    <>
      <p>Select Sol and press &quot;load&quot;!</p>
      <div className={style.loadContainer}>
        <input
          type="number"
          className={style.input}
          onChange={onChangeInput}
          value={selectedSol}
        />
        <button
          type="button"
          className={style.btn}
          onClick={onClickHandle}

        >
          load
        </button>
      </div>
    </>
  );
}
