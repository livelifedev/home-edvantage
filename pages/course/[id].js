import { useRouter } from "next/router";
import NextLink from "next/link";
import Image from "next/image";
import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Select,
  SimpleGrid,
  Tag,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { CATEGORIES, COURSES } from "../../src/utils/constants";
import { BsSearch } from "react-icons/bs";

export default function Course({ categoryName }) {
  const router = useRouter();
  const { id } = router.query;
  console.log(router, id);

  return (
    <Box as="main">
      <Container
        maxW="xl"
        d="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        pt="24"
        pb="40"
      >
        <Heading mb="8">Title of item</Heading>
        <SimpleGrid columns={2} spacing={10} w="full" templateColumns="2fr 1fr">
          <Box>
            <Heading mb="8">Description</Heading>
            <Text color="gray.500">Results</Text>
            <Heading mb="8">Details</Heading>
            <Text color="gray.500">Results</Text>
          </Box>
          <Box w="full" h="md" bg="gray.200">
            {/* <Image
              src="/me.png"
              alt="Picture of the author"
              width={500}
              height={500}
            /> */}
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

// export async function getStaticPaths() {
//   const paths = CATEGORIES.map((x) => ({
//     params: { id: x.id },
//   }));

//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//   const categoryName = CATEGORIES.find((x) => x.id == params.id).name;

//   return {
//     props: { categoryName },
//   };
// }
