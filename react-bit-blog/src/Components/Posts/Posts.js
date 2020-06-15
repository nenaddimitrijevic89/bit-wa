import React from 'react';
import './Posts.css';
import { Header } from '../Header/Header';
import { Container} from 'react-materialize';
import { Post } from '../Post/Post';
import {Foot} from '../Footer/Footer';
import { Link } from 'react-router-dom';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                this.setState({ posts: data })
            })
    }

    render() {
        return (
            <div>
                <Header />
                <Container>
                    <h2 className="posts__title">Posts</h2>
                    {this.state.posts.map(post =>
                           <Link to={`/Posts/${post.id}`}> <Post title={`Post ${post.id}`}
                            body={`${post.body.slice(0, 200)}. . .`} 
                            key={post.id} /></Link>
                    )}
                </Container>
                <Foot/>
            </div >
        )
    }

}

export { Posts };