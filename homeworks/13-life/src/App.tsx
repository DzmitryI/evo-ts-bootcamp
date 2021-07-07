import React from 'react';
import './app.css';
import { CanvasGrid } from './components/canvasGrid/CanvasGrid';
import { OptionsComponent } from './components/optinsComponent/OptionsComponent';
import { ButtonsWrapper } from './components/buttonsWrapper/ButtonsWrapper';

function App() {
  return (
    <div className="app">
      <h1 className="title">The Game of Life</h1>
      <CanvasGrid />
      <OptionsComponent />
      <ButtonsWrapper />
    </div>
  );
}

export default App;
