import React from 'react';
import './App.css';
import { MainVideo } from './Components/MainVideo/MainVideo';
import { FetchData, fetchRelated } from './Data/FetchData';
import { Search } from './Components/Search/Search';
import { Container, Row, Col } from 'react-bootstrap';
import { SingleVideo } from './Components/SingleVideo/SingleVideo';
import { Related } from './Components/RelatedVideos/Related';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      videos: [],
      activeVideo: null,
      related: []
    }
  }

  searchVideos = (input) => {
    FetchData(input)
      .then(data => {
        this.setState({ videos: data.items })
      })
  }

  renderVideos = () => {
    const { videos } = this.state;

    if (videos && videos.length) {
      return this.state.videos.map(video => <MainVideo
        image={video.snippet.thumbnails.medium.url}
        name={video.snippet.title} id={video.id.videoId}
        filterVideos={this.filterVideos} />
      )
    }
  }

  filterVideos = (id) => {
    this.setState({ activeVideo: id, videos: [] })
    fetchRelated(id)
      .then(data => {
        this.setState({ related: data.items })
      })
  }

  render() {
    return (
      <Container>
        <Row>
          <Search searchVideos={this.searchVideos} />
        </Row>
        <Row>
          {this.state.activeVideo
            ?
            <SingleVideo id={this.state.activeVideo} />
            : <div></div>
          }
          <Col lg={4}>
            {this.state.related
              ?
              this.state.related.map(rel => (
                <Related id={rel.id.videoId}
                  filterVideos={this.filterVideos} />
              ))
              : <div></div>
            }
          </Col>
        </Row>
        <Row>
          {this.renderVideos()}
        </Row>
      </Container>
    )
  }
}

export default App;