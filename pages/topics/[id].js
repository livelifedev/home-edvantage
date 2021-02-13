import NextLink from "next/link";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Icon,
} from "@chakra-ui/react";
import { BsChevronRight } from "react-icons/bs";
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

        <TopicCourses id={query.id} />
      </Container>
    </Box>
  );
}
