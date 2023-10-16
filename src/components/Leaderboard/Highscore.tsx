const Highscore = ({ name, score, id, place }: any) => {
    return (
        <>
            <div key={id}>
                <h1>{place + 1}</h1>
                <h1>{name}</h1>
                <h2>{score}</h2>
            </div>
        </>
    );
};

export default Highscore;
