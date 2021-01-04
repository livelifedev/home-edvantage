import NextLink from "next/link";
import Image from "next/image";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  Link,
  Spacer,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";

function SingleNavLink({ name, href, onClick }) {
  return (
    <NextLink href={href} passHref>
      <Link color="blue.600" px="3" onClick={onClick}>
        {name}
      </Link>
    </NextLink>
  );
}

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="nav" boxShadow="base" py="2" pos="relative">
      <Container maxW="container.xl" d="flex" h="24" alignItems="center">
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
          <SingleNavLink name="About" href="/about" />
          <SingleNavLink name="Courses" href="/topics" />
          <SingleNavLink name="Membership" href="/membership" />
          <SingleNavLink name="Blog" href="/" />
        </Box>
        <ButtonGroup spacing="1" d={["none", null, null, "inline-flex"]}>
          <NextLink href="/login" passHref>
            <Button variant="outline" px="8" colorScheme="yellow" as="a">
              Log in
            </Button>
          </NextLink>
          <NextLink href="/membership" passHref>
            <Button px="8" colorScheme="yellow" as="a">
              Register
            </Button>
          </NextLink>
        </ButtonGroup>

        <IconButton
          ml="4"
          aria-label="Open nav menu"
          icon={<AiOutlineMenu />}
          size="lg"
          variant="outline"
          d={["inline-flex", null, null, "none"]}
          onClick={onOpen}
        />
      </Container>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader />
            <DrawerBody>
              <VStack
                fontWeight="bold"
                fontSize="lg"
                letterSpacing="wide"
                spacing="24px"
              >
                <SingleNavLink name="Home" href="/" onClick={onClose} />
                <SingleNavLink name="About" href="/about" onClick={onClose} />
                <SingleNavLink
                  name="Courses"
                  href="/topics"
                  onClick={onClose}
                />
                <SingleNavLink
                  name="Membership"
                  href="/membership"
                  onClick={onClose}
                />
                <SingleNavLink name="Blog" href="/" onClick={onClose} />
                <Divider />
                <SingleNavLink name="Log in" href="/login" onClick={onClose} />
                <SingleNavLink
                  name="Register"
                  href="/membership"
                  onClick={onClose}
                />
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
}
