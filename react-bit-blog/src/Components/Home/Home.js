import React from 'react';
import { Header } from '../Header/Header';
import { TextInput, Textarea, Container, Icon, Button } from 'react-materialize';
import './Home.css';


class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            valuePost: '',
            valueContent: ''
        };

        this.changePost = this.changePost.bind(this);
        this.changeContent = this.changeContent.bind(this);
        this.submitButton = this.submitButton.bind(this);
        this.resetButton = this.resetButton.bind(this);

    }

    changePost(event) {
        this.setState({ valuePost: event.target.value });
    }
    changeContent(event) {
        this.setState({ valueContent: event.target.value });
    }

    submitButton(event) {
        alert(`Post: ${this.state.valuePost} Content: ${this.state.valueContent}`);
        event.preventDefault();
    }
    resetButton() {
        this.setState({
            valuePost: '',
            valueContent: ''
        })
    }

    render() {
        return (
            <div>
                
                    <Header />
              
                <Container>
                    <h4 className="home__title">NEW POST</h4>
                    <h6>Title</h6>
                    <TextInput value={this.state.valuePost} onChange={this.changePost}
                        id="TextInput-4"
                        label="Post title"
                    />
                    <h6 className='home__content'>Content</h6>
                    <Textarea value={this.state.valueContent} onChange={this.changeContent}
                        icon={<Icon>mode_edit</Icon>}
                        id="Textarea-12"
                    />
                    <Button

                        onClick={this.resetButton}
                        large
                        node="a"
                        style={{
                            marginRight: '5px'
                        }}
                        waves="light"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={this.submitButton}
                        large
                        node="Save"
                        style={{
                            marginRight: '5px'
                        }}
                        waves="light"
                    >
                        Save
                    </Button>
                </Container>
            </div>
        )
    }
}

export { Home };