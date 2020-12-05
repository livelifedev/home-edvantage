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
import { CATEGORIES } from "../../src/utils/constants";

function CategoryCard({ name, href }) {
  return (
    <Box borderWidth="1px" borderRadius="md" overflow="hidden">
      <NextLink href={`/categories/${href}`} passHref>
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

export default function Home() {
  return (
    <main>
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
          <Heading mb="8">Course Categories</Heading>
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
