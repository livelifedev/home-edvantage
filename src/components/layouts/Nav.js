import NextLink from "next/link";
import Image from "next/image";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Link,
  Spacer,
} from "@chakra-ui/core";

function SingleNavLink({ name, href }) {
  return (
    <NextLink href={href}>
      <Link color="blue.600" pr="6">
        {name}
      </Link>
    </NextLink>
  );
}

export default function Nav() {
  return (
    <Box as="nav" boxShadow="base" py="2" pos="relative">
      <Container maxW="xl" d="flex" h="24" alignItems="center">
        <Image
          src="/logo.png"
          alt="Home-Edvantage"
          width={2326 / 8}
          height={636 / 8}
        />
        <Spacer />
        <Box fontWeight="bold" fontSize="lg" letterSpacing="wide">
          <SingleNavLink name="Home" href="/" />
          <SingleNavLink name="About" href="/" />
          <SingleNavLink name="Courses" href="/" />
          <SingleNavLink name="Membership" href="/" />
          <SingleNavLink name="Blog" href="/" />
        </Box>
        <ButtonGroup spacing="1">
          <Button variant="outline" px="8" colorScheme="yellow">
            Log in
          </Button>
          <Button px="8" colorScheme="yellow">
            Register
          </Button>
        </ButtonGroup>
      </Container>
    </Box>
  );
}