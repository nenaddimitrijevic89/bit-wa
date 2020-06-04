
import React, { Component } from 'react';
import './Post.css';


// const Post = props => {
//     return (
//         <div>
//             <li>
//                 <h4>{props.title}</h4>
//                 <p>{props.description}</p>
//             </li>
//         </div>
//     )
// }

class Post extends Component {

    render() {
        return (

            <li className="posts__item">
                <h4 className="posts__item_title">{this.props.title}</h4>
                <p>{this.props.description}</p>
            </li>

        )
    }
}

export { Post };