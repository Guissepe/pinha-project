import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../componets/navbar/navbar'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'



const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar/>
      <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}
