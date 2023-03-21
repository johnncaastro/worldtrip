import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

export function PreviousButton() {
  return (
    <Button as={Link} href="/" _hover={{ backgroundColor: "gray.100" }}>
      <ChevronLeftIcon
        boxSize={6}
        color="gray.700"
        _hover={{ color: "yellow.300" }}
      />
    </Button>
  )
}