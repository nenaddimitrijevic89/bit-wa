import React from 'react';
import './App.css';
import { Users } from './Components/Users/Users';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';


function App() {
  return (
    <div >
      <Header />
      <Users />
      <Footer />
    </div>
  );
}

export default App;
