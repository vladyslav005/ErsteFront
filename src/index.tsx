import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './common/App';
import {BrowserRouter} from "react-router-dom";

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import {MenuState} from "./features/menudrawer/context/MenuDrawerContext";
import {BucketContext, BucketsState} from "./features/bucket/context/BucketContext";
import {LocationState} from "./features/map/context/LocationContext";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);



root.render(
    <React.StrictMode>

      <BrowserRouter>
        <MenuState>
          <BucketsState>
            <LocationState>
            <App/>
            </LocationState>
          </BucketsState>
        </MenuState>
      </BrowserRouter>

    </React.StrictMode>
);

serviceWorkerRegistration.register();