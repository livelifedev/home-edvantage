import { gql, useQuery } from "@apollo/client";

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
    <div>
      {data.allCourses.map((x) => (
        <div key={x.id}>x.name</div>
      ))}
    </div>
  );
}
