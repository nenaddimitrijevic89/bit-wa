import React from 'react';
import { Post } from './Post';
// import uuid from 'react-uuid';

const Posts = () => {

    const data = [{ title: "First post", description: "First description" },
    { title: "Second post", description: "Second description" },
    { title: "Third post", description: "Third description" },
    { title: "Fourth post", description: "Fourth description" },
    { title: "Fifth post", description: "Fifth description" },
    { title: "Sixth post", description: "Sixth description" }]

    return (
        <ul>
            {data.map((post, i) =>
                <Post
                    key={i}
                    title={post.title}
                    description={post.description} />
            )}
        </ul>
    )
}

export { Posts };
