import React from 'react';
import './App.css';
import { FetchData } from './Data/Fetch';
import { Search } from './Components/Search/Search';
import { Giphy } from './Components/Giphy/Giphy';
import { Row, Container, Col } from 'react-bootstrap';

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

  render() {
    return (
      <Container>
        <Row>

          <Search searchedGiphy={this.searchedGiphy} />


          {this.state.giphy.map((gif, i) =>
            <Giphy
              key={i}
              src={gif.images.downsized.url}
            />
          )}
        </Row>
      </Container >
    );
  }
}

export default App;
