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

const ResetPasswordPage = () => {
  const [email, setEmail] = useState('')
  const [token, setToken] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [error, setError] = useState('')

  const router = useRouter()

  const handleResetPasswordSubmission = async (e) => {
    e.preventDefault()

    try {
      const userData = {
        user: {
          email: email,
          token: token,
          password: newPassword,
        },
      }

      const response = await fetch('http://localhost:4000/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })

      // Ensure the request was successful (status code 2xx)
      if (response.ok) {
        router.push('/login')
        console.log('Successs')
      } else {
        const errorMessage = await response.text()
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
            Reset Password
          </Heading>
          {error && (
            <Alert status="error" mb={4}>
              <AlertIcon />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <form onSubmit={handleResetPasswordSubmission}>
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
            <FormControl id="token" mb={4}>
              <FormLabel>Token</FormLabel>
              <Input
                type="text"
                placeholder="Enter token"
                variant="outlined"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                required
              />
            </FormControl>
            <FormControl id="password" mb={4}>
              <FormLabel>New Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter new password"
                variant="outlined"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
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

export default ResetPasswordPage
