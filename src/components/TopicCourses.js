import { SimpleGrid } from "@chakra-ui/react";
import Loading from "./Loading";
import Course from "./Course";

export default function TopicCourses({ data, error, loading }) {
  if (loading) return <Loading />;
  if (error) return <div>{error.message}</div>;
  return (
    <>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing="4" w="full">
        {data.Topic.courses.map((course) => (
          <Course
            name={course.name}
            href={course.id}
            key={course.id}
            tags={course.tags}
            src={course.photo?.image?.publicUrlTransformed}
          />
        ))}
      </SimpleGrid>
    </>
  );
}
