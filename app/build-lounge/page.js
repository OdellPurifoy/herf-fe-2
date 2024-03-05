'use client'

import { useState, useEffect } from 'react'
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Textarea,
} from '@chakra-ui/react'
import Navbar from '../components/Navbar'

const BuildLoungePage = () => {
  const [loungeName, setLoungeName] = useState('')
  const [loungeEmail, setLoungeEmail] = useState('')
  const [loungeDescription, setLoungeDescription] = useState('')
  const [alcoholServed, setAlcoholServed] = useState(false)
  const [outsideAlcoholAllowed, setOutsideAlcoholAllowed] = useState(false)
  const [outsideFoodAllowed, setOutsideFoodAllowed] = useState(false)
  const [outsideCigarsAllowed, setOutsideCigarsAllowed] = useState(false)
  const [foodServed, setFoodServed] = useState(false)
  const [logoImage, setLogoImage] = useState(null)
  const [addressStreet1, setAddressStreet1] = useState('')
  const [addressStreet2, setAddressStreet2] = useState('')
  const [city, setCity] = useState('')
  const [loungeState, setLoungeState] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [userId, setUserId] = useState('')

  useEffect(() => {
    // Retrieve user object from local storage
    const storedUser = JSON.parse(localStorage.getItem('user'))
    if (storedUser && storedUser.id) {
      // If user object exists and has an "id" attribute, set user_id in formData
      setUserId(storedUser.id)
    }
  }, [])

  // const handleChange = (e) => {
  //   const { name, value, type, checked, files } = e.target
  //   console.log('Hit handle change')
  //   if (name === 'logoImage') {
  //     // If the field is logoImage, update file in formData
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [name]: files[0], // Only take the first file
  //     }))
  //   } else if (name.includes('address')) {
  //     // If the field is part of the address, update nested object
  //     const addressField = name.split('_')[1] // Extract field name from name attribute
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       address_attributes: {
  //         ...prevData.address_attributes,
  //         [addressField]: value,
  //       },
  //     }))
  //   } else {
  //     // If not part of address or logo image, update directly in formData
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [name]: type === 'checkbox' ? checked : value,
  //     }))
  //   }
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    const lounge = {
      name: loungeName,
      email: loungeEmail,
      description: loungeDescription,
      alcohol_served: alcoholServed,
      food_served: foodServed,
      outside_alcohol_allowed: outsideAlcoholAllowed,
      outside_cigars_allowed: outsideCigarsAllowed,
      outside_food_allowed: outsideFoodAllowed,
      phone_number: phoneNumber,
      logo: logoImage,
      user_id: userId,
      address_attributes: {
        address_street_1: addressStreet1,
        address_street_2: addressStreet2,
        city: city,
        state: loungeState,
        zipcode: zipcode,
      },
    }

    const token = localStorage.getItem('token')
    // Check if token is available
    if (token) {
      // Make fetch request with token included in headers
      fetch('http://localhost:4000/lounges', {
        method: 'POST',
        body: JSON.stringify({ lounge }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          // Include token in Authorization header
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          console.log('Response >>>', response)
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        })
        .then((data) => {
          console.log('Lounge created successfully', data) // Log meaningful data from the response
        })
        .catch((error) => {
          console.error('There was a problem with the fetch operation:', error) // Log fetch error
        })
    } else {
      console.error('Token not found in local storage')
    }
  }

  return (
    // <Container maxW="1320px">
    <>
      <Navbar />
      <Box maxW="xl" m="auto" p={6} borderWidth="1px" borderRadius="lg">
        <form onSubmit={handleSubmit}>
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            <FormControl id="name">
              <FormLabel>Name of Lounge</FormLabel>
              <Input
                type="text"
                name="name"
                onChange={(e) => setLoungeName(e.target.value)}
                required
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email of Lounge</FormLabel>
              <Input
                type="email"
                name="email"
                onChange={(e) => setLoungeEmail(e.target.value)}
                required
              />
            </FormControl>
            <FormControl id="description" colSpan={2}>
              <FormLabel>Description of Lounge</FormLabel>
              <Textarea
                name="description"
                onChange={(e) => setLoungeDescription(e.target.value)}
                rows={4}
                resize="vertical"
                required
              />
            </FormControl>
            <FormControl id="alcoholServed">
              <Checkbox
                name="alcoholServed"
                onChange={(e) => setAlcoholServed(e.target.checked)}
              >
                Alcohol Served
              </Checkbox>
            </FormControl>
            <FormControl id="outsideAlcoholAllowed">
              <Checkbox
                name="outsideAlcoholAllowed"
                onChange={(e) => setOutsideAlcoholAllowed(e.target.checked)}
              >
                Outside Alcohol Allowed
              </Checkbox>
            </FormControl>
            <FormControl id="outsideFoodAllowed">
              <Checkbox
                name="outsideFoodAllowed"
                onChange={(e) => setOutsideFoodAllowed(e.target.checked)}
              >
                Outside Food Allowed
              </Checkbox>
            </FormControl>
            <FormControl id="foodServed">
              <Checkbox
                name="foodServed"
                onChange={(e) => setFoodServed(e.target.checked)}
              >
                Food Served
              </Checkbox>
            </FormControl>
            <FormControl id="logoImage" colSpan={2}>
              <FormLabel>Logo Image</FormLabel>
              <Input
                type="file"
                name="logoImage"
                onChange={(e) => setLogoImage(e.target.value)}
              />
            </FormControl>
            <FormControl id="address_street_1">
              <FormLabel>Address Street 1</FormLabel>
              <Input
                type="text"
                name="address_street_1"
                onChange={(e) => setAddressStreet1(e.target.value)}
                required
              />
            </FormControl>
            <FormControl id="address_street_2">
              <FormLabel>Address Street 2</FormLabel>
              <Input
                type="text"
                name="address_street_2"
                onChange={(e) => setAddressStreet2(e.target.value)}
              />
            </FormControl>
            <FormControl id="city">
              <FormLabel>City</FormLabel>
              <Input
                type="text"
                name="city"
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </FormControl>
            <FormControl id="state">
              <FormLabel>State</FormLabel>
              <Input
                type="text"
                name="state"
                onChange={(e) => setLoungeState(e.target.value)}
                required
              />
            </FormControl>
            <FormControl id="zipcode">
              <FormLabel>Zipcode</FormLabel>
              <Input
                type="text"
                name="zipcode"
                onChange={(e) => setZipcode(e.target.value)}
                required
              />
            </FormControl>
            <FormControl id="phoneNumber" colSpan={2}>
              <FormLabel>Phone Number</FormLabel>
              <Input
                type="tel"
                name="phoneNumber"
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </FormControl>
            <GridItem colSpan={2}>
              <Button type="submit" bg="orange.500" color="white" w="100%">
                Submit
              </Button>
            </GridItem>
          </Grid>
        </form>
      </Box>
    </>
    // </Container>
  )
}

export default BuildLoungePage
