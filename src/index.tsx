import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const theme = createTheme({
    palette: {
        primary: {
            main: '#4D7198',
        }/*,
        secondary: {
            main: '#11cb5f',
        }*/
    },
});

root.render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>

    </BrowserRouter>
);

