import React, { useContext } from 'react';
import styled from 'styled-components';

/* Context ---------------------------*/
import Context from './Context/index.js';
import { showModalUpdate } from './Context/actions.js';

const ActiveArea = ({children}) => {

    const { dispatch } = useContext(Context);

    const clickHandler = () => {
        dispatch(showModalUpdate(true));
    }

    return (
        <ActiveAreaStyled className='ActiveArea' onClick={ clickHandler }>
            { children }
        </ActiveAreaStyled>
    );
}

export default ActiveArea;

const ActiveAreaStyled = styled.div`

`;