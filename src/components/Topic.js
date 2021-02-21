import NextLink from "next/link";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";

export const TopicListItem = ({ name, href, description, src }) => {
  return (
    <Box borderWidth="1px" borderRadius="md" overflow="hidden" w="full">
      <Flex direction={["column", null, "row"]}>
        <Box bg="gray.200" h="60" w={["full", null, 80]} flexShrink="0">
          {src && (
            <Image src={src} fit="cover" align="center" h="full" w="full" />
          )}
        </Box>
        <Grid templateRows="auto 1fr auto" py="8" px="4">
          <GridItem mb="4">
            <NextLink href={`/topics/${href}`} passHref>
              <Link color="blue.600">
                <Heading as="h3" size="lg">
                  {name}
                </Heading>
              </Link>
            </NextLink>
          </GridItem>
          <Text color="gray.500">{description}</Text>
          <GridItem mt="4">
            <NextLink href={`/topics/${href}`} passHref>
              <Button colorScheme="blue" as="a">
                Browse Courses
              </Button>
            </NextLink>
          </GridItem>
        </Grid>
      </Flex>
    </Box>
  );
};

export const TopicGridItem = ({ name, href, src }) => {
  return (
    <Box borderWidth="1px" borderRadius="md" overflow="hidden">
      <NextLink href={`/topics/${href}`} passHref>
        <Link color="blue.600">
          <Box bg="gray.200" w="full" h="48">
            {src && (
              <Image src={src} fit="cover" align="center" h="full" w="full" />
            )}
          </Box>
          <Heading as="h5" size="sm" align="center" py="4" px="2">
            {name}
          </Heading>
        </Link>
      </NextLink>
    </Box>
  );
};
