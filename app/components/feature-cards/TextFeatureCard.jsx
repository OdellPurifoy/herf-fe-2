import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Button,
  Text,
} from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'

const TextFeatureCard = () => {
  return (
    <Card maxW="sm">
      <CardBody>
        <PhoneIcon w={10} h={10} color="orange.500" />
        <Stack mt="6" spacing="3">
          <Heading size="md">Text Notifications</Heading>
          <Text>
            Herf's text message notification service offers all the benefits of
            email in a text message format. All Event and Special Offer details,
            updates and cancellations are sent to your members device.
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

export default TextFeatureCard
