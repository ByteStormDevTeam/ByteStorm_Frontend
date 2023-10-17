import './App.css';
import Header from './components/Header/Header';
import axios from 'axios';

import { useQuery } from 'react-query';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const fetchDBData = async () => {
    const res = await axios.get('http://54.74.199.55:8080/api/blogpost/');
    return res.data;
};

const Background = styled.div``;

const App = () => {
    const {
        data: blogData,
        error: blogError,
        isLoading: blogLoading,
    } = useQuery('blogs', fetchDBData);

    if (blogLoading) {
        return <div>Loading...</div>;
    }

    if (blogError) {
        console.error('Database Error:', blogError);
        return <div>Error fetching blog data. Please try again later.</div>;
    }

    return (
        <>
            <Background>
                <Header />
                <Outlet context={{ blogData }} />
            </Background>
        </>
    );
};

export default App;
