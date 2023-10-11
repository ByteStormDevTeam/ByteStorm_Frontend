import { useOutletContext, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { BlogType } from '../Types';

const PageContainer = styled.div`
    margin: 0 10%;
    padding-top: 5rem;
    display: flex;
    justify-content: center;
    gap: 3rem;
`;

const FlexTape = styled.div`
    display: flex;
    justify-content: space-around;
`;

const TextPageBox = styled.div`
    width: 55%;
    color: whitesmoke;
    background-color: #a025ab3d;
    border-radius: 1rem;
    padding: 2rem;
`;
const ImageContainer = styled.div`
    width: 40%;
    border-radius: 1rem;
    border: solid 1px whitesmoke;
    overflow: hidden;
    max-height: 800px;
    min-height: 100px;
`;

const FormattedImage = styled.img`
    max-width: 40vw;
    max-height: auto;
`;

const BlogPage = () => {
    const [blog, setBlog] = useState<null | BlogType>();
    const { blogData }: any = useOutletContext();
    const blogUUID: any = useParams();
    useEffect(() => {
        const blogTemp = blogData.filter(
            (blog: any) => blog._id == blogUUID.id
        );
        setBlog(blogTemp[0]);
    }, []);
    //TODO render an individual blog
    if (blog == null) {
        return 'Loading';
    }

    return (
        <>
            <PageContainer>
                <FlexTape>
                    <TextPageBox>
                        <h1>{blog.title}</h1>
                        <h3>Date: {blog.date}</h3>
                        <p>{blog.content}</p>
                    </TextPageBox>
                    <ImageContainer>
                        <FormattedImage src={blog.imageRef} />
                    </ImageContainer>
                </FlexTape>
            </PageContainer>
        </>
    );
};

export default BlogPage;
