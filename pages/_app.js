import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import customTheme from '../lib/theme'
import { AnimatePresence } from 'framer-motion'
import '../lib/styles.css'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default Website