// 1. Import `extendTheme`
import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from "@chakra-ui/react"
// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    black: "#090C27",
    white: "#f7fafc",
    brand: {
      100: "#f7fafc",
      400: "#FD184A88",
      500: "#FD184A;",
      900: "#030519",
    },
  },
  styles:{
    global: props => ({
      body: {
        color: mode('gray.700', 'gray.50')(props),
        bg: mode('white', 'gray.900')(props),
      },
    }),
  }
})

export default theme