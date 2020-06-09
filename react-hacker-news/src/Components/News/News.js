import React from 'react';
import { fetchId, fetchNews } from '../../fetch/fetch';
import { Post } from '../Post/Post';

// class News extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             stories : []
//         }
//     }
//     componentDidMount() {
//         fetchId()
//             .then(data => {
//                 const ids=data.slice(0, 10);
//                 const reqs=ids.map(id=>fetchNews(id));
//                 Promise.all(reqs)
//                 .then(data=>{
//                     this.setState({stories:data})
//                 })
//             })
//     }
//     render() {
//         return (
//             <div>
//                 {this.state.stories.map(story=>(
//                     <Post title={story.title}/>
//                 ))}
//             </div>
//         )
//     }
// }

class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stories: []
        }
    }
    componentDidMount() {
        fetchId()
            .then(data => {
                const ids = data.slice(0, 10);
                const reqs = ids.map(id => fetchNews(id));
                Promise.all(reqs)
                    .then(data => {
                        this.setState({ stories: data })
                    })
            })
    }
    render() {
        return (
            <div>
                {this.state.stories.map((story, i) => (
                    <Post title={story.title}
                        number={i + 1}
                        points={story.score}
                        author={story.by}
                        time={story.time}
                        comments={story.descendants} />
                ))}
            </div>
        )
    }
}

export { News }