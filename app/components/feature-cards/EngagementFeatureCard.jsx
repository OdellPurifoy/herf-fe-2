import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Button,
  Text,
} from '@chakra-ui/react'
import { ArrowUpIcon } from '@chakra-ui/icons'

const EngagementFeatureCard = () => {
  return (
    <Card maxW="sm">
      <CardBody>
        <ArrowUpIcon w={10} h={10} color="orange.500" />
        <Stack mt="6" spacing="3">
          <Heading size="md">Increase Engagement & Attendance</Heading>
          <Text>
            The more informed your patrons are, the better. This leads to
            improved event turnout.{' '}
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

export default EngagementFeatureCard
