import NextLink from "next/link";
import {
  Box,
  Container,
  Heading,
  IconButton,
  Link,
  Text,
} from "@chakra-ui/core";

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
      <Heading as="h5" size="sm" textTransform="uppercase">
        Company
      </Heading>
      <Box fontSize="sm">
        <SingleFooterLink name="FAQ" href="/" />
        <SingleFooterLink name="Contact Us" href="/" />
        <SingleFooterLink name="Shipping & Refund" href="/" />
        <SingleFooterLink name="Privacy Policy" href="/" />
        <SingleFooterLink name="Terms & Conditions" href="/" />
      </Box>
      <Heading as="h5" size="sm" textTransform="uppercase">
        Follow Us
      </Heading>
      <Text fontSize="sm" textAlign="center" p="3">
        &copy; Home Edvantage 2020
      </Text>
    </Container>
  );
}
