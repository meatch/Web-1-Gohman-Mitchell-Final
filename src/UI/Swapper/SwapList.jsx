import React from 'react';
import styled from 'styled-components';

import Swap from './Swap.jsx';

const SwapList = () => {
    return (
        <SwapListStyled className='SwapList'>
            SwapList
            <Swap />
            <Swap />
            <Swap />
        </SwapListStyled>
    );
}

export default SwapList;

const SwapListStyled = styled.div`

`;