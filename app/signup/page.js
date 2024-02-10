'use client'
import { useRef } from 'react'
import { useRouter } from 'next/navigation'
import {
  Input,
  Button,
  Box,
  FormControl,
  FormLabel,
  Heading,
  Text,
} from '@chakra-ui/react'
import LandingPageNavbar from '../components/LandingPageNavbar'
import LandingPageFooter from '../components/LandingPageFooter'
import Link from 'next/link'

const SignupPage = () => {
  const firstNameInputRef = useRef()
  const lastNameInputRef = useRef()
  const emailInputRef = useRef()
  const dateOfBirthInputRef = useRef()
  const passwordInputRef = useRef()
  const passwordConfirmationInputRef = useRef()
  const router = useRouter()

  function submitHandler(event) {
    event.preventDefault()

    const enteredFirstName = firstNameInputRef.current.value
    const enteredLastName = lastNameInputRef.current.value
    const enteredEmail = emailInputRef.current.value
    const enteredDateOfBirth = dateOfBirthInputRef.current.value
    const enteredPassword = passwordInputRef.current.value
    const enteredPasswordConfirmation =
      passwordConfirmationInputRef.current.value

    const newUserData = {
      first_name: enteredFirstName,
      last_name: enteredLastName,
      email: enteredEmail,
      date_of_birth: enteredDateOfBirth,
      password: enteredPassword,
      password_confirmation: enteredPasswordConfirmation,
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
                required
                ref={firstNameInputRef}
              />
            </FormControl>
            <FormControl id="last-name" mb={4}>
              <FormLabel>Last Name</FormLabel>
              <Input
                type="text"
                placeholder="Last Name"
                variant="outlined"
                required
                ref={lastNameInputRef}
              />
            </FormControl>
            <FormControl id="email" mb={4}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Email"
                variant="outlined"
                required
                ref={emailInputRef}
              />
            </FormControl>
            <FormControl id="date-of-birth" mb={4}>
              <FormLabel>Date of Birth</FormLabel>
              <Input
                type="date"
                placeholder="Date of Birth"
                variant="outlined"
                required
                ref={dateOfBirthInputRef}
              />
            </FormControl>
            <FormControl id="password" mb={6}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                variant="outlined"
                required
                ref={passwordInputRef}
              />
            </FormControl>
            <FormControl id="password-confirmation" mb={6}>
              <FormLabel>Password Confirmation</FormLabel>
              <Input
                type="password"
                placeholder="Confirm Password"
                variant="outlined"
                required
                ref={passwordConfirmationInputRef}
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
