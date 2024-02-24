'use client'

import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Button,
  Text,
  Center,
} from '@chakra-ui/react'
import { ArrowUpIcon, CheckIcon } from '@chakra-ui/icons'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'

const EngagementFeatureCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Card maxW="sm" variant="outline">
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
          <Button variant="solid" colorScheme="gray" onClick={onOpen}>
            Learn More
          </Button>
        </CardFooter>
      </Card>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Center>
            <ArrowUpIcon w={10} h={10} mt="10" color="orange.500" />
          </Center>
          <ModalHeader>Increase Engagement & Attendance</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              <CheckIcon color="orange.500" mr="2" />
              <b>Transform Your Lounge Experience: </b>
              <br />
              <p>
                Elevate your cigar lounge to new heights of engagement and
                attendance with our powerful suite of features. Seamlessly
                connect with members through personalized email and text
                notifications, ensuring they never miss out on upcoming events
                and special offers. Craft a captivating lounge profile that
                showcases your unique identity and entices visitors to step into
                your world. With intuitive event and special offer creation
                tools, create unforgettable experiences that drive engagement
                and foster a thriving community of enthusiasts. Join today and
                experience the difference in member engagement and attendance
                for your lounge.
              </p>
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="gray" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default EngagementFeatureCard
