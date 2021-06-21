import React from 'react';
import { observer } from 'mobx-react-lite';
import canvasOptionsStore from '../../store/canvasOptionStore';
import canvasDataStore from '../../store/canvasDataStore';
import style from './canvasGrid.module.css';

// const time = 2000;
// const distance = 100;
let widthCanvas = 498;
let heightCanvas = widthCanvas;

export const CanvasGrid = observer(() => {
  const { columns: columnsCount, isBorderCell } = canvasOptionsStore.paramsCanvas;
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const ctxRef = React.useRef<CanvasRenderingContext2D | null>(null);
  const imagesRef = React.useRef<number[][]>([]);
  const draw = () => {
    if (!ctxRef.current || !canvasRef.current) {
      return;
    }
    const { current: canvas } = canvasRef;
    const { current: ctx } = ctxRef;
    // clear before draw
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // set styles
    ctx.fillStyle = 'rgb(255, 255, 255)'; // цвет кисти
    ctx.strokeStyle = 'rgb(0, 0, 0)'; // цвет обводки
    ctx.lineWidth = 1; // толщина линий
    if (canvasDataStore.canvasData.length > 0) {
      for (let i = 0; i < canvasDataStore.canvasData.length; i += 1) {
        const {
          x, y, width, height, active,
        } = canvasDataStore.canvasData[i];
        if (isBorderCell) {
          if (active) {
            ctx.save();
            ctx.fillStyle = 'rgb(50, 168, 82)';
            ctx.fillRect(x, y, width, height);
            ctx.strokeRect(x, y, width, height);
            ctx.restore();
          } else {
            ctx.strokeRect(x, y, width, height);
          }
        } else if (active) {
          ctx.save();
          ctx.fillStyle = 'rgb(50, 168, 82)';
          ctx.fillRect(x, y, width, height);
          ctx.restore();
        } else {
          ctx.fillRect(x, y, width, height);
        }
      }
    }
    // draw image
    // if (imageRef.current) {
    //   const imageWidth = 100;
    //   const ratio = imageRef.current.height / imageRef.current.width;
    //
    //   );
    // }
    // if (imageRef.current && imagesRef.current) {
    //   const imageWidth = 100;
    //   const ratio = imageRef.current.height / imageRef.current.width;
    //   imagesRef.current.forEach(([x, y]) => {
    //     ctx.drawImage(imageRef.current, x, y, imageWidth, imageWidth * ratio);
    //   });
    // }
    window.requestAnimationFrame(draw);
  };

  React.useLayoutEffect(() => {
    if (canvasRef.current) {
      ctxRef.current = canvasRef.current.getContext('2d');
      // fix quality
      const dpr = window.devicePixelRatio || 1;
      const { width, height } = canvasRef.current.getBoundingClientRect();

      canvasRef.current.width = width * dpr;
      canvasRef.current.height = height * dpr;
      if (ctxRef.current) {
        ctxRef.current.scale(dpr, dpr);
        canvasRef.current.style.height = `${height}px`;
        canvasRef.current.style.width = `${width}px`;
        widthCanvas = width;
        heightCanvas = widthCanvas;
        canvasDataStore.addCanvasData(columnsCount, width);
      }
      window.requestAnimationFrame(draw);
    }
  }, []);

  React.useLayoutEffect(() => {
    if (canvasRef.current) {
      canvasDataStore.addCanvasData(columnsCount, widthCanvas);
      window.requestAnimationFrame(draw);
    }
  }, [columnsCount]);
  React.useLayoutEffect(() => {
    if (canvasRef.current) {
      window.requestAnimationFrame(draw);
    }
  }, [isBorderCell]);
  const handleClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const { columns } = canvasOptionsStore.paramsCanvas;
    const rect = canvasRef.current!.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    if (imagesRef.current) {
      imagesRef.current.push([x, y]);
    }
    canvasDataStore.changeCanvasData(x, y);
    console.log('x ', x, 'y ', y);
    console.log(columns);
  };

  return (
    <div className={style.canvasContainer}>
      <canvas
        className={style.canvasGrid}
        width={widthCanvas}
        height={heightCanvas}
        ref={canvasRef}
        onClick={handleClick}
      />
    </div>
  );
});
