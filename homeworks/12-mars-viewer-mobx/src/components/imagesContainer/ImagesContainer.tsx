import React from 'react';
import { observer } from 'mobx-react-lite';
import menuStore from '../../store/menuStore';
import favouritesStore from '../../store/favouritesStore';
import solsStore, { Sols } from '../../store/solsStore';
import { ImagesBlock } from '../imagesBlock/ImagesBlock';
import style from './imagesContainer.module.css';

export type Sol = {'img_src': string, name: string, id: string}

export const ImagesContainer = observer(() => {
  const { activeMenu } = menuStore;
  const { sols, loading } = solsStore;
  const { favourites } = favouritesStore;

  const renderFavourite = (curFavourite: number) => {
    const [curSol]: Sols = sols.filter((sol) => +sol.id === curFavourite);
    return (
      <ImagesBlock
        key={curSol.id}
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
        key={curSol.id}
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
  if (activeMenu === 'Favourites') {
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
});
