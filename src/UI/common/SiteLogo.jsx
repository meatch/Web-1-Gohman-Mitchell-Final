import React from 'react';
import styled from 'styled-components';

const SiteLogo = () => {
    return (
        <SiteLogoStyled className='SiteLogo'>
            <img src='/assets/img/crossfit-decimate-logo.png' alt='CrossFit Decimate Logo' />
        </SiteLogoStyled>
    );
}

export default SiteLogo;

const SiteLogoStyled = styled.div`
    color: #13bbbb;
    width: 100%;
    height: 100%;

    img {
        width: 100%;
        height: auto;
    }
`;