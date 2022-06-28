import React from 'react';
import styled from 'styled-components';

const Main = ({children}) => {
    return (
        <MainStyled className='Main'>
            { children }
        </MainStyled>
    );
}

export default Main;

const MainStyled = styled.div`
    padding: 10px;

    img {
        width: 100%;
    }
`;