import NextLink from "next/link";
import { Box, Container, Heading, Icon, Link, Text } from "@chakra-ui/core";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

function SingleFooterLink({ name, href }) {
  return (
    <NextLink href={href}>
      <Link pr="6">{name}</Link>
    </NextLink>
  );
}

export default function Footer() {
  return (
    <Container as="footer" maxW="xl">
      <Heading as="h5" size="sm" textTransform="uppercase" pt="14" pb="3">
        Company
      </Heading>
      <Box fontSize="sm">
        <SingleFooterLink name="FAQ" href="/" />
        <SingleFooterLink name="Contact Us" href="/" />
        <SingleFooterLink name="Shipping & Refund" href="/" />
        <SingleFooterLink name="Privacy Policy" href="/" />
        <SingleFooterLink name="Terms & Conditions" href="/" />
      </Box>
      <Heading as="h5" size="sm" textTransform="uppercase" pt="8" pb="3">
        Follow Us
      </Heading>
      <Box>
        <Link mr="1">
          <Icon as={AiFillFacebook} boxSize={6} />
        </Link>
        <Link mr="1">
          <Icon as={AiFillInstagram} boxSize={6} />
        </Link>
        <Link>
          <Icon as={AiFillTwitterCircle} boxSize={6} />
        </Link>
      </Box>
      <Text fontSize="sm" textAlign="center" pt="14" pb="3">
        &copy; Home Edvantage 2020
      </Text>
    </Container>
  );
}
