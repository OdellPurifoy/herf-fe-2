'use client'

import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Button,
  Text,
  Center,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'
import { CalendarIcon, CheckCircleIcon } from '@chakra-ui/icons'
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

const CreateEventsFeatureCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Card maxW="sm" variant="outline">
        <CardBody>
          <CalendarIcon w={10} h={10} color="orange.500" />
          <Stack mt="6" spacing="3">
            <Heading size="md">Create Events and Special Offers</Heading>
            <Text>
              Elevate your establishment's allure and engage enthusiasts with
              our cutting-edge feature: intuitive event and offer management
              tools designed to captivate and entice your audience.
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
            <CalendarIcon w={10} h={10} mt="10" color="orange.500" />
          </Center>
          <ModalHeader>
            Ignite Excitement and Engagement with Dynamic Event and Offer
            Management
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="orange.500" />
                Curate unforgettable experiences for your patrons with seamless
                event creation and management. From exclusive cigar tastings to
                live music nights, effortlessly plan and promote events that
                leave a lasting impression on attendees.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="orange.500" />
                Attract cigar aficionados with enticing special offers and
                promotions tailored to their preferences. Showcase limited-time
                discounts, bundle deals, and VIP packages, enticing visitors to
                indulge in the luxury and hospitality your lounge provides.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="orange.500" />
                Nurture lasting relationships with your patrons by providing
                them with exclusive access to curated events and irresistible
                offers. Cultivate a sense of community and loyalty among
                enthusiasts who appreciate the sophistication and camaraderie
                your lounge offers.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="orange.500" />
                Unlock the potential of your lounge and ignite excitement among
                cigar enthusiasts. Sign up now to access our comprehensive event
                and offer management tools, and take your lounge to new heights
                of engagement, satisfaction, and success.
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

export default CreateEventsFeatureCard
