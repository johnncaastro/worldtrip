import { Center, Text } from "@chakra-ui/react";

export function TitleSlider() {
  return (
    <Center textAlign='center' mb={14}>
      <Text
        fontWeight='medium'
        fontSize={['xl', '3xl', '4xl']}
        lineHeight='5xl'
      >
        Vamos nessa? <br /> Então escolha seu continente
      </Text>
    </Center>
  )
}