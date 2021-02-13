import NextLink from "next/link";
import { Box, Heading, Link, Tag, Wrap, WrapItem } from "@chakra-ui/react";

export default function Course({ name, href, tags }) {
  return (
    <Box borderWidth="1px" borderRadius="md" overflow="hidden">
      <NextLink href={`/course/${href}`} passHref>
        <Link color="blue.600">
          <Heading as="h5" size="sm" isTruncated noOfLines="2" m="2" minH="10">
            {name}
          </Heading>
          <Box bg="gray.200" w="full" h="40" />
        </Link>
      </NextLink>
      <Wrap p="2" d="flex" alignItems="center">
        {tags.map((tag) => (
          <WrapItem key={tag.name}>
            <Tag variant="subtle" colorScheme="yellow">
              {tag.name}
            </Tag>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
}
