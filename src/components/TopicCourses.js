import { gql, useQuery } from "@apollo/client";
import NextLink from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Divider,
  Flex,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { BsChevronRight, BsSearch } from "react-icons/bs";
import Loading from "./Loading";
import Course from "./Course";

const ALL_TOPIC_COURSES_QUERY = gql`
  query ALL_TOPIC_COURSES_QUERY($id: ID!) {
    Topic(where: { id: $id }) {
      id
      name
      courses {
        id
        name
      }
    }
  }
`;

export default function TopicCourses({ id }) {
  const { data, error, loading } = useQuery(ALL_TOPIC_COURSES_QUERY, {
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

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>Current</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Heading mb="8">{data.Topic.name}</Heading>
      <InputGroup size="lg" maxW="md" mb="8">
        <InputLeftElement
          pointerEvents="none"
          children={<Icon as={BsSearch} color="gray.300" boxSize="6" />}
        />
        <Input type="search" placeholder="Search this topic" />
      </InputGroup>

      <Divider />

      <Flex align="center" justify="space-between" w="full" mt="3" mb="6">
        <Text color="gray.500">Results: {data.Topic.courses.length}</Text>
        <Select placeholder="Sort by" w="auto">
          <option value="title-asc">Title (asc)</option>
          <option value="title-desc">Title (desc)</option>
        </Select>
      </Flex>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing="4" w="full">
        {data.Topic.courses.map((course) => (
          <Course
            name={course.name}
            href={course.id}
            key={course.id}
            tags={[]}
          />
        ))}
      </SimpleGrid>
    </>
  );
}

// const client = useApolloClient();

// const todo = client.readFragment({
//   id: `Course:${query.id}`, // The value of the to-do item's unique identifier
//   fragment: gql`
//     fragment SingleTopic on Course {
//       id
//       name
//     }
//   `,
// });
// console.log("cache", todo);
