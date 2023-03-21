import { Center, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Center w='full' h={[ '50px', '100px' ]}>
      <Image
        src="/logo.svg"
        alt='Logo worldtrip'
        w={[ "100px", "150px", "185px" ]}
      />
    </Center>
  )
}