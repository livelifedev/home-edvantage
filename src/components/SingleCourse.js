import {
  Box,
  Divider,
  Heading,
  ListItem,
  SimpleGrid,
  Tag,
  Text,
  UnorderedList,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

export default function SingleCourse({ data }) {
  return (
    <>
      <SimpleGrid
        spacing="10"
        w="full"
        templateColumns={["1fr", null, null, "2fr 1fr"]}
      >
        <Box>
          <Heading mb="4" as="h4" size="md">
            Description
          </Heading>
          <Text color="gray.500">{data.Course.description}</Text>

          <Divider my="8" />

          <Heading mb="4" as="h4" size="md">
            Details
          </Heading>
          <UnorderedList color="gray.500">
            <ListItem>Beginner level</ListItem>
            <ListItem>92 pages</ListItem>
            <ListItem>Content includes problems and solutions</ListItem>
            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
          </UnorderedList>

          <Divider my="8" />

          <Heading mb="4" as="h4" size="md">
            Keywords
          </Heading>
          <Wrap>
            {data.Course.tags.map((tag) => (
              <WrapItem key={tag.name}>
                <Tag variant="subtle" colorScheme="yellow">
                  {tag.name}
                </Tag>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
        <Box w="full" h="md" bg="gray.200">
          {/* <Image
              src="/me.png"
              alt="Picture of the author"
              width={500}
              height={500}
            /> */}
        </Box>
      </SimpleGrid>
    </>
  );
}
