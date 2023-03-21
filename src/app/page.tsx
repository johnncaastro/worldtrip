'use client'

import { Box, Divider } from '@chakra-ui/react';
import { Header } from '@/components/header';
import { Banner } from '@/components/banner';
import { Slider } from '@/components/Slider/page';
import { BussinessMenu } from '@/components/businessMenu';

import { Poppins } from '@next/font/google';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function Home() {
  return (
    <Box w='100vw' maxW={1440} h='100vh'>
      <Header />

      <Banner />

      <BussinessMenu />

      <Divider
        w={['70px', '80px', '90px']}
        mt={20}
        mb={14}
        mx='auto'
        borderWidth={1}
        borderColor='gray.700'
      />

      <Slider />

      <Divider mt={8} />
    </Box>
  )
}
