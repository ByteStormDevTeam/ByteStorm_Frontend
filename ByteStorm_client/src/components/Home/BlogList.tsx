import { BlogType } from '../../Types';
import Blog from './Blog';
import styled from 'styled-components';

const BlogListContainer = styled.ul`
    display: flex;
    flex-direction: column;
`;

const BlogList = ({ blogData }: any) => {
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
            <BlogListContainer>{listedBlogs}</BlogListContainer>
        </div>
    );
};

export default BlogList;
