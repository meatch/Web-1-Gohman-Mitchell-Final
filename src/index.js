/*---------------------------
| IE 11 Support
---------------------------*/
import 'react-app-polyfill/ie11';

/*---------------------------
| React and 3rd Party Libraries
---------------------------*/
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

/*---------------------------
| Components
---------------------------*/
import UI from 'UI/UI.jsx';

/*---------------------------
| Compose
---------------------------*/
const App = () => {
    return (
        <BrowserRouter>
            <UI />
        </BrowserRouter>
    )
}

/*---------------------------
| Render to DOM
---------------------------*/
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);