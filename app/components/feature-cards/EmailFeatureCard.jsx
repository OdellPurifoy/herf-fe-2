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
import { EmailIcon, CheckIcon } from '@chakra-ui/icons'
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
              Once your event and/or special offer is created, you can email
              your members with one click. Or Herf will do it automatically.
              Should your event details change, Herf will automatically send
              update emails. Ensuring your patrons remain informed.
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
            <Text>
              <CheckIcon color="orange.500" mr="2" />
              <b>Description: </b>
              <br />
              <p>
                Attention cigar lounge proprietors! Elevate your member
                engagement and foster a sense of community with our
                sophisticated email notification feature. Keep your valued
                members informed, entertained, and eager to participate in your
                lounge's exclusive events and offers.
              </p>
              <Box mb={4} />
              <CheckIcon color="orange.500" mr="2" />
              <b>Timely Event Updates: </b>
              <br />
              <p>
                Ensure your members never miss out on the latest happenings at
                your lounge with timely event updates delivered directly to
                their email. From cigar tastings to live entertainment, keep
                them informed and excited about the exclusive experiences
                awaiting them.
              </p>
              <Box mb={4} />
              <CheckIcon color="orange.500" mr="2" />
              <b>Exclusive Special Offers: </b>
              <br />
              <p>
                Delight your members with exclusive special offers and
                promotions. From limited-time discounts to VIP access, entice
                them to indulge in the luxury and hospitality your lounge
                provides.
              </p>
              <Box mb={4} />
              <CheckIcon color="orange.500" mr="2" />
              <b>Build Loyalty and Trust: </b>
              <br />
              <p>
                Nurture long-lasting relationships with your members by
                providing them with valuable, relevant content that enhances
                their lounge experience. Foster a sense of belonging and loyalty
                among enthusiasts who appreciate the sophistication and
                camaraderie your lounge offers.
              </p>
              <Box mb={4} />
              <CheckIcon color="orange.500" mr="2" />
              <b>Start Engaging Your Members Today: </b>
              <br />
              <p>
                Empower your lounge to connect with members on a deeper level
                and drive participation in your events and offers. Sign up now
                to access our email notification feature and start building
                stronger relationships with your valued patrons.{' '}
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

export default EmailFeatureCard
