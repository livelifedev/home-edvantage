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
} from "@chakra-ui/core";
import { BsSearch } from "react-icons/bs";
import Layout from "../src/components/layouts/Layout";

function CatCard({ name }) {
  return (
    <Box p={12} shadow="base" borderWidth="1px" borderRadius="md">
      <Heading fontSize="xl">{name}</Heading>
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

        <Box bg="yellow.400">
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
            <InputGroup size="lg" variant="filled" maxW="md" mb="8">
              <InputLeftElement
                pointerEvents="none"
                children={<Icon as={BsSearch} color="gray.300" boxSize={6} />}
              />
              <Input type="search" placeholder="Search in courses" />
            </InputGroup>
            <SimpleGrid columns={4} spacingX="40px" spacingY="20px" w="100%">
              <CatCard name="Category" />
              <CatCard name="Category" />
              <CatCard name="Category" />
              <CatCard name="Category" />
              <CatCard name="Category" />
              <CatCard name="Category" />
              <CatCard name="Category" />
              <CatCard name="Category" />
            </SimpleGrid>
          </Container>
        </Box>
      </main>
    </Layout>
  );
}
