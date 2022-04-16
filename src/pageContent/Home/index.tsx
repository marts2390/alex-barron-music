import { FC, useRef, useEffect, useContext } from 'react'
import { Box, Grid, Typography, Container, Button } from '@mui/material'
import ReactPlayer from 'react-player'
import Image from 'next/image'

import { ActiveLinkContext } from 'context/AppContext'
import { ActiveLinkContextModel } from '../../@types/activeLink'
import { LinkModel } from 'models/linkModel'

import image from 'assets/image9.jpeg'

import { styles } from './styles'

const HomePageContent: FC = () => {
  const homeRef = useRef<HTMLDivElement>(null)
  const listenRef = useRef<HTMLDivElement>(null)
  const { activeLink, setActiveLink } = useContext(ActiveLinkContext) as ActiveLinkContextModel
  const clientList = [
    'Secret Spielberg',
    'Son of the Skies',
    'Ellie Ford',
    'Fred Hills',
    'Two Blind Mice',
    'Calico',
    'Baby eleanor',
    'Anneek Taper',
    'Louis Checkley',
    'Darius Bahdad',
    'MayBug',
  ]

  const checkInView = () => {
    const homeArea = homeRef.current && homeRef.current.scrollHeight + 700
    const listenHeight = listenRef.current && listenRef.current.scrollHeight + 400

    switch (true) {
      case homeArea && window.scrollY > 0 && window.scrollY <= homeArea:
        activeLink !== LinkModel.home && setActiveLink(LinkModel.home)

        break

      case homeArea && listenHeight && window.scrollY > homeArea && window.scrollY < homeArea + listenHeight:
        activeLink !== LinkModel.listen && setActiveLink(LinkModel.listen)

        break

      case homeArea && listenHeight && window.scrollY > homeArea + listenHeight:
        activeLink !== LinkModel.clients && setActiveLink(LinkModel.clients)

        break
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', checkInView)

    return () => window.removeEventListener('scroll', checkInView)
  }, [activeLink])

  return (
    <Container>
      <Box
        id="home"
        sx={ styles.homePage }
      >
        <Grid
          ref={ homeRef }
          container
          spacing={ 4 }
          alignItems="center"
        >
          <Grid
            item
            xs={ 12 }
            sm={ 6 }
          >
            <Box
              sx={ styles.imageBox }
            >
              <Image
                src={ image.src }
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={ 12 }
            sm={ 6 }
          >
            <Box ref={ listenRef }>
              <Typography
                sx={ styles.imageTitle }
                variant="h2"
              >
                Producer / Composer / Musician
              </Typography>
              <Box sx={ styles.imageText }>
                <Typography variant='h5'>I am a Producer, musician and mix engineer based in Brighton UK.</Typography>
                <Typography variant='h5'>
                  I love crafting projects from start to finish and evolving along with them to gain insights into
                  new musical ideas and approaches.
                </Typography>
                <Typography variant='h5'>
                  If you have a listen and like what you hear, feel free to get in touch!
                </Typography>
                <Button sx={ styles.imageButton }>Get in touch</Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box
          id="listen"
          sx={ styles.section }
        >
          <Typography
            sx={ styles.sectionTitle }
            variant='h1'
          >Listen to my work</Typography>
          <ReactPlayer
            width="100%"
            url="https://soundcloud.com/user-100750491/toe-step?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
          />
        </Box>
        <Box
          id="clients"
          sx={ styles.section }
        >
          <Typography
            sx={ styles.sectionTitle }
            variant='h1'
          >Previous Clients</Typography>
          <Box sx={ styles.listContainer }>
            {clientList.map((item) => (
              <Typography
                key={ item }
                variant="h3"
                sx={ styles.clientListItem }
              >
                {item}
                <Box
                  sx={ styles.divider }
                  component="span"
                >
                ||
                </Box>
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default HomePageContent