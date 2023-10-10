import styled from 'styled-components';

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
