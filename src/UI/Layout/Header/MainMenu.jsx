import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MainMenu = () => {
    return (
        <MainMenuStyled className='MainMenu'>
            <NavLink to={ '/' }>Home</NavLink>
            <NavLink to={ '/staff' }>Staff</NavLink>
            <NavLink to={ '/contact' }>Contact</NavLink>
            <NavLink to={ '/login' }>Login</NavLink>
            <NavLink to={ '/class' }>Class</NavLink>
        </MainMenuStyled>
    );
}

export default MainMenu;

const MainMenuStyled = styled.div`

    a {
        color: white;
        margin: 0px 20px;
    }
`;