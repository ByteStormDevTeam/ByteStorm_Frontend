import axios from 'axios';
import { LeaderType } from '../../Types';
import { useQuery } from 'react-query';
import Highscore from './Highscore';
import { useState } from 'react';

const HighscoreList = () => {
    const fetchDBData = async (pageNumber: number) => {
        const res = await axios.get(
            `http://54.74.199.55:8080/api/leaderboard?page=${pageNumber}&pageSize=10`
        );
        return res.data;
    };
    const [pageNumber, setPageNumber] = useState(0);

    const {
        data: leaderboardData,
        error: leaderboardError,
        isLoading: leaderboardLoading,
        refetch,
    } = useQuery(['leaderboards', pageNumber], () => fetchDBData(pageNumber));

    const handleNextPage = () => {
        const nextPage = pageNumber + 1;
        setPageNumber(nextPage);
        refetch();
    };

    if (leaderboardLoading) {
        return <div>Loading...</div>;
    }

    if (leaderboardError) {
        console.error('Database Error:', leaderboardError);
        return (
            <div>Error fetching leaderboard data. Please try again later.</div>
        );
    }
    if (!leaderboardData) {
        return <h1>Loading...</h1>;
    }

    const leaders = leaderboardData.content.map(
        (leader: LeaderType, index: number) => (
            <li key={leader._id}>
                <Highscore
                    name={leader.name}
                    score={leader.score}
                    id={leader._id}
                    place={index}
                />
            </li>
        )
    );

    return (
        <>
            <ul>{leaders}</ul>
            <button onClick={handleNextPage}>Next Page</button>
        </>
    );
};

export default HighscoreList;
