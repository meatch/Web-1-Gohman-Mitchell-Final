import React from 'react';
import styled from 'styled-components';

import Essay from './Essay.jsx';

const Essays = () => {
    return (
        <EssaysStyled className='Essays'>
            <h3>Essays</h3>

            <Essay q='Q1: Explain the difference between HTML, CSS and JavaScript.'>
                <p>My Answer 1 will go here.</p>
                <p>My Answer 1 will go here.</p>
                <p>My Answer 1 will go here.</p>
            </Essay>

            <Essay q='Q2: What is the difference between Git, Github and Heroku?'>
                <p>My Answer 2 will go here.</p>
            </Essay>

            <Essay q='Q3: What are Single Page Apps (SPAs)? How do they differ from traditional multi-page Web Sites?'>
                <p>My Answer 3 will go here.</p>
            </Essay>

            <Essay q='Q4: What is the difference between Web Designer, Front End Developer and Back End Developer?'>
                <p>My Answer 3 will go here.</p>
            </Essay>

        </EssaysStyled>
    );
}

export default Essays;

const EssaysStyled = styled.div`

`;