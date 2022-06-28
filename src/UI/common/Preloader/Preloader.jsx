import React from 'react';
import styled from 'styled-components';

import { ReactComponent as PreloaderSVG } from './spinner-rainbow.svg';

const Preloader = () => {
    return (
        <PreloaderStyled className='Preloader'>
            <PreloaderSVG />
        </PreloaderStyled>
    );
}

export default Preloader;

const PreloaderStyled = styled.div`
    margin: 150px auto;
`;