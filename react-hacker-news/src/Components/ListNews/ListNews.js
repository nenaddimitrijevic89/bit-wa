import React, { Component } from 'react';
import { fetchId, fetchNews } from '../Fetch/fetch';
import { Post } from './Post';
import './ListNews.css';

class ListNews extends Component {
    constructor(props) {
        super(props);

        this.state = {
            story: [],
        }
    }
    componentDidMount() {
        fetchId()
            .then(data => {
                const ids = data.slice(0, 10);
                const reqs = ids.map(id => fetchNews(id))
                Promise.all(reqs)
                    .then(data => {
                        this.setState({ story: data })
                    })
            });
    }
    render() {
        return (
            <div className="listnews">
                {this.state.story.map((post, i) => (
                    < Post key={post.id}
                        number={i}
                        title={post.title}
                        author={post.by}
                        score={post.score}
                        time={post.time}
                        comments={post.descendants}
                    />
                ))}
            </div>

        )
    }
}

export { ListNews };