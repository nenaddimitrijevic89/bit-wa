import React from 'react';
import './Post.css';
import { FaHeart } from 'react-icons/fa';

const Post = ({ number, title, points, author, time, comments }) => {
    return (
        <div className="post">
            <div>
                <h2>{number}.{title}</h2>
            </div>
            <div className="post__info">
                <span><FaHeart /> {points}</span>
                <span>{author}</span>
                <span>{time}</span>
                <span>{comments}</span>
            </div>
        </div>
    )
}

export { Post };