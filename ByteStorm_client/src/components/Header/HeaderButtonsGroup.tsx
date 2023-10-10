import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const HeaderButton = styled.button`
    padding: 0.25rem;
    background: transparent;
    color: whitesmoke;
    font-size: 1rem;
    border: 0;
`;

const HeaderButtonsGroup = () => {
    return (
        <>
            <HeaderButton>Home</HeaderButton>
            <HeaderButton>Leaderboard</HeaderButton>
        </>
    );
};

export default HeaderButtonsGroup;
