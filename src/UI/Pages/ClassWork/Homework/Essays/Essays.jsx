import React from 'react';
import styled from 'styled-components';

import Essay from './Essay.jsx';

const Essays = () => {
    return (
        <EssaysStyled className='Essays'>
            <h3>Essays</h3>

            <Essay q='Q1: Explain the difference between HTML, CSS and JavaScript.'>
                <p>HTML: Hypertext markup language: Foundation of coding, structure (hierarchy, and descriptive).</p>
                <p>CSS: (Cascading Stylesheets) Styling for the appearance of things (Fonts, Layout - composition)</p>
                <p>JavaScript: Interaction (Behavior), Popular, and amazing language</p>
            </Essay>

            <Essay q='Q2: What is the difference between Git, Github and Heroku?'>
                <p>Git: Version Control System, track source code history (Ultimate Undo) - allows for collaboration.</p>
                <p>Github: A cloud based hosting service to store your git repos.</p>
                <p>Heroku: Platform to deploy your source code and serve up your website.</p>
            </Essay>

            <Essay q='Q3: What are Single Page Apps (SPAs)? How do they differ from traditional multi-page Web Sites?'>
                <p>Single Page apps - load a single page, interacts with user, and requests to server are in chunks instead of the entire page load.</p>
                <p>Multi-Page: Make a request every time you switch pages.</p>
            </Essay>

            <Essay q='Q4: What is the difference between Web Designer, Front End Developer and Back End Developer?'>
                <p>Web Designer: UX/Visual Design  - creating prototypes for Developers to translate to HTML, CSS and JS</p>
                <p>Front End Developer: client-side: Works on the HTMl/CSS/JS - what shows up in the browser</p>
                <p>Back End Developer: Works on the Web server-side.</p>
            </Essay>

            <Essay q='Q5: Distinguish the difference between Site Relative, Document Relative, and Absolute Paths.'>
                <p>My Answer 3 will go here.</p>
            </Essay>

        </EssaysStyled>
    );
}

export default Essays;

const EssaysStyled = styled.div`

`;