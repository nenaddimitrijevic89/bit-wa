import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import { Home } from './Components/Home/Home';
import { Posts } from './Components/Posts/Posts';
import { About } from './Components/About/About';
import { Switch, Route } from 'react-router-dom';
import { Authors } from './Components/Authors/Authors';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/Posts' component={Posts} />
      <Route path='/Authors' component={Authors} />
      <Route path='/About' component={About} />
    </Switch>
  );
}

export default App;