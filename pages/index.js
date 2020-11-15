import NextLink from "next/link";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { CATEGORIES } from "../src/utils/constants";

function CategoryCard({ name, href }) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      w="72"
      mx="4"
      mb="8"
    >
      <NextLink href={`/categories/${href}`}>
        <Link color="blue.600">
          <Box bg="gray.200" w="full" h="40" />
          <Heading as="h5" size="sm" align="center" py="4">
            {name}
          </Heading>
        </Link>
      </NextLink>
    </Box>
  );
}

export default function Home() {
  return (
    <main>
      <Box bg="blue.600">
        <Container
          maxW="xl"
          h="sm"
          d="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Heading color="white" mb="8">
            Leading Text
          </Heading>
          <Button>Get Started</Button>
        </Container>
      </Box>

      <Box>
        <Container
          maxW="xl"
          d="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          pt="24"
          pb="40"
        >
          <Heading mb="8">Our Courses</Heading>
          <InputGroup size="lg" maxW="md" mb="10">
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={BsSearch} color="gray.300" boxSize="6" />}
            />
            <Input type="search" placeholder="Search all courses" />
          </InputGroup>
          <Flex wrap="wrap" justify="center">
            {CATEGORIES.map((x) => (
              <CategoryCard name={x.name} href={x.id} key={x.id} />
            ))}
          </Flex>
        </Container>
      </Box>
    </main>
  );
}
