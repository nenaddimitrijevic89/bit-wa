import React from 'react';
import './Posts.css';
import { Header } from '../Header/Header';
import { Container } from 'react-materialize';
import { Post } from '../Post/Post';
import { Route, Link } from 'react-router-dom';
import { SinglePost } from '../Post/SinglePost';

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
                        <Route to={`/Posts/${post.id}`} component={SinglePost}>
                            <Link><Post title={`Post ${post.id}`} body={`${post.body.slice(0, 50)}. . .`} key={post.id} /></Link>
                        </Route>
                    )}
                </Container>
            </div >
        )
    }

}

export { Posts };