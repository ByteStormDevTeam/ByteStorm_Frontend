import axios from 'axios';
import { LeaderType } from '../../Types';
import { useQuery } from 'react-query';
import Highscore from './Highscore';

const fetchDBData = async () => {
    const res = await axios.get('http://54.74.199.55:8080/api/leaderboard/');
    return res.data;
};

const HighscoreList = () => {
    const {
        data: leaderboardData,
        error: leaderboardError,
        isLoading: leaderboardLoading,
    } = useQuery('leaderboards', fetchDBData);

    if (leaderboardLoading) {
        return <div>Loading...</div>;
    }

    if (leaderboardError) {
        console.error('Database Error:', leaderboardError);
        return (
            <div>Error fetching leaderboard data. Please try again later.</div>
        );
    }
    const leaders = leaderboardData.map((leader: LeaderType, index: number) => (
        <>
            <li key={leader._id}>
                <Highscore
                    name={leader.name}
                    score={leader.score}
                    id={leader._id}
                    place={index}
                />
            </li>
        </>
    ));

    return <>{leaders}</>;
};

export default HighscoreList;
