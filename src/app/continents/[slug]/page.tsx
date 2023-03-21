"use client"

import { useContinent } from "@/contexts/ContinentContext";
import { HeaderContinent } from "@/components/HeaderContinents/page";
import { Box, Flex, Text, Image, HStack, Divider } from "@chakra-ui/react";

interface ContinentProps {
  params: {
    slug: string
  }
}

export default function Continent({ params }: ContinentProps) {
  const { continents } = useContinent();

  const selectedContinent = continents.filter(continent => (
    continent.uid === params.slug
  ))

  return (
    <Box w="100vw" maxW={1440} h="100vh">
      <HeaderContinent />

      <Flex
        w="full"
        h={[ "150px", "500px", "500px", "500px" ]}
        alignItems={[ "center", "center", "flex-end" ]}
        justifyContent={[ "center", "center", "normal" ]}
        mb="5rem"
        bgImage={selectedContinent[0].image}
        bgSize="cover"
        bgPosition="center"
      >
        <Text
          fontSize={["3xl", "5xl"]}
          fontWeight="semibold"
          color="gray.100"
          mb={{ md: 12 }}
          px={[4, 14, 32]}
        >
          {selectedContinent[0].name}
        </Text>
      </Flex>

      <Flex
        direction={[ "column", "column", "column", "row" ]}
        alignItems="center"
        justifyContent="space-between"
        gap={16}
        px={[6, 14, 32]}
      >
        <Text
          flex="8"
          textAlign="justify"
          fontSize={[ "sm", "md", "lg", "xl", "2xl" ]}
          lineHeight="xl"
        >
          {selectedContinent[0].description}
        </Text>

        <Flex flex="5" fontWeight="semibold">
          <HStack spacing={10}>
            <Box textAlign="center">
              <Text
                fontSize={[ "2xl", "4xl", "5xl" ]}
                color="yellow.300"
              >
                {selectedContinent[0].countries}
              </Text>
              <Text fontSize={[ "md", "xl", "2xl" ]}>países</Text>
            </Box>

            <Box textAlign="center">
              <Text
                fontSize={[ "2xl", "4xl", "5xl" ]}
                color="yellow.300"
              >
                {selectedContinent[0].languages}
              </Text>
              <Text fontSize={[ "md", "xl", "2xl" ]}>Línguas</Text>
            </Box>

            <Box textAlign="center">
              <Text
                fontSize={[ "2xl", "4xl", "5xl" ]}
                color="yellow.300"
              >
                {selectedContinent[0].mostVisitedCities}
              </Text>
              <Text fontSize={[ "md", "xl", "2xl" ]}>Cidades +100</Text>
            </Box>
          </HStack>
        </Flex>
      </Flex>

      <Box w="full" px={[6, 14, 32]} mt={20}>
        <Text
          fontSize={[ "2xl", "4xl" ]}
          fontWeight="medium"
          mb="2.5rem"
        >
          Cidades +100
        </Text>

        <Flex wrap="wrap" justifyContent="center">
          {selectedContinent[0].cities.map(city => (
            <Box
              key={city.name}
              w={256}
              h={279}
              borderRadius="0.25rem"
              border="1px"
              borderColor="yellow.300"
              bgColor="white"
              mr={10}
              mb={10}
            >
              <Image
                src={city.image}
                alt="Foto do continente selecionado"
                borderRadius="0.25rem 0.25rem 0 0"
              />

              <Flex
                alignItems="center"
                justifyContent="space-between"
                mt={4}
                mx={4}
              >
                <Box>
                  <Text fontWeight="semibold" fontSize="xl">{city.name}</Text>
                  <Text
                    fontWeight="medium"
                    fontSize="md"
                    color="blackAlpha.400"
                  >
                    {city.country}
                  </Text>
                </Box>

                <Image
                  src={city.image}
                  alt="Foto do continente selecionado"
                  w="30px"
                  h="30px"
                  borderRadius="full"
                />
              </Flex>
            </Box>
          ))}
        </Flex>
      </Box>

      <Divider mt={8} />
    </Box>
  )
}