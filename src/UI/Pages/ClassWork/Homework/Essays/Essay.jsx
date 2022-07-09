import React from 'react';
import styled from 'styled-components';

const Essay = ({q, children}) => {
    return (
        <EssayStyled className='Essay'>
            <h3>{ q }</h3>
            <div className="answer">
                { children }
            </div>
        </EssayStyled>
    );
}

export default Essay;

const EssayStyled = styled.div`
    background-color: gray;
    margin: 20px 0px;
    border: solid 2px teal;
    text-align: left;

    h3 {
        margin: 0px;
        background-color: #014444;
        padding: 10px 20px;
        color: white;
    }

    .answer {
        background-color: white;
        padding: 20px;
    }
`;