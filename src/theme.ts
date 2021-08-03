import { createTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: green.A400,
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#333',
        },
    },
});

export default theme;