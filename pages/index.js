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
  SimpleGrid,
  Divider,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import Layout from "../src/components/layouts/Layout";
import { CATEGORIES } from "../src/utils/constants";

function CategoryCard({ name }) {
  return (
    <Box borderWidth="1px" borderRadius="md" overflow="hidden">
      <Box bg="gray.200" w="full" h="40" />
      <Heading as="h5" size="sm" align="center" py="4">
        {name}
      </Heading>
    </Box>
  );
}

export default function Home() {
  return (
    <Layout>
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
            <InputGroup size="lg" maxW="md" mb="8">
              <InputLeftElement
                pointerEvents="none"
                children={<Icon as={BsSearch} color="gray.300" boxSize="6" />}
              />
              <Input type="search" placeholder="Search in courses" />
            </InputGroup>
            <SimpleGrid columns="4" spacingX="10" spacingY="5" w="full">
              {CATEGORIES.map((x, i) => (
                <CategoryCard name={x} key={i} />
              ))}
            </SimpleGrid>
          </Container>
          <Divider />
        </Box>
      </main>
    </Layout>
  );
}
