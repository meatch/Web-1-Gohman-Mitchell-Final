import React from 'react';
import styled from 'styled-components';
import { Outlet, NavLink } from 'react-router-dom';

const ClassWork = () => {
    return (
        <ClassWorkStyled className='ClassWork'>
            <h1>Class Work</h1>

            <nav className='sublinks'>
                <NavLink to='/class'>Essays</NavLink>
                <NavLink to='/class/swapper'>Swapper</NavLink>
            </nav>

            <Outlet />

        </ClassWorkStyled>
    );
}

export default ClassWork;

const ClassWorkStyled = styled.div`
    nav.sublinks a {
        background-color: maroon;
    }
`;