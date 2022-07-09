import React from 'react';
import styled from 'styled-components';

import MainMenu from './MainMenu.jsx';

const Header = () => {
    return (
        <HeaderStyled className='Header'>
            Header

            <MainMenu />
        </HeaderStyled>
    );
}

export default Header;

const HeaderStyled = styled.div`
    background-color: #014444;
    color: white;
`;