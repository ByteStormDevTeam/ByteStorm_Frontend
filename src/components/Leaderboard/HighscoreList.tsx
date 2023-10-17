import axios from 'axios';
import { LeaderType } from '../../Types';
import { useQuery } from 'react-query';
import Highscore from './Highscore';
import { useState } from 'react';
import styled from 'styled-components';

const PageButton = styled.button`
    padding: 1rem;
    margin: 0.5rem;
    background-color: rgba(255, 255, 255, 0.3);
    border: 1px solid whitesmoke;
    border-radius: 15px;
    &:hover {
        cursor: pointer;
        background: whitesmoke;
        color: black;
    }
`;

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
        if (leaderboardData.totalPages - 1 == pageNumber) {
            setPageNumber(0);
        } else {
            const nextPage = pageNumber + 1;
            setPageNumber(nextPage);
            refetch();
        }
    };
    const handlePrevPage = () => {
        const prevPage = pageNumber - 1;
        setPageNumber(prevPage);
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
                    place={index + pageNumber * 10}
                />
            </li>
        )
    );

    return (
        <>
            <ul>{leaders}</ul>
            <PageButton onClick={handleNextPage}>Next Page</PageButton>
            {pageNumber > 0 ? (
                <PageButton onClick={handlePrevPage}>Prev Page</PageButton>
            ) : null}
        </>
    );
};

export default HighscoreList;
