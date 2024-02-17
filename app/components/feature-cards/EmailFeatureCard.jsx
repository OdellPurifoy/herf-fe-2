import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Button,
  Text,
} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'

const EmailFeatureCard = () => {
  return (
    <Card maxW="sm" variant="outline">
      <CardBody>
        <EmailIcon w={10} h={10} color="orange.500" />
        <Stack mt="6" spacing="3">
          <Heading size="md">Email Notifications</Heading>
          <Text>
            Once your event and/or special offer is created, you can email your
            members with one click. Or Herf will do it automatically. Should
            your event details change, Herf will automatically send update
            emails. Ensuring your patrons remain informed.
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

export default EmailFeatureCard
