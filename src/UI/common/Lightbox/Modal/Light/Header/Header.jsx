import React from 'react';
import styled from 'styled-components';

import Title from './Title.jsx';
import CloseButton from './CloseButton.jsx';

const Header = () => {
    return (
        <HeaderStyled className='Header'>
            <Title />
            <CloseButton/>
        </HeaderStyled>
    );
}

export default Header;

const HeaderStyled = styled.div`
    display: flex;
    background-color: #014444;

    h4 {
        color: white;
        flex: 1;
    }

    .CloseButton {
        flex: 0 0 30px;
    }

`;