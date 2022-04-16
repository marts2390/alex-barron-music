import theme from 'theme/theme'
import ThemeVariables from 'theme/variables'

export const styles = {
  homePage: {
    pt: '6em'
  },
  imageBox: {
    height: '35em',
    position: 'relative',
  },
  imageText: {
    textAlign: 'center',
    pt: '1em',
    '& .MuiTypography-root': {
      pt: '1em'
    }
  },
  imageTitle: {
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: ThemeVariables.fontSizes.xl
    }
  },
  imageButton: {
    mt: '2.5em'
  },
  section: {
    my: '6em'
  },
  sectionTitle: {
    textTransform: 'uppercase',
    textAlign: 'center',
    pb: '2em',
    pt: '2em',
    [theme.breakpoints.down('md')]: {
      fontSize: ThemeVariables.fontSizes.xl
    }
  },
  listContainer: {
    textAlign: 'center'
  },
  clientListItem: {
    display: 'inline-block',
    pb: '1em',
    mr: '1em',
    [theme.breakpoints.down('md')]: {
      fontSize: ThemeVariables.fontSizes.md
    }
  },
  divider: {
    ml: '1em'
  }
}