import { gql, useQuery } from "@apollo/client";
import { SimpleGrid, VStack } from "@chakra-ui/react";
import { TopicGridItem, TopicListItem } from "./Topic";

const ALL_TOPICS_QUERY = gql`
  query ALL_TOPICS_QUERY {
    allTopics {
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

export const TopicsGrid = () => {
  const { data, error, loading } = useQuery(ALL_TOPICS_QUERY);
  console.log("api grid", loading, data);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <SimpleGrid columns={[1, 2, 3, 4]} spacing="4" w="full">
      {data.allTopics.map((topic) => (
        <TopicGridItem name={topic.name} href={topic.id} key={topic.id} />
      ))}
    </SimpleGrid>
  );
};

export const TopicsList = () => {
  const { data, error, loading } = useQuery(ALL_TOPICS_QUERY);
  console.log("api list", loading, data);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <VStack spacing="4" w="full">
      {data.allTopics.map((topic) => (
        <TopicListItem
          name={topic.name}
          href={topic.id}
          key={topic.id}
          description={topic.description}
        />
      ))}
    </VStack>
  );
};
