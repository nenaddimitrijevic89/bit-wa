import React from 'react';
import './App.css';
import { Header } from './Components/Header/Header';
import { ListNews } from './Components/ListNews/ListNews';

function App() {
  return (
    <div className="App">
      <Header />
      <ListNews />
    </div>
  );
}

export default App;
