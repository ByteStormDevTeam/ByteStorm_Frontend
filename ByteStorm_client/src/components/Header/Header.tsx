import React from 'react';
import styled from 'styled-components';
import HeaderButtonsGroup from './HeaderButtonsGroup';

const Headerdiv = styled.div`
    height: 3rem;
    position: sticky;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #490057;
`;
const Container = styled.div`
    margin: 0 15%;
`;

const Header = () => {
    return (
        <>
            <Headerdiv>
                <Container>
                    <HeaderButtonsGroup />
                </Container>
            </Headerdiv>
        </>
    );
};

export default Header;
