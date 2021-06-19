import { action, makeAutoObservable } from 'mobx';

class MenuStore {
  arrMenuItems: string[] = ['Photos', 'Favourites']

  activeMenu: string = 'Photos'

  constructor() {
    makeAutoObservable(this, { changeMenu: action.bound });
  }

  changeMenu(id: string) {
    this.activeMenu = id;
  }
}

export default new MenuStore();
