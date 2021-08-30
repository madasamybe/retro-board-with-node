import React from 'react';
import { Navigation } from './navigation/navigation';
import { RetroColumn } from './retro-column/retro-column';
import './App.less';

function App() {
  return (
    <div className="App">
      <Navigation />
      <RetroColumn />
    </div>
  );
}

export default App;