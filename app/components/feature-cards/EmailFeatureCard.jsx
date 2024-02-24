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
import { EmailIcon, CheckCircleIcon } from '@chakra-ui/icons'
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

const EmailFeatureCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Card maxW="sm" variant="outline">
        <CardBody>
          <EmailIcon w={10} h={10} color="orange.500" />
          <Stack mt="6" spacing="3">
            <Heading size="md">Email Notifications</Heading>
            <Text>
              Enhance your member engagement and foster a sense of community
              with our sophisticated email notification feature. Keep your
              valued members informed, entertained, and eager to participate in
              your lounge's exclusive events and offers.
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
            <EmailIcon w={10} h={10} mt="10" color="orange.500" />
          </Center>
          <ModalHeader>
            Engage Your Members with Personalized Email Notifications
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="orange.500" />
                Ensure your members never miss out on the latest happenings at
                your lounge with timely event updates delivered directly to
                their email. From cigar tastings to live entertainment, keep
                them informed and excited about the exclusive experiences
                awaiting them.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="orange.500" />
                Delight your members with exclusive special offers and
                promotions. From limited-time discounts to VIP access, entice
                them to indulge in the luxury and hospitality your lounge
                provides.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="orange.500" />
                Nurture long-lasting relationships with your members by
                providing them with valuable, relevant content that enhances
                their lounge experience. Foster a sense of belonging and loyalty
                among enthusiasts who appreciate the sophistication and
                camaraderie your lounge offers.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="orange.500" />
                Empower your lounge to connect with members on a deeper level
                and drive participation in your events and offers. Sign up now
                to access our email notification feature and start building
                stronger relationships with your valued patrons.{' '}
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

export default EmailFeatureCard
