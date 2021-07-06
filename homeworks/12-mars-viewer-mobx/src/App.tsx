import React from 'react';
import { Menu } from './components/menu/Menu';
import { LoadPanel } from './components/loadPanel/LoadPanel';
import { ImagesContainer } from './components/imagesContainer/ImagesContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <LoadPanel />
      <ImagesContainer />
    </div>
  );
}

export default App;
