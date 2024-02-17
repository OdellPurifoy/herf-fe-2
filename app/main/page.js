'use client'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import { Box, Container, Grid } from '@chakra-ui/react'
import BuildYourLoungeFeatureCard from '../components/feature-cards/BuildYourLoungeFeatureCard'
import CreateEventsFeatureCard from '../components/feature-cards/CreateEventsFeatureCard'
import EmailFeatureCard from '../components/feature-cards/EmailFeatureCard'
import LandingPageFooter from '../components/LandingPageFooter'
import TextFeatureCard from '../components/feature-cards/TextFeatureCard'
import EngagementFeatureCard from '../components/feature-cards/EngagementFeatureCard'
import CommunityFeatureCard from '../components/feature-cards/CommunityFeatureCard'

const MainPage = () => {
  return (
    <Container maxW="1320px">
      <Box mb="10">
        <Navbar />
        <Hero />
        <Grid
          px={50}
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} // 1 column on small screens, 3 columns on medium screens and above
          gap={6} // Adjust the gap between cards as needed
          mt={8} // Adjust the top margin as needed
        >
          {/* First Row */}
          <BuildYourLoungeFeatureCard />
          <CreateEventsFeatureCard />
          <EmailFeatureCard />
          {/* Second Row */}
          <TextFeatureCard />
          <EngagementFeatureCard />
          <CommunityFeatureCard />
        </Grid>
      </Box>
      <LandingPageFooter />
    </Container>
  )
}

export default MainPage
