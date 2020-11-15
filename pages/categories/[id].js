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
      <NextLink href={`/categories/${href}`}>
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

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  const categoryName = CATEGORIES.find((x) => x.id == id).name;

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
