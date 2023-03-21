import { Box, Flex } from "@chakra-ui/react";
import { Logo } from "./logo";
import { PreviousButton } from "./previousButton";

export function HeaderContinent() {
  return (
    <Flex
      w="full"
      h={[ "50px", "100px" ]}
      alignItems="center"
      justifyContent="space-between"
      px={[2, 10, 24]}
    >
      <PreviousButton />

      <Logo />

      <Box></Box>
    </Flex>
  )
}