import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const ClassMenu = () => {
    return (
        <ClassMenuStyled className='ClassMenu'>
            <h2>Class Menu</h2>
            <NavLink to={ '/class' }>Class</NavLink>
        </ClassMenuStyled>
    );
}

export default ClassMenu;

const ClassMenuStyled = styled.div`

`;