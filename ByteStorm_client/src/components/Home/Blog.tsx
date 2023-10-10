import React from 'react';
import { BlogType } from '../../Types';
import styled from 'styled-components';

const BlogContainer = styled.div`
    display: flex;
    justify-content: start;
    width: 30vw;
    background: #a100b03e;
    border: solid 1px whitesmoke;
    border-radius: 0 25px 25px 0;
    margin-bottom: 1rem;
    height: 200px;
    gap: 1rem;
`;

const BlogLeft = styled.div``;

const BlogRight = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    color: whitesmoke;
`;

const Blog = ({ title, date, content, imageRef, _id }: BlogType) => {
    return (
        <>
            <BlogContainer>
                <BlogLeft>
                    <img src={imageRef} height="200px" width="300px" />
                </BlogLeft>
                <BlogRight>
                    <h1>{title}</h1>
                    <p>Date :{date}</p>
                    <p>{content}</p>
                </BlogRight>
            </BlogContainer>
        </>
    );
};

export default Blog;
