import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers/rootReducer';
import style from './imagesContainer.module.css';
import { ImagesBlock } from '../imagesBlock/ImagesBlock';
import { Sols } from '../../store/actions/appActions';

export type Sol = {'img_src': string, name: string, id: string}

export function ImagesContainer() {
  const { loading, sols } = useSelector((state: RootState) => state.fetchSols);
  const { selectedItem } = useSelector((state: RootState) => state.menu);
  const { favourites } = useSelector((state: RootState) => state.favouritesSols);

  const renderFavourite = (curFavourite: number) => {
    const [curSol]: Sols = sols.filter((sol) => +sol.id === curFavourite);
    return (
      <ImagesBlock
        key={Math.random()}
        curImg={curSol.img_src}
        name={curSol.name}
        curId={curSol.id}
        active
      />
    );
  };

  const renderSols = (curSol: Sol) => {
    const result = favourites.some((curFavourite) => +curFavourite === +curSol.id);
    return (
      <ImagesBlock
        key={Math.random()}
        curImg={curSol.img_src}
        name={curSol.name}
        curId={curSol.id}
        active={result}
      />
    );
  };

  if (loading) {
    return (<p>...loading</p>);
  }
  if (selectedItem === 'Favourites') {
    return (
      <>
        {favourites?.length > 0
          ? (
            <ul className={style.imagesContainer}>
              {favourites.map((curFavourite) => (
                renderFavourite(+curFavourite)
              ))}
            </ul>
          ) : (<div>Favourites none</div>)}
      </>
    );
  }

  return (
    <>
      {sols.length > 0 ? (
        <ul className={style.imagesContainer}>
          { sols.length > 0 ? sols.map((curImg) => (
            renderSols(curImg)
          ))
            : null}
        </ul>
      )
        : (<p>Photos are not loaded</p>)}
    </>
  );
}
