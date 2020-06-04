import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Header/Header.js';
import { Posts } from './components/Header/Posts/Posts.js';

const App = () => {
  return (
    <div>
      <Header />
      <Posts />
    </div>
  );
}

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Header />
//         <Posts />
//       </div>
//     );
//   }
// }


export default App;
