import React, { useCallback, MouseEventHandler } from 'react';
import { observer } from 'mobx-react-lite';
import menuStore from '../../store/menuStore';
import styles from './menu.module.css';

export const Menu = observer(() => {
  const { arrMenuItems, activeMenu, changeMenu } = menuStore;
  const handleChangeMenu: MouseEventHandler<HTMLLIElement> = useCallback((event) => {
    const { id } = event.currentTarget;
    changeMenu(id);
  }, []);
  return (
    <ul>
      {arrMenuItems.map((curMenu) => (
        <li
          id={curMenu}
          key={curMenu}
          onClick={handleChangeMenu}
          className={`${styles.item} ${activeMenu === curMenu ? styles.active : ''}`}
        >
          {curMenu}
        </li>
      ))}
    </ul>
  );
});
