import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MainMenu = () => {
    return (
        <MainMenuStyled className='MainMenu'>
            <h2>Main Menu</h2>
            <NavLink to={ '/' }>Home</NavLink>
            <NavLink to={ '/staff' }>Staff</NavLink>
            <NavLink to={ '/contact' }>Contact</NavLink>
            <NavLink to={ '/login' }>Login</NavLink>
        </MainMenuStyled>
    );
}

export default MainMenu;

const MainMenuStyled = styled.div`

`;