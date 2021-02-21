import NextLink from "next/link";
import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { TopicsGrid } from "../src/components/Topics";

export default function HomePage() {
  return (
    <main>
      <Box bg="blue.600">
        <Container
          maxW="container.xl"
          h="sm"
          d="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <Heading as="h1" size="2xl" color="white" mb="4">
            Take the Home Edvantage for Students
          </Heading>
          <Text color="white" fontWeight="semibold" mb="8">
            “The place for students to learn, excel and succeed!”
          </Text>
          <NextLink href="/membership" passHref>
            <Button as="a">Get Started</Button>
          </NextLink>
        </Container>
      </Box>

      <Box>
        <Container
          maxW="container.xl"
          d="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          pt="24"
          pb="40"
          textAlign="center"
        >
          <Heading mb="8">What We Offer</Heading>
          <Text>
            We aim to bring educational success with our resources in the
            comfort of your own home.
          </Text>
          <Text mb="8">
            Have everything that you need at your finger tips. From Mathematics
            to English, we have the resources to help you.
          </Text>
          <InputGroup size="lg" maxW="md" mb="10">
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={BsSearch} color="gray.300" boxSize="6" />}
            />
            <Input type="search" placeholder="Search all courses" />
          </InputGroup>

          <TopicsGrid />

          <Divider my="24" />

          <Heading mb="8">Register Now for Free Access</Heading>
          <NextLink href="/membership" passHref>
            <Button as="a" colorScheme="blue">
              Get Started
            </Button>
          </NextLink>
        </Container>
      </Box>
    </main>
  );
}
