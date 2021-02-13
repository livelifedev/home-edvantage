import { gql, useQuery } from "@apollo/client";
import { SimpleGrid } from "@chakra-ui/react";
import Course from "./Course";

const ALL_COURSES_QUERY = gql`
  query ALL_COURSES_QUERY {
    allCourses {
      id
      name
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
      status
    }
  }
`;

export default function Courses() {
  const { data, error, loading } = useQuery(ALL_COURSES_QUERY);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <SimpleGrid columns={[1, 2, 3, 4]} spacing="4">
      {data.allCourses.map((course) => (
        <Course name={course.name} href={course.id} key={course.id} tags={[]} />
      ))}
    </SimpleGrid>
  );
}
