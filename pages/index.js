import { Container, Box, Heading, Image, useColorModeValue, Button } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'



const Page = () => {
  return (
    <Layout>
      <Container maxW='container.md'>
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
          Hello, I&apos;m a Full Stack Developer & UX Designer based in California!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading className={useColorModeValue('page-title-light', 'page-title-dark') + ' ' + 'page-title'} as="h2" variant="page-title">
              Dan Tran
            </Heading>
            <p>Full Stack Developer & UX Designer</p>
          </Box>
          <Box flexShrink={0} mt={{base:4, md: 0}} mx={{md: 100}} align="center" >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="200px"
              display="inline-block"
              src="/images/profile.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Projects
          </Heading>
          <Box align="left" my={4} size="lg">
            <NextLink href="/projects">
              <Button fontSize={20} isFullWidth={true} rightIcon={<ChevronRightIcon />} colorScheme="teal" variant='outline'>See More Projects</Button> 
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            About Me
          </Heading>
          <Paragraph>I am an adaptable full stack developer and UX designer based in California. I am passionate in improving the experience of people. With my curiosity to learn, I am confident in creating great products that anybody can use.
          </Paragraph>
          <Box align="left" my={4} size="lg">
            <NextLink href="/about">
              <Button fontSize={20} isFullWidth={true} rightIcon={<ChevronRightIcon />} colorScheme="teal" variant='outline'>Learn More About Me</Button> 
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Skills
          </Heading>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Links
          </Heading>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page;