import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './common/App';
import {BrowserRouter} from "react-router-dom";

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import {MenuState} from "./features/menudrawer/context/MenuDrawerContext";
import {BucketsState} from "./features/bucket/context/BucketContext";
import {createMuiTheme, ThemeProvider} from "@mui/material";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6714e1',
      light: '#713aef',
      dark: '#3f0c9f',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#d32f2f',
      light: '#ff6659',
      dark: '#9a0007',
      contrastText: '#ffffff',
    },
    error: {
      main: '#f44336',
      light: '#e57373',
      dark: '#d32f2f',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#ffa000',
      light: '#ffc947',
      dark: '#c67100',
      contrastText: '#000000',
    },
    info: {
      main: '#0288d1',
      light: '#5eb8ff',
      dark: '#005b9f',
      contrastText: '#ffffff',
    },
    success: {
      main: '#4caf50',
      light: '#80e27e',
      dark: '#087f23',
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
  },
  spacing: 8, // Default spacing for paddings and margins
});


root.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <MenuState>
            <BucketsState>
              <App/>
            </BucketsState>
          </MenuState>
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
);

serviceWorkerRegistration.register();