import ThemeVariables from 'theme/variables'
import theme from 'theme/theme'

export const styles = {
  hero: {
    height: '40em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('lg')]: {
      mt: '150px',
    }
  },
  parallax: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroButton: {
    display: 'inline-block',
    backgroundColor: ThemeVariables.colours.white,
    px: '2em',
    py: '1em',
    textTransform: 'uppercase',
    '&:hover': {
      cursor: 'pointer',
    }
  }
}