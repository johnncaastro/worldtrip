'use client'

import { ContinentContextProvider } from '@/contexts/ContinentContext';
import { theme } from '@/styles/theme';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <head />
      <body>
        <ContinentContextProvider>
          <CacheProvider>
            <ChakraProvider theme={theme}>
              {children}
            </ChakraProvider>
          </CacheProvider>
        </ContinentContextProvider>
      </body>
    </html>
  )
}
