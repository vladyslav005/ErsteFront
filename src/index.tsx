import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './common/App';
import {BrowserRouter} from "react-router-dom";

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>

      <BrowserRouter>
        <App/>
      </BrowserRouter>

    </React.StrictMode>
);

serviceWorkerRegistration.register();