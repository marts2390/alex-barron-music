import { FC } from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'
import { Box, Button } from '@mui/material'

import heroImage from 'assets/hero-image.jpg'

import { styles } from './styles'

const HeroComponent:FC = () => {
  return (
    <Box sx={ styles.hero }>
      <ParallaxBanner
        layers={ [{ image: heroImage.src, speed: 20 } ] }
        style={ styles.parallax }
      >
        <Button
          href='/contact'
          variant="contained"
          color="secondary"
        >Lets Talk</Button>
      </ParallaxBanner>
    </Box>
  )
}

export default HeroComponent