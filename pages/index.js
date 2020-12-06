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
