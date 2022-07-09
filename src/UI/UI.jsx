import React from 'react';
import styled from 'styled-components';

import Layout from './Layout/Layout.jsx';
import Routing from './Routing.jsx';

const UI = () => {

    return (
        <UIStyled className='UI'>
            <Layout>
                <Routing />
            </Layout>
        </UIStyled>
    );
}

export default UI;

const UIStyled = styled.div`

`;