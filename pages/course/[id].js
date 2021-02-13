import { Box, Container } from "@chakra-ui/react";
import SingleCourse from "../../src/components/SingleCourse";

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
        <SingleCourse id={query.id} />
      </Container>
    </Box>
  );
}
