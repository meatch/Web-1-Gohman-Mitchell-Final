import React, { useContext } from 'react';
import styled from 'styled-components';

/* Context ---------------------------*/
import Context from '../Context/index.js';
import { showModalUpdate } from '../Context/actions.js';

const Dark = () => {

    const { dispatch } = useContext(Context);

    const handleOnClick = () => {
        dispatch(showModalUpdate(false));
    }

    return (
        <DarkStyled className='Dark' onClick={ handleOnClick } />
    );
}

export default Dark;

const DarkStyled = styled.div`
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    top: 0px;

    z-index: 1;

    background-color: rgba(0,0,0, 0.72);
`;