'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Input,
  Button,
  Box,
  FormControl,
  FormLabel,
  Heading,
} from '@chakra-ui/react'
import LandingPageNavbar from '../components/LandingPageNavbar'
import LandingPageFooter from '../components/LandingPageFooter'

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const router = useRouter()

  const handleForgotPasswordSubmission = async (e) => {
    e.preventDefault()

    try {
      const userData = {
        user: {
          email: email,
        },
      }

      const response = await fetch('http://localhost:4000/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })

      // Ensure the request was successful (status code 2xx)
      if (response.ok) {
        router.push('/reset-password')
        console.log('Successs')
      } else {
        const errorMessage = await response.text()
        // console.log('RESPONSE TEXT', response.text())
        // console.log('RESPONSE', response)
        setError(errorMessage)
      }
    } catch (error) {
      console.error('Login error:', error)
      // setError('An error occurred. Please try again later.')
    }
  }

  return (
    <>
      <LandingPageNavbar />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        h="100vh"
        bg="gray.100"
      >
        <Box
          w="full"
          maxW="md"
          p={8}
          borderWidth={1}
          borderRadius="lg"
          boxShadow="lg"
          bg="gray.50"
        >
          <Heading as="h2" size="lg" mb={6} textAlign="center">
            Forgot Password
          </Heading>
          {error && (
            <Alert status="error" mb={4}>
              <AlertIcon />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <form onSubmit={handleForgotPasswordSubmission}>
            <FormControl id="email" mb={4}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormControl>
            <Button bg="orange.500" color="white" type="submit" w="full">
              Submit
            </Button>
          </form>
        </Box>
      </Box>
      <LandingPageFooter />
    </>
  )
}

export default ForgotPasswordPage
