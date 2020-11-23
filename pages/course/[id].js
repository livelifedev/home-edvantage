import { useRouter } from "next/router";
import NextLink from "next/link";
import Image from "next/image";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  ListItem,
  SimpleGrid,
  Tag,
  Text,
  UnorderedList,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { CATEGORIES, COURSES } from "../../src/utils/constants";
import { BsSearch } from "react-icons/bs";

export default function Course({ categoryName }) {
  const router = useRouter();
  const { id } = router.query;
  console.log(router, id);

  return (
    <Box as="main">
      <Container
        maxW="xl"
        d="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        pt="24"
        pb="40"
      >
        <Flex justify="space-between" w="full">
          <Heading>Title of Course</Heading>
          <Button colorScheme="blue">Get Course</Button>
        </Flex>

        <Divider my="8" />

        <SimpleGrid columns={2} spacing={10} w="full" templateColumns="2fr 1fr">
          <Box>
            <Heading mb="4" as="h4" size="md">
              Description
            </Heading>
            <Text color="gray.500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>

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
              <WrapItem>
                <Tag variant="subtle" colorScheme="yellow">
                  Core Skills
                </Tag>
              </WrapItem>
              <WrapItem>
                <Tag variant="subtle" colorScheme="yellow">
                  Algebra
                </Tag>
              </WrapItem>
              <WrapItem>
                <Tag variant="subtle" colorScheme="yellow">
                  Algebra
                </Tag>
              </WrapItem>
              <WrapItem>
                <Tag variant="subtle" colorScheme="yellow">
                  Algebra
                </Tag>
              </WrapItem>
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
      </Container>
    </Box>
  );
}

// export async function getStaticPaths() {
//   const paths = CATEGORIES.map((x) => ({
//     params: { id: x.id },
//   }));

//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//   const categoryName = CATEGORIES.find((x) => x.id == params.id).name;

//   return {
//     props: { categoryName },
//   };
// }
