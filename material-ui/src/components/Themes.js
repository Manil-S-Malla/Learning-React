import { createMuiTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import '@fontsource/roboto';


const twoButtonTheme = createMuiTheme({
    palette: {
        primary: {
            main: green[700],
            contrastText: '#fff',
        },
        secondary: {
            light: '#c54949',
            main: '#b71c1c',
            dark: '#801313',
            contrastText: '#fff',
        },
    },
    typography: {
        h3: {
            color: green[900],
        }
    }
});

const textTheme = createMuiTheme({
    typography: {
        h3: {
            color: green[500],
        }
    }
});

export { twoButtonTheme, textTheme };