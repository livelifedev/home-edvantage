import NextLink from "next/link";
import Image from "next/image";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  IconButton,
  Link,
  Spacer,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";

function SingleNavLink({ name, href }) {
  return (
    <NextLink href={href} passHref>
      <Link color="blue.600" px="3">
        {name}
      </Link>
    </NextLink>
  );
}

export default function Nav() {
  return (
    <Box as="nav" boxShadow="base" py="2" pos="relative">
      <Container maxW="xl" d="flex" h="24" alignItems="center">
        <NextLink href="/" passHref>
          <Link>
            <Image
              src="/logo.png"
              alt="Home-Edvantage"
              width={2326 / 8}
              height={636 / 8}
            />
          </Link>
        </NextLink>

        <Spacer />

        <Box
          fontWeight="bold"
          fontSize="lg"
          letterSpacing="wide"
          mx="3"
          d={["none", null, null, "block"]}
        >
          <SingleNavLink name="Home" href="/" />
          <SingleNavLink name="About" href="/" />
          <SingleNavLink name="Courses" href="/" />
          <SingleNavLink name="Membership" href="/" />
          <SingleNavLink name="Blog" href="/" />
        </Box>
        <ButtonGroup spacing="1" d={["none", null, null, "inline-flex"]}>
          <Button variant="outline" px="8" colorScheme="yellow">
            Log in
          </Button>
          <Button px="8" colorScheme="yellow">
            Register
          </Button>
        </ButtonGroup>

        <IconButton
          ml="4"
          aria-label="Open nav menu"
          icon={<AiOutlineMenu />}
          size="lg"
          variant="outline"
          d={["inline-flex", null, null, "none"]}
        />
      </Container>
    </Box>
  );
}
