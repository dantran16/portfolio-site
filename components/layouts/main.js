import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {

  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Dan's Portfoilio Website" />
        <meta name="author" content="Dan Tran" />
        <title>Dan Tran - Homepage</title>
      </Head>
      
      <Navbar path={router.asPath}/>
      
      <Container maxW="container.md" pt={20}>
        {children}
        
        <Footer />
      </Container>
      
    </Box>
  )
}
export default Main;