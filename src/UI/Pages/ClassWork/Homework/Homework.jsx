import React from 'react';
import styled from 'styled-components';

import Essays from './Essays/Essays.jsx';

const Homework = () => {
    return (
        <HomeoworkStyled className='Homework'>
            <h2>Homework</h2>
            <Essays />
        </HomeoworkStyled>
    );
}

export default Homework;

const HomeoworkStyled = styled.div`

`;