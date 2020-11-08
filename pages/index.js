import { Box } from "@chakra-ui/core";
import Layout from "../src/components/layouts/Layout";

export default function Home() {
  return (
    <Layout>
      <main>
        <Box bg="blue.600" h="xs">
          MAIN
        </Box>
        <Box bg="yellow.400" h="sm">
          MAIN 2
        </Box>
      </main>
    </Layout>
  );
}
