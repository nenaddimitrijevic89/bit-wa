import React from 'react';
import { matchPath, useRouteMatch } from 'react-router';

class SinglePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            singlePost: []
        }
    }

    componentDidMount() {
        console.log(this.props.id)
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ singlePost: data })
            })
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

export { SinglePost };