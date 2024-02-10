'use client'

import { Box, Button, Heading, Text } from '@chakra-ui/react'

export default function SplitScreen() {
  return (
    <Box
      bgImage="url('https://images.unsplash.com/photo-1547652577-b4fe2f34d7ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" // Replace 'hero-background.jpg' with your image path
      bgSize="cover"
      bgPosition="center"
      h="400px" // Adjust the height as needed
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      color="white"
    >
      <Box maxW="container.sm" px={6}>
        {/* Adjust 'container.sm' to your preferred width */}
        <Heading as="h1" size="xl" mb={4}>
          Welcome to Our Website
        </Heading>
        <Text fontSize="lg" mb={6}>
          Discover the finest selection of cigars
        </Text>
        <Button colorScheme="brand" size="lg">
          Explore Now
        </Button>
      </Box>
    </Box>
  )
}
