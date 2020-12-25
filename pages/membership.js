import { Box, Container, Heading } from "@chakra-ui/react";

export default function About() {
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
          <Heading as="h1" size="2xl" mb="8">
            Membership
          </Heading>
        </Container>
      </Box>
    </main>
  );
}
