import { createRoot } from 'react-dom/client';
import { StyledEngineProvider, createTheme, ThemeProvider } from '@mui/material';

import App from './App.tsx';
import './index.css';

const rootElement: HTMLElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

const theme = createTheme({
    components: {
        MuiPopover: {
            defaultProps: {
                container: rootElement,
            },
        },
        MuiPopper: {
            defaultProps: {
                container: rootElement,
            },
        },
        MuiDialog: {
            defaultProps: {
                container: rootElement,
            },
        },
        MuiModal: {
            defaultProps: {
                container: rootElement,
            },
        },
    },
});

root.render(
    <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </StyledEngineProvider>,
);
