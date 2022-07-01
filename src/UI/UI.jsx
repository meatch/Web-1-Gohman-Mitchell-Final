import React from 'react';
import styled from 'styled-components';

import Swap from './Swapper/Swap.jsx';

const UI = () => {

    const clickMe = () => {
        alert('You got me partner');
    }

    return (
        <UIStyled className='UI'>
            <h1>Final Project</h1>
            <div className="student-name" onClick={ clickMe }>
                Mitch Gohman
            </div>

            <Swap />

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