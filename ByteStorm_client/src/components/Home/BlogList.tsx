import React from 'react';
import { BlogType } from '../../Types';
import Blog from './Blog';

const BlogList = ({ blogData }) => {
    console.log(blogData);
    const listedBlogs = blogData.map((blog: BlogType) => (
        <>
            <li id={blog._id}>
                <Blog
                    title={blog.title}
                    date={blog.date}
                    content={blog.content}
                    imageRef={blog.imageRef}
                    _id={blog._id}
                />
            </li>
        </>
    ));
    return (
        <div>
            <ul>{listedBlogs}</ul>
        </div>
    );
};

export default BlogList;
