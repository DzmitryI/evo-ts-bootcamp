import React, { MouseEventHandler, useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import favouritesStore from '../../store/favouritesStore';
import style from '../imagesContainer/imagesContainer.module.css';

export interface CurImg {
  curImg: string
  name: string
  curId: string,
  active: boolean
}

export const ImagesBlock: React.FC<CurImg> = observer(({
  // eslint-disable-next-line react/prop-types
  curImg, name, curId, active,
}) => {
  const { favourites, addFavourite, deleteFavourite } = favouritesStore;

  const handleClickSvg: MouseEventHandler<SVGSVGElement> = useCallback((event) => {
    const { id } = event.currentTarget;
    const result = favourites.filter((favourite) => +favourite === +id).length > 0;
    if (!result) {
      addFavourite(id);
    } else {
      deleteFavourite(id);
    }
  }, []);

  return (
    <li
      key={curId}
      className={style.imageBlock}
    >
      <img src={curImg} alt={name} />
      <svg
        id={curId}
        width="98"
        height="89"
        viewBox="0 0 98 89"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleClickSvg}
        className={active ? style.active : ''}
      >
        <path d="M89.834 48.974L48.81 8.95 7.786 48.974 48.81 89l41.023-40.026z" fill="#E30A17" />
        <path
          d="M59.467 29.381c0 16.022-13.312 29.01-29.733 29.01C13.311 58.391 0 45.403 0 29.381 0 13.36 13.312.371 29.733.371c16.422 0 29.734 12.989 29.734 29.01z"
          fill="#E30A17"
        />
        <path
          d="M98 29.01c0 16.022-13.312 29.01-29.734 29.01-16.42 0-29.733-12.988-29.733-29.01C38.533 12.988 51.845 0 68.266 0 84.688 0 98 12.988 98 29.01z"
          fill="#E30A17"
        />
      </svg>
    </li>
  );
});
