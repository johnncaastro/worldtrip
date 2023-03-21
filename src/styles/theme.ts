import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      "700": "#47585b",
      "100": "#f5f8fa",
    },
    yellow: {
      "300": "#ffba08",
    }
  },
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        color: 'gray.700',
      }
    }
  },
  breakpoints: {
    sm: '360px',
  }
})