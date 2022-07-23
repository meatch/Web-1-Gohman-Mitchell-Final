import React, { useState } from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { tabbedData } from 'UI/common/data/tabbedData.js';

/* Components ---------------------------*/
import TabMenuList from './TabMenu/TabMenuList.jsx';
import TabContent from './TabContent.jsx';

const Tabbed = () => {

    const [ curTab, curTabUpdate ] = useState(tabbedData[0]);

    return (
        <TabbedStyled className='Tabbed inset'>
            <TabMenuList curTab={ curTab } curTabUpdate={ curTabUpdate } tabbedData={ tabbedData } />
            <TabContent curTab={ curTab } />
        </TabbedStyled>
    );
}

export default Tabbed;

const TabbedStyled = styled.div`

`;