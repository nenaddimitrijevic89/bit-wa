import React from 'react';
import './App.css';
import { ListUsers } from './Components/ListUsers/ListUsers';
import {GridUsers} from './Components/GridUsers/GridUsers';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';


function App() {
  return (
    <div >
      <Header />
      <ListUsers />
      <GridUsers/>
      <Footer />
    </div>
  );
}

export default App;
