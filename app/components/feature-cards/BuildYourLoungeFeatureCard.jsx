'use client'

import {
  Card,
  CardBody,
  CardFooter,
  Center,
  Stack,
  Heading,
  Button,
  Text,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'
import { EditIcon, CheckCircleIcon } from '@chakra-ui/icons'
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

const BuildYourLoungeFeatureCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Card maxW="sm" variant="outline">
        <CardBody>
          <EditIcon w={10} h={10} color="orange.500" />
          <Stack mt="6" spacing="3">
            <Heading size="md">Build Your Lounge</Heading>
            <Text>
              Attention cigar lounge owners! Are you ready to showcase your
              establishment to a broader audience and captivate cigar
              enthusiasts worldwide? Look no further than our platform's premium
              feature: the ability to craft a tailor-made profile for your
              lounge.
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
            <EditIcon w={10} h={10} mt="10" color="orange.500" />
          </Center>
          <ModalHeader>
            Elevate Your Lounge's Presence with a Bespoke Profile
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="orange.500" />
                Take control of your lounge's online presence by crafting a
                profile that reflects its unique ambiance, offerings, and
                personality. From elegant decor to unparalleled cigar
                selections, highlight what sets your lounge apart and entices
                visitors to step into your world.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="orange.500" />
                Take control of your lounge's online presence by crafting a
                profile that reflects its unique ambiance, offerings, and
                personality. From elegant decor to unparalleled cigar
                selections, highlight what sets your lounge apart and entices
                visitors to step into your world.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="orange.500" />
                Capture the attention of cigar aficionados near and far with
                captivating visuals and compelling descriptions. Showcase your
                lounge's finest features, from cozy seating areas to exclusive
                events, enticing visitors to experience the luxury and
                camaraderie your lounge offers.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="orange.500" />
                Unlock the potential of your lounge and join our community of
                esteemed cigar destinations. Sign up today to create a profile
                that elevates your lounge's presence, captivates cigar
                enthusiasts, and solidifies your status as a premier destination
                for luxury and relaxation.
              </ListItem>
            </List>
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

export default BuildYourLoungeFeatureCard
