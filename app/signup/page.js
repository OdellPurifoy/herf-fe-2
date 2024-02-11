'use client'
import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Input,
  Button,
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Text,
} from '@chakra-ui/react'
import LandingPageNavbar from '../components/LandingPageNavbar'
import LandingPageFooter from '../components/LandingPageFooter'
import Link from 'next/link'

const SignupPage = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [isError, setIsError] = useState(true)
  const router = useRouter()

  function submitHandler(event) {
    event.preventDefault()

    const newUserData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      date_of_birth: dateOfBirth,
      password: password,
      password_confirmation: passwordConfirmation,
    }

    fetch('http://localhost:4000/signup', {
      method: 'POST',
      body: JSON.stringify({ user: newUserData }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      router.push('/login')
    })
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
            Sign Up
          </Heading>
          <form onSubmit={submitHandler}>
            <FormControl id="first-name" mb={4}>
              <FormLabel>First Name</FormLabel>
              <Input
                type="text"
                placeholder="First Name"
                variant="outlined"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </FormControl>
            <FormControl id="last-name" mb={4}>
              <FormLabel>Last Name</FormLabel>
              <Input
                type="text"
                variant="outlined"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              {isError && (
                <FormErrorMessage>Last Name is required.</FormErrorMessage>
              )}
            </FormControl>
            <FormControl id="email" mb={4}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Email"
                variant="outlined"
                onChange={(e) => {
                  setEmail(e.target.value)
                  setIsError(e.target.value.trim() === '')
                }}
                required
              />
            </FormControl>
            <FormControl id="date-of-birth" mb={4}>
              <FormLabel>Date of Birth</FormLabel>
              <Input
                type="date"
                placeholder="Date of Birth"
                variant="outlined"
                onChange={(e) => setDateOfBirth(e.target.value)}
                required
              />
            </FormControl>
            <FormControl id="password" mb={6}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                variant="outlined"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormControl>
            <FormControl id="password-confirmation" mb={6}>
              <FormLabel>Password Confirmation</FormLabel>
              <Input
                type="password"
                placeholder="Confirm Password"
                variant="outlined"
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                required
              />
            </FormControl>
            <Button bg="orange.500" color="white" type="submit" w="full">
              Sign In
            </Button>
          </form>
          <Text mt={6}>
            Already have an account?{' '}
            <Link color="orange.500" href="/login">
              <b>Login here</b>
            </Link>
          </Text>
        </Box>
      </Box>
      <LandingPageFooter />
    </>
  )
}

export default SignupPage
