import { ThemeOptions, createTheme } from '@mui/material/styles'
const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#607D8B',
      light: '#CFD8DC',
      dark: '#455A64',
    },
    secondary: {
      main: '#CDDC39',
    },
    divider: '#BDBDBD',
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
  },
}

export const theme = createTheme(themeOptions)
