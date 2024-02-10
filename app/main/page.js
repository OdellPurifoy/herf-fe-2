'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import {
  Button,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
  Grid,
} from '@chakra-ui/react'

const MainPage = () => {
  return (
    <Box>
      <Navbar />
      <Hero />
      <Grid
        px={50}
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} // 1 column on small screens, 3 columns on medium screens and above
        gap={6} // Adjust the gap between cards as needed
        mt={8} // Adjust the top margin as needed
      >
        {/* First Row */}
        <Card>
          <Heading size="md">Customer Dashboard</Heading>
          <Text>View a summary of all your customers over the last month.</Text>
          <Button>View here</Button>
        </Card>

        <Card>
          <Heading size="md">Customer Dashboard</Heading>
          <Text>View a summary of all your customers over the last month.</Text>
          <Button>View here</Button>
        </Card>

        <Card>
          <Heading size="md">Customer Dashboard</Heading>
          <Text>View a summary of all your customers over the last month.</Text>
          <Button>View here</Button>
        </Card>

        {/* Second Row */}
        <Card>
          <Heading size="md">Customer Dashboard</Heading>
          <Text>View a summary of all your customers over the last month.</Text>
          <Button>View here</Button>
        </Card>

        <Card>
          <Heading size="md">Customer Dashboard</Heading>
          <Text>View a summary of all your customers over the last month.</Text>
          <Button>View here</Button>
        </Card>

        <Card>
          <Heading size="md">Customer Dashboard</Heading>
          <Text>View a summary of all your customers over the last month.</Text>
          <Button>View here</Button>
        </Card>
      </Grid>
    </Box>
  )
}

export default MainPage
