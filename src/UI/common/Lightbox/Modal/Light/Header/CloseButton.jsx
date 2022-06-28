import React, { useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTimes,
} from '@fortawesome/free-solid-svg-icons';

/* Context ---------------------------*/
import Context from '../../../Context/index.js';
import { showModalUpdate } from '../../../Context/actions.js';

const CloseButton = () => {

    const { dispatch } = useContext(Context);

    const handleOnClick = () => {
        dispatch(showModalUpdate(false));
    }

    return (
        <CloseButtonStyled className='CloseButton' onClick={ handleOnClick }>
            <FontAwesomeIcon icon={ faTimes } />
        </CloseButtonStyled>
    );
}

export default CloseButton;

const CloseButtonStyled = styled.button`
    background-color: transparent;
    border: none;

    display: block;
    width: 100%;
    height: 40px;
    padding: 10px;
    text-align: center;
    font-size: 14px;
    cursor: pointer;

    opacity: .7;
    color: white;

    &:hover {
        opacity: 1;
    }
    &:active {
        color: yellow;
    }
`;