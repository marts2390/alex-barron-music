import ThemeVariables from 'theme/variables'
import theme from 'theme/theme'

export const styles = {
  header: {
    transition: '0.3s ease',
    height: '150px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: ThemeVariables.colours.white,
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1,
    boxShadow: '0 2px 24px 0 rgb(0 0 0 / 15%)'
  },
  logo: {
    textAlign: 'center'
  },
  sticky: {
    height: '65px',
  },
  mobileHeader: {
    p: '2em',
    textAlign: 'center',
    position: 'relative'
  },
  hamburger: {
    position: 'absolute',
    top: '1.5em',
    right: '1em',
    [theme.breakpoints.up('sm')]: {
      top: '2.5em',
    }
  },
  hamburgerSticky: {
    top: '0.75em',
  },
  drawerContent: {
    width: '16em',
    padding: '1em'
  },
  smallLogo: {
    maxWidth: '5em',
    mb: '4em',
  },
  mobileMenuItem: {
    mb: '1em'
  },
  mobileHeaderSticky: {
    transition: '0.3s ease',
    p: '1.5em',
    background: ThemeVariables.colours.white,
    zIndex: 1,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    boxShadow: '0 2px 24px 0 rgb(0 0 0 / 15%)'
  },
  mobileSticky: {
    p: '0.75em'
  }
}