import { useRouter } from "next/router";
import NextLink from "next/link";
import Image from "next/image";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Icon,
  ListItem,
  SimpleGrid,
  Tag,
  Text,
  UnorderedList,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { COURSES } from "../../src/utils/constants";
import { BsChevronRight } from "react-icons/bs";

export default function CoursePage({ course }) {
  const router = useRouter();
  const { id } = router.query;
  console.log(router, id);

  return (
    <Box as="main">
      <Container
        maxW="container.xl"
        d="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        pt="8"
        pb="40"
      >
        <Breadcrumb
          color="blue.600"
          w="full"
          pb={[8, 16]}
          separator={<Icon as={BsChevronRight} pb="1" />}
        >
          <BreadcrumbItem>
            <NextLink href="/topics" passHref>
              <BreadcrumbLink>Topics</BreadcrumbLink>
            </NextLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <NextLink href={`/topics/${course.category.id}`} passHref>
              <BreadcrumbLink>{course.category.name}</BreadcrumbLink>
            </NextLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>Current</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Flex justify="space-between" w="full" wrap={["wrap", null, "nowrap"]}>
          <Heading mb={[2, null, 0]}>Title of Course</Heading>
          <Button colorScheme="blue" ml={[0, null, 2]}>
            Get Course
          </Button>
        </Flex>

        <Divider my="8" />

        <SimpleGrid
          spacing="10"
          w="full"
          templateColumns={["1fr", null, null, "2fr 1fr"]}
        >
          <Box>
            <Heading mb="4" as="h4" size="md">
              Description
            </Heading>
            <Text color="gray.500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
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

export async function getStaticPaths() {
  const paths = COURSES.map((x) => ({
    params: { id: x.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const course = COURSES.find((x) => x.id == params.id);

  return {
    props: { course },
  };
}
