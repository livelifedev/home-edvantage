import { gql, useQuery } from "@apollo/client";
import NextLink from "next/link";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
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
import { BsChevronRight } from "react-icons/bs";
import Loading from "./Loading";

const SINGLE_COURSE_QUERY = gql`
  query SINGLE_COURSE_QUERY($id: ID!) {
    Course(where: { id: $id }) {
      id
      topic {
        id
        name
      }
      name
      description
      tags {
        name
      }
    }
  }
`;

export default function SingleCourse({ id }) {
  const { data, error, loading } = useQuery(SINGLE_COURSE_QUERY, {
    variables: { id },
  });

  if (loading) return <Loading />;
  if (error) return <div>{error.message}</div>;
  return (
    <>
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
          <NextLink href={`/topics/${data.Course.topic.id}`} passHref>
            <BreadcrumbLink>{data.Course.topic.name}</BreadcrumbLink>
          </NextLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>Current</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Flex justify="space-between" w="full" wrap={["wrap", null, "nowrap"]}>
        <Heading mb={[2, null, 0]}>{data.Course.name}</Heading>
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
