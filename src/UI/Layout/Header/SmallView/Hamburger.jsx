import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
} from '@fortawesome/free-solid-svg-icons';

const Hamburger = ({showMenuUpdate, showMenu}) => {

    const onClick = () => {
        showMenuUpdate(!showMenu);
    }

    return (
        <HamburgerStyled className='Hamburger' onClick={ onClick }>
            <FontAwesomeIcon icon={ faBars } />
        </HamburgerStyled>
    );
}

export default Hamburger;

const HamburgerStyled = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;

    font-size: 30px;
    color: white;
    cursor: pointer;
`;