import React from 'react';
import styled from 'styled-components';

import SwapList from './Swapper/SwapList.jsx';
import Homework from './Homework/Homework.jsx';

const ClassWork = () => {
    return (
        <ClassWorkStyled className='ClassWork'>
            <h1>Class Work</h1>
            <SwapList />
            <Homework />
        </ClassWorkStyled>
    );
}

export default ClassWork;

const ClassWorkStyled = styled.div`

`;