import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Button,
  Text,
} from '@chakra-ui/react'
import { CalendarIcon } from '@chakra-ui/icons'
import Image from 'next/image'

const CreateEventsFeatureCard = () => {
  return (
    <Card maxW="sm">
      <CardBody>
        <CalendarIcon w={10} h={10} color="orange.500" />
        <Stack mt="6" spacing="3">
          <Heading size="md">Create Events and Special Offers</Heading>
          <Text>
            Build a variety of events ranging from Live Music, Holiday, Members
            Only, Spirit Tasting and more. You can also create Special offers as
            well! Buy One, Get One, Store Discounts and Bulk deals.
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button variant="solid" colorScheme="gray">
          Learn More
        </Button>
      </CardFooter>
    </Card>
  )
}

export default CreateEventsFeatureCard
