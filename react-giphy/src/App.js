import React from 'react';
import './App.css';
import { FetchData } from './Data/Fetch';
import { Search } from './Components/Search/Search';
import { Giphy } from './Components/Giphy/Giphy';
import { Row, Container, } from 'react-bootstrap';
import { Header } from './Components/Header/Header';
import { Title } from './Components/Title/Title';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      giphy: [],
    }
  }
  searchedGiphy = (text) => {
    FetchData(text)
      .then(data => {
        this.setState({ giphy: data.data })
      })
  }

  removeGiphy = (num) => {
    let arr = this.state.giphy.filter((gif) => gif.id !== num)
    this.setState({ giphy: arr });
  }

  render() {
    return (
      <Container fluid>
        <Header />
        <Title />
        <Container>
          <Row>
            <Search searchedGiphy={this.searchedGiphy} />
            {this.state.giphy.map((gif) =>
              <Giphy
                key={gif.id}
                id={gif.id}
                src={gif.images.downsized.url}
                removeGiphy={this.removeGiphy}
              />
            )}
          </Row>
        </Container >
      </Container>
    );
  }
}

export default App;
