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
import { MediaQueryProvider } from 'UI/common/useMediaQuery.js';

/*---------------------------
| Components
---------------------------*/
import UI from 'UI/UI.jsx';

/*---------------------------
| Compose
---------------------------*/
const App = () => {
    return (
        <MediaQueryProvider>
            <BrowserRouter>
                <UI />
            </BrowserRouter>
        </MediaQueryProvider>
    )
}

/*---------------------------
| Render to DOM
---------------------------*/
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);