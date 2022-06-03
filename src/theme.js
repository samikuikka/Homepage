
import { createTheme } from '@mui/material/styles';
import FormHelperText from '@mui/material/FormHelperText';

let theme = createTheme({
  palette: {
    primary: {
      main: '#546e7a',
      light: '#819ca9',
      dark: '#29434e',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#b388ff',
      light: '#e7b9ff',
      dark: '#805acb',
      contrastText: '#000000'
    },
  },

});

export default theme;