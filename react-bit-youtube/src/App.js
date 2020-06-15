import React from 'react';
import './App.css';
import { MainVideo } from './Components/MainVideo/MainVideo';
import { FetchData, fetchRelated } from './Data/FetchData';
import { Search } from './Components/Search/Search';
import { Container, Row, Col } from 'react-bootstrap';
import { SingleVideo } from './Components/SingleVideo/SingleVideo';
import { Related } from './Components/RelatedVideos/Related';
import { History } from './Components/HistoryVideo/HistoryVideo';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      videos: [],
      activeVideo: '',
      related: [],
      history: [],
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
        name={video.snippet.title}
        id={video.id.videoId}
        key={video.id.videoId}
        filterVideos={this.filterVideos} />
      )
    }
  }

  filterVideos = (id) => {
    const historyVideo = this.state.videos.find(video => video.id.videoId === id);
    this.setState({
      // history: [...this.state.history, historyVideo],
      activeVideo: id,
      videos: []
    })

    fetchRelated(id)
      .then(data => {
        this.setState({ related: data.items })
      })
  }

  filterRelatedVideos = (id) => {
    console.log(id, this.state.related)
    const relatedVideo = this.state.related.find(video => video.id.videoId === id);


    this.setState({
      history: [...this.state.history, relatedVideo],
      activeVideo: id,
    })
    fetchRelated(id)
      .then(data => {
        this.setState({ related: data.items })
      })
  }

  renderHistoryVideos = () => {
    const { history } = this.state;
    if (history.length) {
      return history.map(el => (
        <History id={el.id.videoId}
          key={el.id.videoId}
          filterVideos={this.filterVideos}
          image={el.snippet.thumbnails.medium.url}
          name={el.snippet.title}
        />
      ))
    }
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
                  key={rel.id.videoId}
                  filterVideos={this.filterRelatedVideos}
                  image={rel.snippet.thumbnails.medium.url}
                  name={rel.snippet.title} />
              ))
              : <div></div>
            }
          </Col>
        </Row>
        <Row>
          {this.renderHistoryVideos()}
          {this.renderVideos()}
        </Row>
      </Container>
    )
  }
}

export default App;