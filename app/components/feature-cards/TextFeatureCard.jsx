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
import { CheckIcon, PhoneIcon } from '@chakra-ui/icons'
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

const TextFeatureCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Card maxW="sm" variant="outline">
        <CardBody>
          <PhoneIcon w={10} h={10} color="orange.500" />
          <Stack mt="6" spacing="3">
            <Heading size="md">Text Notifications</Heading>
            <Text>
              Herf's text message notification service offers all the benefits
              of email in a text message format. All Event and Special Offer
              details, updates and cancellations are sent to your members
              device.
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
            <PhoneIcon w={10} h={10} mt="10" color="orange.500" />
          </Center>
          <ModalHeader>
            Enhance Member Engagement and Loyalty with Text Notifications
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              <CheckIcon color="orange.500" mr="2" />
              <b>Empower Your Lounge: </b>
              <br />
              <p>
                Take control of your lounge's communication strategy with our
                text notifications feature. Easily announce upcoming events,
                promotions, and special offers directly to your members' mobile
                devices, ensuring maximum visibility and attendance.
              </p>
              <Box mb={4} />
              <CheckIcon color="orange.500" mr="2" />
              <b>Streamline Event Management: </b>
              <br />
              <p>
                Effortlessly manage your lounge's events with our text messaging
                service. Notify members of event details, RSVP deadlines, and
                last-minute changes, minimizing no-shows and ensuring a smooth
                and successful gathering every time.
              </p>
              <Box mb={4} />
              <CheckIcon color="orange.500" mr="2" />
              <b>Boost Member Engagement: </b>
              <br />
              <p>
                Keep members actively engaged and connected to your lounge's
                community with regular updates and exclusive perks. From VIP
                access to new cigar releases to members-only events, our text
                notifications will entice members to participate and stay
                involved.
              </p>
              <Box mb={4} />
              <CheckIcon color="orange.500" mr="2" />
              <b>Drive Loyalty and Retention: </b>
              <br />
              <p>
                Build lasting relationships with your members by providing
                value-added services and experiences. Our text messaging feature
                strengthens member loyalty by keeping them informed, engaged,
                and excited about the opportunities your lounge offers.
              </p>
              <Box mb={4} />
              <CheckIcon color="orange.500" mr="2" />
              <b>Unlock the Power of Text Messaging Today: </b>
              <br />
              <p>
                Transform the way you connect with your members and elevate
                their lounge experience with our text messaging service. Join
                the ranks of leading lounge owners who prioritize member
                engagement and loyalty. Sign up today to start reaping the
                benefits of enhanced communication and community-building.
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

export default TextFeatureCard
