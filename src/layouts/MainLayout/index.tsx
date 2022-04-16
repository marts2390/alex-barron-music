import { FC } from 'react'
import { Box } from '@mui/material'

import Header from 'components/Header'
import Hero from 'basicComponents/Hero'
import Footer from 'components/Footer'

const MainLayoutComponent:FC = ({
  children
}) => {
  return (
    <Box>
      <Header />
      <Hero />
      {children}
      <Footer />
    </Box>
  )
}

export default MainLayoutComponent