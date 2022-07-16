import React from 'react';
import styled from 'styled-components';

// Scripts
import { defaultMediaQueries } from 'UI/common/useMediaQuery.js';

// Components
import SiteLogo from 'UI/common/SiteLogo.jsx';

const Footer = () => {
    return (
        <FooterStyled className='Footer'>
            <div className="logo">
                <SiteLogo />
            </div>
            <h2>CrossFit Decimate :: Peace, Love, Unity, Fitness, Chill, and Respect :: Colorado Springs, CO</h2>
            <div className="copyright">&copy; 2022. All rights reserved.</div>
        </FooterStyled>
    );
}

export default Footer;

const FooterStyled = styled.footer`
    background-color: #014444;
    color: white;

    padding: 20px 0px;
    margin: 50px 0px 0px;

    text-align: center;

    .logo {
        display: flex;
        justify-content: center;
    }

    .SiteLogo {
        margin-bottom: 10px;
        width: 150px;
        @media ${defaultMediaQueries.mdUp} {
            width: 300px;
        }
    }

    h2 {
        color: white;
        margin: 5px 0px;
        font-size: 14px;
    }

    .copyright {
        font-size: 14px;
        color: white;
    }

`;