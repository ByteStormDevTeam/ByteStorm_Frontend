import { BlogType } from '../../Types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BlogContainer = styled.div`
    display: flex;
    justify-content: start;
    background: #a100b03e;
    border: solid 1px whitesmoke;
    border-radius: 0 25px 25px 0;
    margin-bottom: 1rem;
    height: 200px;
    gap: 1rem;
`;

const BlogLeft = styled.div`
    border-right: 1px solid whitesmoke;
`;

const BlogRight = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    color: whitesmoke;
    overflow: hidden;
`;

const BlogTitle = styled.h1`
    font-family: 'Pixelify Sans';
    text-shadow: 2px 0px 16px black;
    font-weight: 300;
`;

const Blog = ({ title, date, content, imageRef, _id }: BlogType) => {
    return (
        <>
            <Link to={`/blogpost/${_id}`}>
                <BlogContainer key={_id}>
                    <BlogLeft>
                        <img src={imageRef} height="200px" width="300px" />
                    </BlogLeft>

                    <BlogRight>
                        <BlogTitle>{title}</BlogTitle>
                        <p>Date: {date}</p>
                        <p>{content}</p>
                    </BlogRight>
                </BlogContainer>
            </Link>
        </>
    );
};

export default Blog;
