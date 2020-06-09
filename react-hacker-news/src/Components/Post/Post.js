import React from 'react';
import './Post.css';

const Post = ({ number, title, points, author, time, comments }) => {
    return (
        <div className="post">
            <div>
                <h2>{number}.{title}</h2>
            </div>
            <div className="post__info">
                <span><i className="fa fa-heart"></i> {points}</span>
                <span><i className="fa fa-user"></i> {author}</span>
                <span><i className="fa fa-clock-o"></i> {time}</span>
                <span>{comments} comments</span>
            </div>
        </div>
    )
}

export { Post };