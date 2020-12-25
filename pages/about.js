import {
  Box,
  Container,
  Heading,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";

function AboutCard({ heading, children }) {
  return (
    <Box borderWidth="1px" borderRadius="md" p="4">
      <Heading as="h3" size="lg" mb="6" textAlign="center" color="yellow.400">
        {heading}
      </Heading>
      <VStack color="gray.500" spacing="4">
        {children}
      </VStack>
    </Box>
  );
}

export default function About() {
  return (
    <main>
      <Box>
        <Container
          maxW="container.xl"
          d="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          pt="24"
          pb="40"
        >
          <Heading mb="8">About Us</Heading>
          <Text>
            Home Edvantage is the place to get easy and convenient resources to
            work from home.
          </Text>
          <Text>
            We aim to provide an affordable and accessible Education at your
            fingertips.
          </Text>
          <Text mb="8">
            We have resources that would help supplement your learning or
            teaching, no matter who you are!
          </Text>
          <SimpleGrid columns={[1, null, null, 3]} spacing="8" w="full">
            <AboutCard heading="Our Story">
              <Text>
                Many of the teachers who have been behind this website have
                experienced the heart-aching frustrations and exhaustion as an
                educators to do as much as they can for more students. There
                just isn’t enough time, money nor resources to do it all.
              </Text>
              <Text>
                Our founders were tutors and public school teachers based in
                Sydney, Australia for many years and loathed the legal, physical
                and financial restraints on the job. Though they said it was
                rewarding to see students achieve the best education, they
                mentioned the inflexibility to teach effective and engaging
                content was incredibly hard to achieve. They believed they could
                do more and this is why “Home Edvantage” was born.
              </Text>
              <Text>
                Through this platform, we believe we can reach a wider range of
                students from different backgrounds at the reduced cost and
                increased effectiveness. We understand that getting a better
                education for students may be a money-consuming ordeal, but it
                doesn’t have to be.
              </Text>
              <Text>
                We have formulated theories and content to cater to all students
                and as in turn, bring confidence and results to their learning.
              </Text>
            </AboutCard>
            <AboutCard heading="Our Belief">
              <Text>
                We know that we can provide a holistic and effective way of
                learning to students in the comfort of their home. Not every
                student is the same and we strongly believe success doesn’t come
                from having a High IQ but from having consistent practice,
                maintaining a strong will and having the right support.{" "}
              </Text>
              <Text>
                Our resources also help teachers to cut the down time on
                preparing lessons and give more time in providing quality
                learning.
              </Text>
              <Text>
                Our approach to learning uses our three steps – C.A.P.
              </Text>
              <Box fontWeight="semibold">
                <Text>Step 1: Comprehend</Text>
                <Text>Step 2: Apply</Text>
                <Text>Step 3: Practice</Text>
              </Box>
              <Text>
                Our mission is to impact the lives of young students across
                Australia in order to help any student disregarding their
                financial situation. We also aim to help parents provide their
                children resources that are hard to come by, especially for
                gifted students undergoing specialised testing such as Selective
                Placement and O.C.
              </Text>
              <Text>We want our students to:</Text>
              <Text fontWeight="semibold" fontSize="2xl">
                Learn, Excel & Succeed!
              </Text>
            </AboutCard>
            <AboutCard heading="Our Service">
              <Text>
                Our aim is to provide student as many resources as we can over
                time. As this website grows and our demands increase, we wish to
                have the following implemented:
              </Text>
              <UnorderedList pl={["4", "8"]} fontWeight="semibold">
                <ListItem>Step-by-step tutorials for all courses</ListItem>
                <ListItem>
                  Specialised Education for Selective Placement and OC
                </ListItem>
                <ListItem>
                  Graded and potential questions with solutions
                </ListItem>
                <ListItem>FREE practice workbooks for students</ListItem>
                <ListItem>Practice exams for school</ListItem>
                <ListItem>Premium Theory Workbooks for all subjects</ListItem>
                <ListItem>Online Tests for Specialised Courses</ListItem>
                <ListItem>FREE cheat sheets for all students</ListItem>
              </UnorderedList>
              <Text>
                And this is just the beginning. We will provide more over time.
                Our team have great ambitions and big dreams for what this
                platform can do and we know we can help thousands of students
                across the country, as long as they have access to the internet
                in the comfort of their home.
              </Text>
            </AboutCard>
          </SimpleGrid>
        </Container>
      </Box>
    </main>
  );
}
