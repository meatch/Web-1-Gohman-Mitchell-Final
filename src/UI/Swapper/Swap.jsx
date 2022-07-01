// Importing Dependencies
import React from 'react';
import styled from 'styled-components';

// This is my Component function
const Swap = () => {
    return (
        <SwapStyled>
            <img src='/assets/img/swapper/sunAndMoon/sun.png' />
        </SwapStyled>
    )
}

// Exporting my Component function
export default Swap;

const SwapStyled = styled.div`
    border: solid 15px purple;
`;
