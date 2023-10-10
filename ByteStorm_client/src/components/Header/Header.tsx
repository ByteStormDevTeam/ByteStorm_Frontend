import styled from 'styled-components';
import HeaderButtonsGroup from './HeaderButtonsGroup';

const HeaderContainer = styled.div`
    position: fixed;
    width: 100vw;
`;

const Headerdiv = styled.div`
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #490057;
`;
const Container = styled.div`
    margin: 0 10%;
`;
const BorderLayer = styled.div`
    height: 2px;
    border-bottom: solid 1px #ffff00;
    box-shadow: 0px 4px 4px #ffff00;
`;

const BorderLayer2 = styled.div`
    height: 2px;
    border-bottom: solid 1px cyan;
`;

const Header = () => {
    return (
        <>
            <HeaderContainer>
                <Headerdiv>
                    <Container>
                        <HeaderButtonsGroup />
                    </Container>
                </Headerdiv>
                <BorderLayer />
                <BorderLayer2 />
                <BorderLayer />
            </HeaderContainer>
        </>
    );
};

export default Header;
