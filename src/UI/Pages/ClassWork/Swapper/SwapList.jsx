import React from 'react';
import styled from 'styled-components';

import { swapperData } from 'UI/common/data/swapperData.js';

import Swap from './Swap.jsx';

const SwapList = () => {
    return (
        <SwapListStyled className='SwapList'>
            SwapList
            {
                swapperData.map((swapData, idx) => {
                    return <Swap key={ idx } swapData={ swapData } />
                })
            }

        </SwapListStyled>
    );
}

export default SwapList;

const SwapListStyled = styled.div`

`;