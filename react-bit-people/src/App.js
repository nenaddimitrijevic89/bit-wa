import React from 'react';
import './App.css';
import { Header } from './Components/Header/Header';
import { Users } from './Components/Users/Users';
import { Footer } from './Components/Footer/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.onLayoutChange = this.onLayoutChange.bind(this);

    this.state = {
      isListView: true,
    }
  }

  onLayoutChange() {
    this.setState({ isListView: !this.state.isListView })
  }

  render() {
    return (
      <div>
        <Header isList={this.state.isListView} onLayoutChange={this.onLayoutChange} />
        <Users isList={this.state.isListView} />
        <Footer />
      </div >
    );
  }
}

export default App;
