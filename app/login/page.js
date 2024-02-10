'use client'

import { useState } from 'react'
import { useAuth } from '../AuthContext'
import { useRouter } from 'next/navigation'
import {
  Input,
  Button,
  Box,
  FormControl,
  FormLabel,
  Heading,
} from '@chakra-ui/react'
import LandingPageNavbar from '../components/LandingPageNavbar'
import LandingPageFooter from '../components/LandingPageFooter'

const LoginPage = () => {
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await login(email, password)
      router.push('/main')
    } catch (error) {
      console.error('Login error:', error)
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
            Log In
          </Heading>
          <form onSubmit={handleLogin}>
            <FormControl id="email" mb={4}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" mb={6}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Button bg="orange.500" color="white" type="submit" w="full">
              Log In
            </Button>
          </form>
        </Box>
      </Box>
      <LandingPageFooter />
    </>
  )
}

export default LoginPage
