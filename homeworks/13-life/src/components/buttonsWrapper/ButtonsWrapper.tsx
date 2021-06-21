import React from 'react';
import { observer } from 'mobx-react-lite';
import style from './buttonsWrapper.module.css';

export const ButtonsWrapper = observer(() => (
  <section className={style.buttonsWrapper}>
    <button type="button" className={style.btn}>Start</button>
    <button type="button" className={style.btn}>Stop</button>
  </section>
));
