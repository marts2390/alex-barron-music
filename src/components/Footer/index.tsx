import { Box, Container } from '@mui/material'
import { FC } from 'react'

import Menu from 'basicComponents/Menu'
import Logo from 'basicComponents/Logo'

import { styles } from './styles'

const FooterComponent:FC = () => {
  return (
    <Box sx={ styles.footer }>
      <Container maxWidth="lg">
        <Box sx={ styles.logo }>
          <Logo theme="dark"/>
        </Box>
        <Menu theme="dark"/>
      </Container>
    </Box>
  )
}

export default FooterComponent