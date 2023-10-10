import React from 'react';
import { BlogType } from '../Types';
import styled from 'styled-components';
import { useOutletContext } from 'react-router-dom';
import BlogList from '../components/Home/BlogList';

const PageContainer = styled.div`
    margin: 0 10%;
    padding-top: 5rem;
    display: flex;
    justify-content: center;
    gap: 3rem;
`;

const HeroContainer = styled.div`
    width: 30vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const HeroImage = styled.img`
    height: 40vh;
    width: 100%;
`;

const HeroTitle = styled.h1`
    font-size: 4rem;
    color: whitesmoke;
    max-width: min-content;
    padding-left: 1rem;
    line-height: 3rem;
`;

const HeroText = styled.p`
    font-size: 2rem;
    color: whitesmoke;
    text-align: center;
`;

const HomePage = () => {
    const { blogData }: any = useOutletContext();
    return (
        <>
            <Background>
                <PageContainer>
                    <HeroContainer className="HomePageImage">
                        <HeroImage src="https://www.megavoxels.com/wp-content/uploads/2023/06/Pixel-Art-Duck-6-1015x1024.jpeg" />
                        <HeroTitle>BYTESTORM</HeroTitle>
                        <HeroText>
                            A pixel top down bullethell game with roguelike
                            elements.
                        </HeroText>
                    </HeroContainer>
                    <BlogList blogData={blogData} />
                </PageContainer>
            </Background>
        </>
    );
};

export default HomePage;
