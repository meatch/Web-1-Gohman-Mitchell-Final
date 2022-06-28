import React, { useContext } from 'react';
import styled from 'styled-components';

/* Context ---------------------------*/
import Context from '../../../Context/index.js';

const Title = () => {

    const { state } = useContext(Context);

    return (
        <TitleStyled className='Title'>
            { state.title }
        </TitleStyled>
    );
}

export default Title;

const TitleStyled = styled.h4`
    font-size: 16px;
    margin: 0px;
    padding: 0px 10px;
    line-height: 40px;
`;