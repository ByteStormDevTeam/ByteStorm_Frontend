import React from 'react';
import { BlogType } from '../../Types';

const Blog = ({ title, date, content, imageRef, _id }: BlogType) => {
    return (
        <>
            <div>
                <h1>{title}</h1>
                <p>{date}</p>
                <p>{content}</p>
                <img src={imageRef} height="200px" width="300px" />
            </div>
        </>
    );
};

export default Blog;
