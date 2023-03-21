import { Image } from "@chakra-ui/react";

export function Logo() {
  return (
    <Image
      src={"/logo.svg"}
      alt="Logo Worldtrip"
      w={[ "100px", "150px", "185px" ]}
    />
  )
}