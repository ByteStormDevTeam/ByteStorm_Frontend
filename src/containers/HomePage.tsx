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

const HeroImageWrapper = styled.div`
    height: 70vh;
    overflow: hidden;
    border-bottom: 1px solid rgba(0, 0, 0, 0.33);
    box-shadow: 2px 0px 16px black;
`;
const HeroImage = styled.img`
    width: 100vw;
`;

const HeroTitle = styled.h1`
    font-size: 4rem;
    color: whitesmoke;
    line-height: 3rem;
    font-family: 'Pixelify Sans';
    text-shadow: 2px 0px 16px black;
    position: absolute;
    top: 35%;
    left: 40.5%;
`;

const HeroText = styled.p`
    font-size: 2rem;
    color: whitesmoke;
    text-align: center;
    font-family: 'Pixelify Sans';
    font-weight: 300;
    text-shadow: 2px 0px 16px black;
    position: absolute;
    top: 40%;
    left: 35.5%;
`;
const HeroLink = styled.p`
    font-size: 2rem;
    color: whitesmoke;
    text-align: center;
    font-family: 'Pixelify Sans';
    font-weight: 300;
    text-decoration: underline;
    text-shadow: 2px 0px 16px black;
    position: absolute;
    top: 45%;
    left: 41.5%;
`;

const HomePage = () => {
    const { blogData }: any = useOutletContext();
    return (
        <>
            <HeroImageWrapper>
                <HeroImage src="https://i.gyazo.com/453ae6401482394a5a0fce7c27a762c9.png" />
            </HeroImageWrapper>
            <HeroContainer className="HomePageImage">
                <HeroTitle>BYTESTORM</HeroTitle>
                <HeroText>A pixel top down bullethell roguelike.</HeroText>
                <HeroLink>
                    <a href="https://oirien.itch.io/bytestorm">
                        Download Here Now!
                    </a>
                </HeroLink>
            </HeroContainer>
            <PageContainer>
                <BlogList blogData={blogData} />
            </PageContainer>
        </>
    );
};

export default HomePage;
