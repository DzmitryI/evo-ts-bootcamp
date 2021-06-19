import React, {
  ChangeEventHandler, MouseEventHandler, useCallback, useState,
} from 'react';
import { observer } from 'mobx-react-lite';
import { fetchSols } from '../../api/fetchAPI';
import menuStore from '../../store/menuStore';
import solsStore from '../../store/solsStore';
import style from './loadPanel.module.css';

export const LoadPanel = observer(() => {
  const { activeMenu } = menuStore;
  const { fetchSolsStart, fetchSolsSuccess, fetchSolsError } = solsStore;
  const [selectedSol, setSelectedSol] = useState('');
  const onClickHandle: MouseEventHandler<HTMLButtonElement> = async () => {
    fetchSolsStart();
    try {
      const { data }: {data: {photos: {'img_src': string, name: string, id: string}[]}} = await fetchSols(+selectedSol);
      fetchSolsSuccess(data.photos);
    } catch (err) {
      fetchSolsError();
    }
  };

  const onChangeInput: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    const { value } = event.currentTarget;
    setSelectedSol(value);
  }, []);
  if (activeMenu === 'Favourites') {
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
});
