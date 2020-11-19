import { useRouter } from "next/router";
import NextLink from "next/link";
import {
  Box,
  Button,
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
  Text,
} from "@chakra-ui/react";
// import { BsSearch } from "react-icons/bs";
// import { CATEGORIES } from "../src/utils/constants";
import { BsSearch } from "react-icons/bs";
import { CATEGORIES } from "../../src/utils/constants";

function CourseCard({ name, href }) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      w="72"
      mx="4"
      mb="8"
    >
      <NextLink href={`/categories/${href}`} passHref>
        <Link color="blue.600">
          <Box bg="gray.200" w="full" h="40" />
          <Heading as="h5" size="sm" align="center" py="4">
            {name}
          </Heading>
        </Link>
      </NextLink>
    </Box>
  );
}

export default function Category({ categoryName }) {
  const router = useRouter();
  const { id } = router.query;
  console.log(router, id);

  return (
    <main>
      <Box>
        <Container
          maxW="xl"
          d="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          pt="24"
          pb="40"
        >
          <Heading mb="8">{categoryName}</Heading>
          <InputGroup size="lg" maxW="md" mb="8">
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={BsSearch} color="gray.300" boxSize="6" />}
            />
            <Input type="search" placeholder="Search in this category" />
          </InputGroup>

          <Divider />

          <Flex align="center" justify="space-between" w="full" mt="2">
            <Text color="gray.500">Results</Text>
            <Select placeholder="Select option" w="auto">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Flex>

          {/* <Flex wrap="wrap" justify="center" pt="20">
            {CATEGORIES.map((x) => (
              <CourseCard name={x.name} href={x.id} key={x.id} />
            ))}
          </Flex> */}
        </Container>
      </Box>
    </main>
  );
}

export async function getStaticPaths() {
  const paths = CATEGORIES.map((x) => ({
    params: { id: x.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const categoryName = CATEGORIES.find((x) => x.id == params.id).name;

  return {
    props: { categoryName },
  };
}
