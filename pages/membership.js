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
          <Heading mb="8">Membership</Heading>
        </Container>
      </Box>
    </main>
  );
}
