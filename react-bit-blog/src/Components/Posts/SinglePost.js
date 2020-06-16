import React from 'react';
import { fetchSinglePost, fetchAuthorPosts } from '../../Data/fetch';
import { Row, Col, Container, Card, Icon } from 'react-materialize';
import './Posts.css';
import { Link } from 'react-router-dom';
import { Post } from './Post';

class SinglePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            singlePost: [],
            authorPosts: []
        }
    }

    componentDidMount() {
        fetchSinglePost(this.props.match.params.id)
            .then(data => {
                this.setState({ singlePost: data })
                fetchAuthorPosts(this.state.singlePost.userId)
                    .then(data => {
                        this.setState({ authorPosts: data })
                    })
            })

    }
    render() {
        return (
            <Container>
                <h4 className="singlePost__title">SINGLE POST</h4>
                <Link to={`/authors/singleauthor/${this.state.singlePost.userId}`}><h6>Author</h6></Link>
                <Row>
                    <Col
                        m={12}
                        s={12}
                    >
                        <Card
                            className="blue-grey darken-1 singlePost__card"
                            closeIcon={<Icon>close</Icon>}
                            revealIcon={<Icon>more_vert</Icon>}
                            textClassName="white-text"

                        >
                            <h4>{`Post id: ${this.state.singlePost.id}`}</h4>
                            <h5>{`Title: ${this.state.singlePost.title}`}</h5>
                            <h6>{this.state.singlePost.body}</h6>
                        </Card>
                    </Col>
                </Row>
                <h5>3 more posts from same author</h5>
                {this.state.authorPosts.slice(0, 3).map(post =>
                    <Post
                        id={post.id}
                        title={post.title}
                    />
                )}

            </Container>
        )
    }
}

export { SinglePost };