import { useState } from 'react';

import './App.css';
import Header from './components/Header/Header';
import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { Outlet } from 'react-router-dom';

const fetchDBData = async () => {
    const res = await axios.get('http://localhost:8080/api/blogpost/');
    return res.data;
};

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
            <Header />
            <Outlet context={{ blogData }} />
        </>
    );
};

export default App;
