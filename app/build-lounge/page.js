'use client'

import { useState, useEffect } from 'react'
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react'
import Navbar from '../components/Navbar'

const BuildLoungePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    alcohol_served: false,
    outside_alcohol_allowed: false,
    outside_food_allowed: false,
    food_served: false,
    phone_number: '',
    logo: '',
    user_id: null,
    address_attributes: {
      address_street_1: '',
      address_street_2: '',
      city: '',
      state: '',
      zipcode: '',
    },
  })

  useEffect(() => {
    // Retrieve user object from local storage
    const storedUser = JSON.parse(localStorage.getItem('user'))
    if (storedUser && storedUser.id) {
      // If user object exists and has an "id" attribute, set user_id in formData
      setFormData((prevData) => ({
        ...prevData,
        user_id: storedUser.id,
      }))
    }
  }, [])

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target
    if (name === 'logoImage') {
      // If the field is logoImage, update file in formData
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0], // Only take the first file
      }))
    } else if (name.includes('address')) {
      // If the field is part of the address, update nested object
      const addressField = name.split('_')[1] // Extract field name from name attribute
      setFormData((prevData) => ({
        ...prevData,
        address_attributes: {
          ...prevData.address_attributes,
          [addressField]: value,
        },
      }))
    } else {
      // If not part of address or logo image, update directly in formData
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === 'checkbox' ? checked : value,
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here, e.g., send data to server
    console.log(formData)
  }

  return (
    <Container maxW="1320px">
      <Navbar />
      <Box maxW="md" m="auto" p={6} borderWidth="1px" borderRadius="lg" mt={5}>
        <form onSubmit={handleSubmit}>
          <FormControl id="name" mb={4}>
            <FormLabel>Name of Lounge</FormLabel>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl id="email" mb={4}>
            <FormLabel>Email of Lounge</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl id="description" mb={4}>
            <FormLabel>Description of Lounge</FormLabel>
            <Textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              resize="vertical"
              required
            />
          </FormControl>
          <FormControl id="alcoholServed" mb={4}>
            <Checkbox
              name="alcoholServed"
              isChecked={formData.alcoholServed}
              onChange={handleChange}
            >
              Alcohol Served
            </Checkbox>
          </FormControl>
          <FormControl id="outsideAlcoholAllowed" mb={4}>
            <Checkbox
              name="outsideAlcoholAllowed"
              isChecked={formData.outsideAlcoholAllowed}
              onChange={handleChange}
            >
              Outside Alcohol Allowed
            </Checkbox>
          </FormControl>
          <FormControl id="outsideFoodAllowed" mb={4}>
            <Checkbox
              name="outsideFoodAllowed"
              isChecked={formData.outsideFoodAllowed}
              onChange={handleChange}
            >
              Outside Food Allowed
            </Checkbox>
          </FormControl>
          <FormControl id="foodServed" mb={4}>
            <Checkbox
              name="foodServed"
              isChecked={formData.foodServed}
              onChange={handleChange}
            >
              Food Served
            </Checkbox>
          </FormControl>
          <FormControl id="phoneNumber" mb={4}>
            <FormLabel>Phone Number</FormLabel>
            <Input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            <FormControl id="logo" mb={4}>
              <FormLabel>Logo Image</FormLabel>
              <Input type="file" name="logo" onChange={handleChange} />
            </FormControl>
          </FormControl>
          <FormControl id="address_street_1" mb={4}>
            <FormLabel>Address Street 1</FormLabel>
            <Input
              type="text"
              name="address_street_1"
              value={formData.address_attributes.address_street_1}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl id="address_street_2" mb={4}>
            <FormLabel>Address Street 2</FormLabel>
            <Input
              type="text"
              name="address_street_2"
              value={formData.address_attributes.address_street_2}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="city" mb={4}>
            <FormLabel>City</FormLabel>
            <Input
              type="text"
              name="city"
              value={formData.address_attributes.city}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl id="state" mb={4}>
            <FormLabel>State</FormLabel>
            <Input
              type="text"
              name="state"
              value={formData.address_attributes.state}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl id="zipcode" mb={4}>
            <FormLabel>Zipcode</FormLabel>
            <Input
              type="text"
              name="zipcode"
              value={formData.address_attributes.zipcode}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl id="phoneNumber" mb={4}>
            <FormLabel>Phone Number</FormLabel>
            <Input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </FormControl>
          <Button type="submit" bg="orange.500" color="white" w="full">
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  )
}

export default BuildLoungePage
