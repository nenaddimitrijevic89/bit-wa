import React from 'react';
import './Post.css';
import TimeAgo from 'timeago-react';

const Post = ({ number, title, points, author, time, comments }) => {
    return (
        <div className="post">
            <div className="post__title">
                <h2>{number}. {title}</h2>
            </div>
            <div className="post__info">
                <span><i className="fa fa-heart"></i> {points}</span>
                <span><i className="fa fa-user"></i> {author}</span>
                <span><i className="fa fa-clock-o"></i> <TimeAgo datetime={time}/></span>
                <span class="post__info_comments">{comments} comments</span>
            </div>
        </div>
    )
}

export { Post };