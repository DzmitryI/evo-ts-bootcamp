import React, { useCallback, MouseEventHandler } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { types } from '../../store/actions/actionsTypes';
import { RootState } from '../../store/reducers/rootReducer';
import styles from './menu.module.css';

export function Menu() {
  const dispatch = useDispatch();
  const { arrMenuItems, selectedItem } = useSelector((state: RootState) => state.menu);
  const handleChangeMenu: MouseEventHandler<HTMLLIElement> = useCallback((event) => {
    const { id } = event.currentTarget;
    dispatch({ type: types.MenuChange, payload: id });
  }, [dispatch]);
  return (
    <ul>
      {arrMenuItems.map((curMenu) => (
        <li
          id={curMenu}
          key={Math.random()}
          className={`${styles.item} ${selectedItem === curMenu ? styles.active : ''}`}
          onClick={handleChangeMenu}
        >
          {curMenu}
        </li>
      ))}
    </ul>
  );
}
