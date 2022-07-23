import React from 'react';
import styled from 'styled-components';

import Accolade from './Accolade.jsx';

const AccoladesList = ({accolades}) => {
    return (
        <AccoladesListStyled className='AccoladesList'>
            {
                accolades.map((accolade, idx) => {
                    return <Accolade key={ idx } accolade={ accolade } />
                })
            }
        </AccoladesListStyled>
    );
}

export default AccoladesList;

const AccoladesListStyled = styled.ul`

`;