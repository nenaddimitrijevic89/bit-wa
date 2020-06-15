import React from 'react';

class SinglePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            singlePost: []
        }
    }

    componentDidMount() {
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