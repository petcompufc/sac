import { extendTheme } from '@chakra-ui/react';

const theme = {
  fonts: {
    heading: '"MuseoModernoVariable", sans-serif',
  },
  colors: {
    orange: {
      50: '#FEF0E6',
      100: '#FDD5BA',
      200: '#FBBA8D',
      300: '#FA9F61',
      400: '#F88435',
      500: '#F76908',
      600: '#C65406',
      700: '#943F05',
      800: '#632A03',
      900: '#311502',
    },
    cyan: {
      50: '#37474f',
      100: '#BEEEF8',
      200: '#95E3F4',
      300: '#6BD8EF',
      400: '#42CDEB',
      500: '#18C2E7',
      600: '#149BB8',
      700: '#0F748A',
      800: '#0A4E5C',
      900: '#05272E',
    },
    white: '#ffffff',
  },
  config: {
    useSystemColorMode: true,
    initialColorMode: 'light',
  },
};

export default extendTheme(theme);
