import { Box, Spinner } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Box py="4" px="2">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Box>
  );
}
