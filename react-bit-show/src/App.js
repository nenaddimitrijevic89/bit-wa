import React from 'react';
import { Shows } from './Components/Shows/Shows';
import { Header } from './Components/Header/Header';
import { Title } from './Components/Title/Title';
import { Footer } from './Components/Footer/Footer';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Title />
        <Shows />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
