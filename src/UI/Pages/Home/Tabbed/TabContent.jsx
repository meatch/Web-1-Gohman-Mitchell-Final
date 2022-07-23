import React from 'react';
import styled from 'styled-components';

import { defaultMediaQueries } from 'UI/common/useMediaQuery.js';

const TabContent = ({ curTab }) => {
    return (
        <TabContentStyled className='TabContent'>
            <div className="left">
                <img src={ curTab.image } alt={ curTab.title } />
            </div>
            <div className="right">
                <h3>{ curTab.title }</h3>
                <div dangerouslySetInnerHTML={ { __html: curTab.text } } />
            </div>
        </TabContentStyled>
    );
}

export default TabContent;

const TabContentStyled = styled.div`
    padding: 20px;
    background-color: teal;

    @media ${ defaultMediaQueries.mdUp } {
        display: flex;
    }

    .left {
        flex: 1;
        img {
            width: 100%;
        }
    }
    .right {
        flex: 3;
        margin: 20px 0px 0px;

        @media ${ defaultMediaQueries.mdUp } {
            margin: 0px 0px 0px 20px;
        }

        h3 {
            font-size: 30px;
            color: white;
        }

        p {
            font-size: 18px;
            color: #8cc6c6;
            margin-bottom: 20px;
            line-height: 150%;
        }
    }
`;