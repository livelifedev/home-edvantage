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
  Text,
  VStack,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { CATEGORIES } from "../../src/utils/constants";

function CategoryCard({ name, href }) {
  return (
    <Box borderWidth="1px" borderRadius="md" overflow="hidden" w="full">
      <NextLink href={`/categories/${href}`} passHref>
        <Link color="blue.600">
          <Flex>
            <Box bg="gray.200" h="72" w="80" flexShrink="0" />
            <Box py="8" px="4">
              <Heading as="h3" size="lg" pb="4">
                {name}
              </Heading>
              <Text color="gray.500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Text>
            </Box>
          </Flex>
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
          <VStack spacing="4" w="full">
            {CATEGORIES.map((x) => (
              <CategoryCard name={x.name} href={x.id} key={x.id} />
            ))}
          </VStack>
        </Container>
      </Box>
    </main>
  );
}
