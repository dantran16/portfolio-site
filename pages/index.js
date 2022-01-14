import { Container, Box, Heading, Image, useColorModeValue } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
        Hello, I&apos;m a Full Stack Developer & UX Designer based in California
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Dan Tran
          </Heading>
          <p>Full Stack Developer & UX Designer</p>
        </Box>
        <Box flexShrink={0} mt={{base:4, md: 0}} ml={{md: 6}} align="center">
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/profile.jpg"
            alt="Profile Image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Projects
        </Heading>
        
      </Section>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <Paragraph>I am an adaptable full stack developer and UX designer based in California. I am passionate in improving the experience of people. With my curiosity to learn, I am confident in my ability to create the best experience for users.
        </Paragraph>
        <Paragraph> Learn More!</Paragraph>
      </Section>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Links
        </Heading>
      </Section>
    </Container>
  )
}

export default Page;