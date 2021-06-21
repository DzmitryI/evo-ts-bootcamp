import { action, makeAutoObservable } from 'mobx';

export type ParamsCanvas = {'columns': number, isBorderCell: boolean};

class CanvasOptionStore {
 paramsCanvas: ParamsCanvas = { columns: 20, isBorderCell: true };

 constructor() {
   makeAutoObservable(this, { changeCells: action.bound });
 }

 changeCells(id: string, value: number | boolean) {
   switch (id) {
     case 'column':
       this.paramsCanvas = { ...this.paramsCanvas, columns: +value };
       break;
     case 'useGrid':
       this.paramsCanvas = { ...this.paramsCanvas, isBorderCell: !this.paramsCanvas.isBorderCell };
       break;
     default:
       break;
   }
 }
}

export default new CanvasOptionStore();
