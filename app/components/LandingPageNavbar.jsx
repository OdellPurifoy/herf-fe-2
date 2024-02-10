import { Flex, Heading } from '@chakra-ui/react'

const LandingPageNavbar = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      p={4}
      bg="white"
      color="gray.800"
    >
      <Heading as="h1" size="md">
        HERF
      </Heading>
    </Flex>
  )
}

export default LandingPageNavbar
