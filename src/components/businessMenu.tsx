import { Box, Flex, Image, Text } from "@chakra-ui/react";

export function BussinessMenu() {
  return (
    <Flex
      alignItems='center'
      justifyContent='space-evenly'
      gap={8}
      px={8}
      wrap="wrap"
    >
      <Flex direction={[ 'row', 'row', 'column' ]} alignItems='center' gap={2}>
        <Image
          display={[ 'none', 'none', 'flex' ]}
          src="/cocktail.svg"
          alt='imagem de bebida'
          width={[ '40px', '50px', '65px' ]}
        />
        <Box
          display={[ 'flex', 'flex', 'none' ]}
          w="20px"
          h="20px"
          borderRadius="full"
          bgColor="yellow.300"
        >
        </Box>
        <Text
          fontWeight='semibold'
          fontSize={[ 'lg', 'xl', '2xl' ]}
        >
          vida noturna
        </Text>
      </Flex>

      <Flex direction={[ 'row', 'row', 'column' ]} alignItems='center' gap={2}>
        <Image
          display={[ 'none', 'none', 'flex' ]}
          src="/surf.svg"
          alt='imagem de prancha de surf e sol'
          width={[ '40px', '50px', '65px' ]}
        />
        <Box
          display={[ 'flex', 'flex', 'none' ]}
          w="20px"
          h="20px"
          borderRadius="full"
          bgColor="yellow.300"
        >
        </Box>
        <Text
          fontWeight='semibold'
          fontSize={[ 'lg', 'xl', '2xl' ]}
        >
          praia
        </Text>
      </Flex>

      <Flex direction={[ 'row', 'row', 'column' ]} alignItems='center' gap={2}>
        <Image
          display={[ 'none', 'none', 'flex' ]}
          src="/building.svg"
          alt='imagem de edifício'
          width={[ '40px', '50px', '65px' ]}
        />
        <Box
          display={[ 'flex', 'flex', 'none' ]}
          w="20px"
          h="20px"
          borderRadius="full"
          bgColor="yellow.300"
        >
        </Box>
        <Text
          fontWeight='semibold'
          fontSize={[ 'lg', 'xl', '2xl' ]}
        >
          moderno
        </Text>
      </Flex>

      <Flex direction={[ 'row', 'row', 'column' ]} alignItems='center' gap={2}>
        <Image
          display={[ 'none', 'none', 'flex' ]}
          src="/museum.svg"
          alt='imagem de museu'
          width={[ '40px', '50px', '65px' ]}
        />
        <Box
          display={[ 'flex', 'flex', 'none' ]}
          w="20px"
          h="20px"
          borderRadius="full"
          bgColor="yellow.300"
        >
        </Box>
        <Text
          fontWeight='semibold'
          fontSize={[ 'lg', 'xl', '2xl' ]}
        >
          clássico
        </Text>
      </Flex>

      <Flex direction={[ 'row', 'row', 'column' ]} alignItems='center' gap={2}>
        <Image
          display={[ 'none', 'none', 'flex' ]}
          src="/earth.svg"
          alt='imagem da Terra em miniatura'
          width={[ '40px', '50px', '65px' ]}
        />
        <Box
          display={[ 'flex', 'flex', 'none' ]}
          w="20px"
          h="20px"
          borderRadius="full"
          bgColor="yellow.300"
        >
        </Box>
        <Text
          fontWeight='semibold'
          fontSize={[ 'lg', 'xl', '2xl' ]}
        >
          e mais...
        </Text>
      </Flex>
    </Flex>
  )
}