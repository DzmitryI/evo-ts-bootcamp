import { action, makeAutoObservable } from 'mobx';

class FavouritesStore {
  favourites: string[] = []

  constructor() {
    makeAutoObservable(this, { addFavourite: action.bound, deleteFavourite: action.bound });
  }

  addFavourite(id: string) {
    this.favourites.push(id);
  }

  deleteFavourite(id: string) {
    // console.log(this.favourites, id);
    // const idx = this.favourites.findIndex((el: string) => el === id);
    // this.favourites.splice(idx, 1);

    // eslint-disable-next-line no-case-declarations
    const arr = [...this.favourites];
    // eslint-disable-next-line no-case-declarations
    const idx = arr.findIndex((el: string) => el === id);
    arr.splice(idx, 1);
    this.favourites = arr;
  }
}

export default new FavouritesStore();
