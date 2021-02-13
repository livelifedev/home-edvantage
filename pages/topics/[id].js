import { Box, Container } from "@chakra-ui/react";
import TopicCourses from "../../src/components/TopicCourses";

export default function TopicPage({ query }) {
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
        <TopicCourses id={query.id} />
      </Container>
    </Box>
  );
}
