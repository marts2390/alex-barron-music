import { FC, useEffect, useState } from 'react'
import { Box, Grid, Container, Drawer, Typography } from '@mui/material'
import { Link } from 'react-scroll'
import { useMediaQuery } from 'react-responsive'
import { Spin as Hamburger } from 'hamburger-react'

import theme from 'theme/theme'
import Logo from 'basicComponents/Logo'
import Menu from 'basicComponents/Menu'
import SmallLogo from 'basicComponents/SmallLogo'
import { menuItems } from 'common/menuItems'

import { styles } from './styles'

const HeaderComponent:FC = () => {
  const [isSticky, updateIsSticky] = useState(false)
  const [isOpen, setOpen] = useState(false)
  const isTabletOrMobile = useMediaQuery({ query: `(max-width: ${theme.breakpoints.values.lg}px)` })
  const isSmallScreen = useMediaQuery({ query: `(max-width: ${theme.breakpoints.values.sm}px)` })

  const handleScroll = () => {
    const scrollTop = window.scrollY

    if (scrollTop > 150) {
      updateIsSticky(true)

      return
    }

    if (scrollTop <= 150) {
      updateIsSticky(false)

      return
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  return (
    <>
      {!isTabletOrMobile ? (
        <Box
          sx={ [
            styles.header,
            isSticky && styles.sticky
          ] }
        >
          <Container maxWidth="lg">
            <Grid
              container
              spacing={ 2 }
            >
              <Grid
                item
                md={ 3 }
              />
              <Grid
                item
                md={ 6 }
              >
                <Menu isSticky={ isSticky } />
              </Grid>
              <Grid
                item
                md={ 3 }
                sx={ styles.logo }
              >
                <Logo width={ isSticky ? '8em' : '14em' }/>
              </Grid>
            </Grid>
          </Container>
        </Box>
      ) : (
        <Box sx={ styles.mobileHeader }>
          <Box sx={ [styles.mobileHeaderSticky, isSticky && styles.mobileSticky] }>
            <Logo width={ isSmallScreen ? '10em' : '14em' } />
            <Box sx={ [styles.hamburger, isSticky && styles.hamburgerSticky] }>
              <Hamburger
                toggled={ isOpen }
                toggle={ setOpen }
                size={ isSmallScreen ? 20 : 30 }
              />
            </Box>
          </Box>
          <Drawer
            anchor='left'
            open={ isOpen }
            onClose={ () => setOpen(false) }
          >
            <Box sx={ styles.drawerContent }>
              <Box sx={ styles.smallLogo }>
                <SmallLogo />
              </Box>
              {menuItems.map((item) => (
                <Link
                  onClick={ () => setOpen(false) }
                  key={ item.url }
                  smooth={ true }
                  to={ item.url }
                  offset={ item.url === 'home' ? -1000 : -100 }
                >
                  <Typography
                    sx={ styles.mobileMenuItem }
                    variant="h3"
                  >{item.name}</Typography>
                </Link>
              ))}
            </Box>
          </Drawer>
        </Box>
      )}
    </>
  )
}

export default HeaderComponent