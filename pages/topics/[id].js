import NextLink from "next/link";
import { gql, useQuery } from "@apollo/client";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Divider,
  Flex,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Text,
} from "@chakra-ui/react";
import { BsChevronRight, BsSearch } from "react-icons/bs";
import TopicCourses from "../../src/components/TopicCourses";
import Loading from "../../src/components/Loading";

const ALL_TOPIC_COURSES_QUERY = gql`
  query ALL_TOPIC_COURSES_QUERY($id: ID!) {
    Topic(where: { id: $id }) {
      id
      name
      courses {
        id
        name
        tags {
          name
        }
        photo {
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

export default function TopicPage({ query }) {
  const { data, error, loading } = useQuery(ALL_TOPIC_COURSES_QUERY, {
    variables: { id: query.id },
  });

  if (loading) return <Loading full />;
  if (error) return <div>{error.message}</div>;
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
        <TopicCourses data={data} />
      </Container>
    </Box>
  );
}
