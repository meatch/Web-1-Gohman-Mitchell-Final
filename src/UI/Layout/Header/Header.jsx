import React from 'react';
import styled from 'styled-components';

// Scripts
import { useMediaQuery } from 'UI/common/useMediaQuery.js';

// Components
import MediumLargeView from './MediumLargeView/MediumLargeView.jsx';
import SmallView from './SmallView/SmallView.jsx';

const Header = () => {

    const { media } = useMediaQuery();

    return (
        <HeaderStyled className='Header'>
            Header
            {
                (media.mdUp) ? <MediumLargeView /> : <SmallView />
            }
        </HeaderStyled>
    );
}

export default Header;

const HeaderStyled = styled.header`
    background-color: #014444;
    color: white;

    h2 {
        color: white;
    }
`;