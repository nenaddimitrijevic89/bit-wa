import React from 'react';
import { Shows } from './Components/Shows/Shows';
import { Header } from './Components/Header/Header';
import { Title } from './Components/Title/Title';
import { Footer } from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Title />
      <Shows />
      <Footer />
    </div>
  );
}

export default App;
