import { Flex, Heading } from "@chakra-ui/core";
import Layout from "../src/components/layouts/Layout";

export default function Home() {
  return (
    <Layout>
      <main>
        <Flex bg="blue.600" h="sm" align="center" justify="center">
          <Heading>Leading Text</Heading>
        </Flex>
        <Flex bg="yellow.400" h="xl" align="center" justify="center">
          <Heading>Our Courses</Heading>
        </Flex>
      </main>
    </Layout>
  );
}
