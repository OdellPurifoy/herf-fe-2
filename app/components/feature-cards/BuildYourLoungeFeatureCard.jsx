import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Button,
  Text,
} from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'

const BuildYourLoungeFeatureCard = () => {
  return (
    <Card maxW="sm" variant="outline">
      <CardBody>
        <EditIcon w={10} h={10} color="orange.500" />
        <Stack mt="6" spacing="3">
          <Heading size="md">Build Your Lounge</Heading>
          <Text>
            Create a virtual profile of your lounge. Feel free to include
            details such as your address, contact information, bio and images!
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

export default BuildYourLoungeFeatureCard
