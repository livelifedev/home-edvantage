import { SimpleGrid, VStack } from "@chakra-ui/react";
import { CATEGORIES } from "../utils/constants";
import { TopicGridItem, TopicListItem } from "./Topic";

export const TopicsGrid = () => {
  return (
    <SimpleGrid columns={[1, 2, 3, 4]} spacing="4" w="full">
      {CATEGORIES.map((x) => (
        <TopicGridItem name={x.name} href={x.id} key={x.id} />
      ))}
    </SimpleGrid>
  );
};

export const TopicsList = () => {
  return (
    <VStack spacing="4" w="full">
      {CATEGORIES.map((x) => (
        <TopicListItem
          name={x.name}
          href={x.id}
          key={x.id}
          description={x.description}
        />
      ))}
    </VStack>
  );
};
