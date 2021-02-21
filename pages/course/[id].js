import { gql, useQuery } from "@apollo/client";
import { Box, Container } from "@chakra-ui/react";
import SingleCourse from "../../src/components/SingleCourse";

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
        {/* <SingleCourse id={query.id} /> */}
      </Container>
    </Box>
  );
}

export async function getStaticProps({ params }) {
  console.log("params", params);
  const res = await fetch("http://localhost:3000/admin/api", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query SINGLE_COURSE_QUERY {
          Course(where: { id: "${"602903c0199575001c3d71dbi"}" }) {
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
        }`,
    }),
  });
  const { data, errors } = await res.json();

  console.log("response", data, errors);

  return {
    props: {},
  };
}
