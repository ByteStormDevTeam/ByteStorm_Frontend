import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FlexTape = styled.div`
    display: flex;
    gap: 1rem;
`;
const HeaderButton = styled.button`
    padding: 0.5rem;
    background: transparent;
    color: whitesmoke;
    font-size: 1rem;
    border: 1px solid whitesmoke;
    border-radius: 15px;
    &:hover {
        background: rgba(245, 245, 245, 0.1);
        cursor: pointer;
    }
`;

const WIPButton = styled.button`
    padding: 0.5rem;
    background: rgba(128, 128, 128, 0.2);
    color: rgba(128, 128, 128, 0.2);
    font-size: 1rem;
    border: 1px solid rgba(128, 128, 128, 0.2);
    border-radius: 15px;
`;

const HeaderButtonsGroup = () => {
    return (
        <>
            <FlexTape>
                <Link to={'/'}>
                    <HeaderButton>Home</HeaderButton>
                </Link>
                <Link to={'/leaderboard'}>
                    <HeaderButton>Leaderboard</HeaderButton>
                </Link>
            </FlexTape>
        </>
    );
};

export default HeaderButtonsGroup;
