import React, { useReducer } from 'react';
import styled from 'styled-components';

/* Context ---------------------------*/
import Context from './Context/index.js';
import reducer from './Context/reducer.js';

/* Exposed Components ---------------------------*/
export { default as ActiveArea } from './ActiveArea.jsx';
export { default as Modal } from './Modal/Modal.jsx';


const Lightbox = ({children, title, displayName='Universal Lightbox'}) => {

    const defaultFormData = {
        showModal: false,
        title: title,
    };

    const [state, dispatch] = useReducer(reducer, defaultFormData);

    return (
        <Context.Provider value={ {state, dispatch} } displayName={ `${displayName}: ${title}` }>
            <LightboxStyled className='Lightbox'>
                { children }
            </LightboxStyled>
        </Context.Provider>
    );
}

export default Lightbox;

const LightboxStyled = styled.div`

`;