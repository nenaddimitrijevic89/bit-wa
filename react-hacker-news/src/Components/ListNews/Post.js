import React from 'react';
import './ListNews.css';
import { FaHeart, FaUserAlt, FaClock } from "react-icons/fa"

const Post = ({ title, author, number, score, time, comments }) => {
    return (
        <div className="listnews__post">
            <div>
                <h2>{`${number + 1}. ${title}`}</h2>
            </div>
            <div className="listnews__post_info">
                <h3><FaHeart /> {score}</h3>
                <h3><FaUserAlt /> {author}</h3>
                <h3><FaClock /> {time}</h3>
                <h3 className="listnews__post_info_comments">{comments} comments</h3>
            </div>
        </div>
    )
}
export { Post };