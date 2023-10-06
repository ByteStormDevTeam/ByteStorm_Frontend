import React from 'react';
import { BlogType } from '../Types';
import { useOutletContext } from 'react-router-dom';
import BlogList from '../components/Home/BlogList';

const HomePage = () => {
    const { blogData } = useOutletContext();
    //TODO add fetch for blog posts
    return (
        <>
            <div>HomePage</div>
            {console.log(blogData)}
            <div className="HomePageImage" />
            <BlogList blogData={blogData} />
        </>
    );
};

export default HomePage;
