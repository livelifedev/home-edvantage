import { useRouter } from "next/router";
import NextLink from "next/link";
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

function CourseCard({ name, description, href }) {
  return (
    <Box borderWidth="1px" borderRadius="md" overflow="hidden">
      <NextLink href={`/course/${href}`} passHref>
        <Link color="blue.600">
          <Heading
            as="h5"
            size="sm"
            isTruncated
            noOfLines="2"
            px="2"
            h="16"
            d="flex"
            alignItems="center"
          >
            {name}
          </Heading>
          <Box bg="gray.200" w="full" h="40" />
        </Link>
      </NextLink>
      <Wrap px="2" h="20" d="flex" alignItems="center">
        <WrapItem>
          <Tag variant="subtle" colorScheme="yellow">
            Core Skills
          </Tag>
        </WrapItem>
        <WrapItem>
          <Tag variant="subtle" colorScheme="yellow">
            Algebra
          </Tag>
        </WrapItem>
        <WrapItem>
          <Tag variant="subtle" colorScheme="yellow">
            Algebra
          </Tag>
        </WrapItem>
        <WrapItem>
          <Tag variant="subtle" colorScheme="yellow">
            Algebra
          </Tag>
        </WrapItem>
      </Wrap>
    </Box>
  );
}

export default function Category({ categoryName }) {
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
        <Heading mb="8">{categoryName}</Heading>
        <InputGroup size="lg" maxW="md" mb="8">
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={BsSearch} color="gray.300" boxSize="6" />}
          />
          <Input type="search" placeholder="Search in this category" />
        </InputGroup>

        <Divider />

        <Flex align="center" justify="space-between" w="full" mt="3" mb="6">
          <Text color="gray.500">Results</Text>
          <Select placeholder="Sort by" w="auto">
            <option value="title-asc">Title (asc)</option>
            <option value="title-desc">Title (desc)</option>
          </Select>
        </Flex>

        <SimpleGrid columns={[1, 2, 3, 4]} spacing="4">
          {COURSES.map((x) => (
            <CourseCard
              name={x.name}
              description={x.description}
              href={x.id}
              key={x.id}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
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
