import React, { MouseEventHandler, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers/rootReducer';
import style from './imagesContainer.module.css';
import { types } from '../../store/actions/actionsTypes';

export function ImagesContainer() {
  const { loading, sols } = useSelector((state: RootState) => state.fetchSols);
  const { selectedItem } = useSelector((state: RootState) => state.menu);
  const { favourites } = useSelector((state: RootState) => state.favouritesSols);
  const dispatch = useDispatch();
  const handleClickSvg: MouseEventHandler<SVGSVGElement> = useCallback((event) => {
    const { id } = event.currentTarget;
    console.log(sols, id);
    const result = sols.filter((sol) => +sol.id === +id);
    dispatch({
      type: types.AddFavourite,
      payload: { favourites: result },
    });
  }, [dispatch, sols]);
  if (loading) {
    return (<p>...loading</p>);
  }
  if (selectedItem === 'Favourites') {
    return (
      <>
        {favourites?.length > 0
          ? (<div>Favourites full</div>) : (<div>Favourites</div>)}
      </>
    );
  }

  return (
    <>
      {sols.length > 0 ? (
        <ul className={style.imagesContainer}>
          { sols.length > 0 ? sols.map((curImg) => (
            <li
              key={Math.random()}
              className={style.imageBlock}
            >
              {/* eslint-disable-next-line camelcase */}
              <img src={curImg.img_src} alt={curImg.name} />
              <svg
                id={curImg.id}
                width="98"
                height="89"
                viewBox="0 0 98 89"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                opacity="0.7"
                onClick={handleClickSvg}
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
          ))
            : null}
        </ul>
      )
        : (<p>Photos are not loaded</p>)}
    </>
  );
}
