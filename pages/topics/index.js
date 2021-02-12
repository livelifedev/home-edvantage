import {
  Box,
  Container,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { TopicsList } from "../../src/components/Topics";

export default function Home() {
  return (
    <main>
      <Box>
        <Container
          maxW="container.xl"
          d="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          pt="24"
          pb="40"
        >
          <Heading mb="8" as="h1" size="2xl">
            Course Topics
          </Heading>
          <InputGroup size="lg" maxW="md" mb="10">
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={BsSearch} color="gray.300" boxSize="6" />}
            />
            <Input type="search" placeholder="Search all courses" />
          </InputGroup>
          <TopicsList />
        </Container>
      </Box>
    </main>
  );
}
