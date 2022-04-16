import ThemeVariables from 'theme/variables'
import theme from 'theme/theme'

export const styles = {
  headerMenu: {
    display: 'inline-block',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    }
  },
  headerMenuItem: {
    transition: '0.3s ease',
    fontFamily: ThemeVariables.fonts.title,
    fontSize: ThemeVariables.fontSizes.xs,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    fontWeight: ThemeVariables.fontWeights.bold,
    mr: '1em',
    mb: '1em',
    [theme.breakpoints.up('sm')]: {
      fontSize: ThemeVariables.fontSizes.md,
      mr: '1.5em',
      mb: 0,
    },
    '& a': {
      textDecoration: 'none',

      '&:hover': {
        color: ThemeVariables.colours.primary,
        cursor: 'pointer'
      }
    }
  },
  light: {
    '& a': {
      color: ThemeVariables.colours.black,
    }
  },
  dark: {
    '& a': {
      color: ThemeVariables.colours.white,
    }
  },
  active: {
    '& a': {
      color: ThemeVariables.colours.primary,
    }
  },
  sticky: {
    fontSize: ThemeVariables.fontSizes.xs,
  },
}