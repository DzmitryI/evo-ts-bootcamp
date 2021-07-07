import React from 'react';
import { observer } from 'mobx-react-lite';
import canvasStore from '../../store/canvasOptionStore';
import style from './optionsComponent.module.css';

export const OptionsComponent = observer(() => {
  const { paramsCanvas: { columns, isBorderCell }, changeCells } = canvasStore;
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    changeCells(id, +value);
  };
  return (
    <section className={style.options}>
      <h2>Options</h2>
      <div className={style.sizeWrap}>
        <h3>Count of cells:</h3>
        <label htmlFor="column">
          Size of cell:
          <input id="column" type="number" value={columns} onChange={onChangeInput} />
        </label>
        <label htmlFor="useGrid">
          Use grid:
          <input id="useGrid" type="checkbox" checked={isBorderCell} onChange={onChangeInput} />
        </label>
      </div>
      <div className={style.speedWrap}>
        <h3>Speed:</h3>
        <label htmlFor="speed">
          Rows:
          <input id="speed" type="number" />
        </label>
      </div>
    </section>
  );
});
