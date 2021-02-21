import { Box, Spinner } from "@chakra-ui/react";

function Loader() {
  return (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  );
}

export default function Loading({ full }) {
  if (full)
    return (
      <Box
        d="flex"
        alignItems="center"
        justifyContent="center"
        h="100vh"
        w="full"
        mt="-112px"
      >
        <Loader />
      </Box>
    );

  return (
    <Box
      d="flex"
      alignItems="center"
      justifyContent="center"
      h="full"
      w="full"
      py="8"
    >
      <Loader />
    </Box>
  );
}
