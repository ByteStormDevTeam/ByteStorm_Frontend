import { useState } from 'react';

import styled from 'styled-components';

const FormWrapper = styled.div`
    padding: 5rem;
`;

const FormBody = styled.form`
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const NewBlogPage = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [content, setContent] = useState('');
    const [imageRef, setImageRef] = useState('');

    const handleTitleChange = (e: any) => {
        setTitle(e.target.value);
    };
    const handleDateChange = (e: any) => {
        setDate(e.target.value);
    };
    const handleContentChange = (e: any) => {
        setContent(e.target.value);
    };
    const handleLinkChange = (e: any) => {
        setImageRef(e.target.value);
    };

    const resetForm = () => {
        setContent('');
        setDate('');
        setImageRef('');
        setTitle('');
    };

    const handleFormSubmit = (e: any) => {
        e.preventDefault();
        const payload = {
            title,
            date,
            content,
            imageRef,
        };
        fetch('http://localhost:8080/api/blogpost/', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' },
        });
        resetForm();
    };

    //TODO add form for rendering a new blog
    return (
        <>
            <FormWrapper>
                <FormBody onSubmit={handleFormSubmit}>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={handleTitleChange}
                    />
                    <label htmlFor="date">Date:</label>
                    <input
                        type="text"
                        name="date"
                        value={date}
                        onChange={handleDateChange}
                    />
                    <label htmlFor="content">Content:</label>
                    <input
                        type="text"
                        name="content"
                        value={content}
                        onChange={handleContentChange}
                    />
                    <label htmlFor="link">Link:</label>
                    <input
                        type="text"
                        name="imageRef"
                        value={imageRef}
                        onChange={handleLinkChange}
                    />
                    <button>SUBMIT</button>
                </FormBody>
            </FormWrapper>
        </>
    );
};

export default NewBlogPage;
