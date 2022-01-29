import { Container, Box, Heading, Image, useColorModeValue, Button, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import { ChevronRightIcon, PhoneIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import { ProjectGridItem } from '../components/GridItem'

import thumbTemporal from '../public/images/projects/thumb_temporal.png'

const Page = () => {
  return (
    <Layout>
      <Container maxW='container.md'>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading className={useColorModeValue('page-title-light', 'page-title-dark') + ' ' + 'page-title'} as="h2" variant="page-title">
              Dan Tran
            </Heading>
            <p className={'line' + ' ' + useColorModeValue('typing-light', 'typing-dark')}>
              Full Stack Developer
            </p>
            <Box align="left" my={4} size="lg">
            <NextLink href="/contact">
              <Button fontSize={20} isFullWidth={true} leftIcon={<PhoneIcon />} colorScheme="teal" variant='outline'>Contact Me</Button> 
            </NextLink>
          </Box>
          </Box>
          <Box flexShrink={0} mt={{base:4, md: 0}} mx={{md: 75}} align="center" >
            <Image
              borderColor={useColorModeValue("blackAlpha.600", "whiteAlpha.800")}
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
            Featured Projects
          </Heading>

          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section>
              <ProjectGridItem id="temporal" title="Temporal" thumbnail={thumbTemporal}>
                A task management app that uses timers and sounds, using the technolgies of NodeJS and Express.
              </ProjectGridItem>
            </Section>
          </SimpleGrid>

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
          <Paragraph>I am an adaptable full stack developer with some UX experience. I am passionate in improving the experience of people. With my curiosity to learn, I am confident in creating great products that anybody can use.
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