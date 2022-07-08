import React from 'react';
import styled from 'styled-components';

import SwapList from './Swapper/SwapList.jsx';

const UI = () => {

    return (
        <UIStyled className='UI'>
            <h1>Final Project</h1>
            <div className="student-name">
                Mitch Gohman S4 Complete
            </div>

            <SwapList />

        </UIStyled>
    );
}

export default UI;

const UIStyled = styled.div`
    background-color: #26750c;
    margin: 50px auto;
    padding: 50px;
    max-width: 800px;
    text-align: center;

    .student-name {
        color: white;
        font-size: 30px;
    }
`;