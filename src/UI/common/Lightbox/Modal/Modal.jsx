import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';

/* Context ---------------------------*/
import Context from '../Context/index.js';
import { showModalUpdate } from '../Context/actions.js';

/* Components ---------------------------*/
import Dark from './Dark.jsx';
import Light from './Light/Light.jsx';

const Modal = ({children}) => {

    const {dispatch, state} = useContext(Context);

    // Component Did Mount
    useEffect(() => {
        const handleOnKeyDown = (e) => {
            if (e.keyCode === 27) {
                dispatch(showModalUpdate(false));
            }
        }

        document.addEventListener("keydown", handleOnKeyDown);

        // dismounts
        return () => {
            document.removeEventListener("keydown", handleOnKeyDown);
        }
    }, []);

    if (!state.showModal) { return ''; }

    return (
        <ModalStyled className='Modal'>
            <Dark />
            <Light>
                { children }
            </Light>
        </ModalStyled>
    );
}

export default Modal;

const ModalStyled = styled.div`
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 0px;
    top: 0px;

    z-index: 1000;

`;