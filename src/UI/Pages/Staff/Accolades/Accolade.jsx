import React from 'react';
import styled from 'styled-components';

const Accoldade = ({accolade}) => {
    return (
        <AccoldadeStyled className='Accoldade'>
            { accolade }
        </AccoldadeStyled>
    );
}

export default Accoldade;

const AccoldadeStyled = styled.li`

`;