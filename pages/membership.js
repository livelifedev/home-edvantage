import NextLink from "next/link";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Stack,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";

export default function MembershipPage() {
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
            Become a Member
          </Heading>
          <Container maxW="container.sm">
            <FormControl id="email" isRequired>
              <FormLabel>Email Address</FormLabel>
              <Input type="email" placeholder="Email Address" />
            </FormControl>
            <Stack direction={["column", "row"]} spacing="3" mt="4">
              <FormControl id="first-name" isRequired>
                <FormLabel>First Name</FormLabel>
                <Input type="text" placeholder="First Name" />
              </FormControl>
              <FormControl id="last-name" isRequired>
                <FormLabel>Last Name</FormLabel>
                <Input type="text" placeholder="Last Name" />
              </FormControl>
            </Stack>
            <FormControl id="password" mt="4" isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="Password" />
            </FormControl>
            <FormControl id="confirm-password" mt="4" isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <Input type="password" placeholder="Confirm Password" />
            </FormControl>
            <Button
              colorScheme="blue"
              mt="6"
              // isLoading={props.isSubmitting}
              type="submit"
            >
              Create Account
            </Button>
          </Container>
        </Container>
      </Box>
    </main>
  );
}
