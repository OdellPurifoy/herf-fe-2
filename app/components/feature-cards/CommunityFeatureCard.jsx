import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Button,
  Text,
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

const CommunityFeatureCard = () => {
  return (
    <Card maxW="sm">
      <CardBody>
        <AddIcon w={10} h={10} color="orange.500" />
        <Stack mt="6" spacing="3">
          <Heading size="md">row Your Community</Heading>
          <Text>
            Lounges are a small community. Our BOTL and SOTL gather to enjoy
            good company and great cigars. Herf helps build and strengthen this
            Community with technology.{' '}
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

export default CommunityFeatureCard
