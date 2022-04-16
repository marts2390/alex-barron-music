import { createTheme } from '@mui/material/styles'
import { alpha } from '@mui/material'
import ThemeVariables from './variables'

declare module '@mui/material/styles' {
  interface Palette {
    greyBackground: Palette['primary'];
    primaryFaded: Palette['primary'];
    white: Palette['primary'];
    dark: Palette['primary'];
    link: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    greyBackground?: PaletteOptions['primary'];
    primaryFaded?: PaletteOptions['primary'];
    white?: PaletteOptions['primary'];
    dark?: PaletteOptions['primary'];
    link?: PaletteOptions['primary'];
  }
}

const { colours, fontSizes, fontWeights, fonts } = ThemeVariables

let theme = createTheme({
  palette: {
    primary: {
      main: colours.primary,
    },
    secondary: {
      main: colours.white,
    },
    info: {
      main: colours.black,
    },
    error: {
      main: colours.error,
    },
    greyBackground: {
      main: colours.background,
    },
    primaryFaded: {
      main: alpha(colours.primary, 0.15)
    },
    white: {
      main: colours.white
    },
    dark: {
      main: colours.black
    },
    link: {
      main: colours.blue
    }
  },
  typography: {
    h1: {
      fontFamily: fonts.title,
      fontSize: fontSizes.xxxl,
      letterSpacing: '0.1em',
      color: colours.black,
      fontWeight: fontWeights.bold,
    },
    h2: {
      fontFamily: fonts.title,
      fontSize: fontSizes.xxl,
      fontWeight: fontWeights.bold,
      letterSpacing: '0.2em',
      color: colours.black,
    },
    h3: {
      fontFamily: fonts.title,
      fontSize: fontSizes.xl,
      fontWeight: fontWeights.bold,
      letterSpacing: '0.1em',
      color: colours.black,
    },
    h4: {
      fontFamily: fonts.title,
      fontSize: fontSizes.lg,
      letterSpacing: '0.1em',
      fontWeight: fontWeights.bold,
      color: colours.black,
    },
    h5: {
      fontFamily: fonts.main,
      fontSize: fontSizes.md,
      fontWeight: fontWeights.semibold,
      color: colours.black,
    },
    h6: {
      fontFamily: fonts.main,
      fontSize: fontSizes.md,
      fontWeight: fontWeights.semibold,
      color: colours.black,
      opacity: 0.8,
    },
    body1: {
      fontFamily: fonts.main,
      fontSize: fontSizes.sm,
      fontWeight: fontWeights.regular,
      color: colours.black,
    },
    body2: {
      fontFamily: fonts.main,
      fontSize: fontSizes.xs,
      fontWeight: fontWeights.regular,
      color: colours.black,
      opacity: 0.8,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          fontFamily: fonts.title,
          fontWeight: fontWeights.bold,
          boxShadow: 'none',
          padding: '0.75em',
          borderRadius: 0
        },
        sizeSmall: {
          fontSize: fontSizes.xs,
          padding: '0.5em',
          minWidth: '8em',
        },
        text: {
          color: colours.black,
          opacity: 0.6,
          paddingLeft: 0,
        },
        outlined: {
          borderColor: colours.primary,
          minWidth: '10em',
          color: colours.black,
        },
        contained: {
          minWidth: '10em',
          color: 'black',
        },
      },
    },
  }
})

export default theme
