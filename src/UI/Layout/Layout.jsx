import React from 'react';
import styled from 'styled-components';

import Header from './Header/Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer/Footer.jsx';

const Layout = ({children}) => {
    return (
        <LayoutStyled className='Layout'>
            <Header />
            <Main>
                { children }
            </Main>
            <Footer />
        </LayoutStyled>
    );
}

export default Layout;

const LayoutStyled = styled.div`

`;