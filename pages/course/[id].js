import NextLink from "next/link";
import { gql, useQuery } from "@apollo/client";
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
} from "@chakra-ui/react";
import { BsChevronRight } from "react-icons/bs";
import SingleCourse from "../../src/components/SingleCourse";
import Loading from "../../src/components/Loading";

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

export default function CoursePage({ query }) {
  const { data, error, loading } = useQuery(SINGLE_COURSE_QUERY, {
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

        <SingleCourse data={data} />
      </Container>
    </Box>
  );
}

// export async function getStaticPaths() {
//   // const paths = COURSES.map((x) => ({
//   //   params: { id: x.id },
//   // }));

//   return {
//     paths: [{ params: { id: "602903c0199575001c3d71db" } }],
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   console.log("params", params);
//   const res = await fetch("http://localhost:3000/admin/api", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       query: `
//         query SINGLE_COURSE_QUERY {
//           Course(where: { id: "${"602903c0199575001c3d71dbi"}" }) {
//             id
//             topic {
//               id
//               name
//             }
//             name
//             description
//             tags {
//               name
//             }
//           }
//         }`,
//     }),
//   });
//   const { data, errors } = await res.json();

//   console.log("response", data, errors);

//   return {
//     props: {},
//   };
// }
