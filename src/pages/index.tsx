import type { NextPage } from 'next'

import MainLayout from 'layouts/MainLayout'
import HomePageContent from 'pageContent/Home'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <HomePageContent />
    </MainLayout>
  )
}

export default Home
