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
import { AddIcon, CheckIcon } from '@chakra-ui/icons'
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

const CommunityFeatureCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Card maxW="sm" variant="outline">
        <CardBody>
          <AddIcon w={10} h={10} color="orange.500" />
          <Stack mt="6" spacing="3">
            <Heading size="md">Grow Your Community</Heading>
            <Text>
              Lounges are a small community. Our BOTL and SOTL gather to enjoy
              good company and great cigars. Herf helps build and strengthen
              this Community with technology.{' '}
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
            <AddIcon w={10} h={10} mt="10" color="orange.500" />
          </Center>
          <ModalHeader>Grow your Community</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              <CheckIcon color="orange.500" mr="2" />
              <b>Foster Community Growth: </b>
              <br />
              <p>
                Our comprehensive suite of features empowers cigar lounge owners
                to cultivate a vibrant and engaged community of enthusiasts.
                Seamlessly connect with members through personalized email and
                text notifications, keeping them informed and excited about
                upcoming events and exclusive offers. By crafting a compelling
                lounge profile and curating unforgettable experiences with our
                event creation tools, lounge owners can attract new patrons and
                strengthen bonds with existing members. Join us today and unlock
                the potential to grow your lounge community and create lasting
                connections with cigar aficionados.{' '}
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

export default CommunityFeatureCard
