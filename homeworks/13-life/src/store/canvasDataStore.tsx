import { action, makeAutoObservable } from 'mobx';

export type CanvasData = {
  'x': number,
  'y': number,
  'width': number,
  'height': number,
  'i': number,
  'j': number,
  'active': boolean}[];

class CanvasDataStore {
  canvasData: CanvasData = [];

  constructor() {
    makeAutoObservable(this, { addCanvasData: action.bound, changeCanvasData: action.bound });
  }

  addCanvasData(count: number, width: number) {
    this.canvasData = [];
    const sizeCell: number = width / count;
    for (let i = 0; i < count; i += 1) {
      for (let j = 0; j < count; j += 1) {
        this.canvasData.push({
          x: j * sizeCell,
          y: i * sizeCell,
          width: sizeCell,
          height: sizeCell,
          j,
          i,
          active: false,
        });
      }
    }
  }

  changeCanvasData(startX: number, startY: number) {
    for (let i = 0; i < this.canvasData.length; i += 1) {
      const xi = this.canvasData[i].x + this.canvasData[i].width;
      const yi = this.canvasData[i].y + this.canvasData[i].height;
      if (startX <= xi && startY <= yi) {
        this.canvasData[i].active = !this.canvasData[i].active;
        break;
      }
    }
  }

  // startChangeData() {
  //   for (let i = 0; i < this.canvasData.length; i += 1) {
  //     if (this.canvasData[i].active) {
  //       let total = 0;
  //       for (let j = 0; j < 2; i += 1) {
  //
  //       }
  //     }
  //   }
  // }
}

export default new CanvasDataStore();
