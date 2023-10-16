import styled from 'styled-components';

const ScoreEntry = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    font-family: 'Pixelify Sans';
    font-weight: 400;
    padding: 1rem;
`;

const Highscore = ({ name, score, id, place }: any) => {
    return (
        <>
            <ScoreEntry key={id}>
                <h1>{place + 1}</h1>
                <h1>{name}</h1>
                <h2>{score}</h2>
            </ScoreEntry>
        </>
    );
};

export default Highscore;
