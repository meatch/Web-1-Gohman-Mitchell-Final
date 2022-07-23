import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { staffData } from 'UI/common/data/staffData.js';

/* Components ---------------------------*/
import StaffMember from './StaffMember.jsx';

const StaffList = () => {
    return (
        <StaffListStyled className='StaffList'>
            <div className="wrapper">
                {
                    staffData.map((member, idx) => {
                        return <StaffMember key={ idx } member={ member } />
                    })
                }
            </div>
        </StaffListStyled>
    );
}

export default StaffList;

const StaffListStyled = styled.div`
    background-color: teal;
    padding: 20px;
    margin: 20px 0px;

    .wrapper {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
`;