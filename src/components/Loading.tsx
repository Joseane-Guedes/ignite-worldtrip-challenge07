import { Flex, Spinner } from "@chakra-ui/react";

export default function Loading() {

  return (
    <Flex align="center" justify="center" bg="rgba(4, 40, 66, .9)" position="fixed" top="0" right="0" w="100vw" h="100vh" zIndex="20">
      <Spinner
  thickness="4px"
  speed="0.65s"
  emptyColor="gray.200"
  color="blue.800"
  size="xl"
/>
    </Flex>
  )
}