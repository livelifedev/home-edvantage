import NextLink from "next/link";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";

export default function LoginPage() {
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
            Member Login
          </Heading>
          <Container maxW="container.sm">
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder="Email address" />
            </FormControl>
            <FormControl id="password" mt="4">
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="Password" />
            </FormControl>
            <HStack spacing="3" mt="6">
              <Button
                colorScheme="blue"
                // isLoading={props.isSubmitting}
                type="submit"
              >
                Log in
              </Button>
              <Text>
                or{" "}
                <NextLink href="/membership" passHref>
                  <Link color="blue.600">Register</Link>
                </NextLink>
              </Text>
            </HStack>
          </Container>
        </Container>
      </Box>
    </main>
  );
}
