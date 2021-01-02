import NextLink from "next/link";
import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { CATEGORIES } from "../src/utils/constants";

function CategoryCard({ name, href }) {
  return (
    <Box borderWidth="1px" borderRadius="md" overflow="hidden">
      <NextLink href={`/topics/${href}`} passHref>
        <Link color="blue.600">
          <Box bg="gray.200" w="full" h="48" />
          <Heading as="h5" size="sm" align="center" py="4" px="2">
            {name}
          </Heading>
        </Link>
      </NextLink>
    </Box>
  );
}

export default function Courses() {
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
          <SimpleGrid columns={[1, 2, 3, 4]} spacing="4" w="full">
            {CATEGORIES.map((x) => (
              <CategoryCard name={x.name} href={x.id} key={x.id} />
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </main>
  );
}
