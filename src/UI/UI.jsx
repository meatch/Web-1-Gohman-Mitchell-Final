import React from 'react';
import styled from 'styled-components';

const UI = () => {
    return (
        <UIStyled className='UI'>
            <h1>Web Starter Project</h1>
            <div className="student-name">
                Mitch Gohman
            </div>
        </UIStyled>
    );
}

export default UI;

const UIStyled = styled.div`
    background-color: teal;
    margin: 50px auto;
    padding: 50px;
    max-width: 500px;
    text-align: center;

    .student-name {
        color: white;
        font-size: 30px;
    }
`;