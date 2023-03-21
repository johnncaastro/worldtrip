import { Box, Flex, Image, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      w='full'
      h='335px'
      alignItems='center'
      justifyContent='space-around'
      bgImage="url('/images/dark-sky.jpg')"
      bgRepeat='no-repeat'
      bgSize='cover'
      mb={20}
      px={8}
    >
      <Box>
        <Text
          fontWeight='medium'
          fontSize={[ '2xl', '3xl', '4xl' ]}
          lineHeight='5xl'
          color='gray.100'
          mb={5}
        >
          5 Continentes,<br />infinitas possibilidades.
        </Text>

        <Text
          fontWeight='normal'
          fontSize={['md', 'lg', 'xl']}
          lineHeight='3xl'
          color='gray.100'
        >
          Chegou a hora de tirar do papel a viagem que você<br />sempre sonhou.
        </Text>
      </Box>

      <Image
        src="/airplane.svg"
        alt='ícone do avião'
        style={{ alignSelf: 'end' }}
        display={[ "none", "none", "flex" ]}
      />
    </Flex>
  )
}