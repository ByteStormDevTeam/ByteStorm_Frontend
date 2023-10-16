import HighscoreList from '../components/Leaderboard/HighscoreList';
import styled from 'styled-components';

const HeroImageWrapper = styled.div`
    height: 70vh;
    overflow: hidden;
    border-bottom: 1px solid rgba(0, 0, 0, 0.33);
    box-shadow: 2px 0px 16px black;
`;
const HeroImage = styled.img`
    width: 100vw;
`;

const ScoreListWrapper = styled.div`
    position: absolute;
    top: 30%;
    left: 43%;
    background-color: palegoldenrod;
    border-radius: 25px;
    border: 1px solid whitesmoke;
`;
const LeaderboardPage = () => {
    return (
        <>
            <HeroImageWrapper>
                <HeroImage src="https://i.gyazo.com/453ae6401482394a5a0fce7c27a762c9.png" />
            </HeroImageWrapper>
            <ScoreListWrapper>
                <HighscoreList />
            </ScoreListWrapper>
        </>
    );
};

export default LeaderboardPage;
