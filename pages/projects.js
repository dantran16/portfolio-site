import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/GridItem'
import Layout from '../components/layouts/article'

import thumbTemporal from '../public/images/projects/thumb_temporal.png'
import thumbPinterest from '../public/images/projects/thumb_pinterest.jpg'
import placeHolder from '../public/images/placeholder.png'

const Projects = () => {
  return (
    <Layout title="Projects">
      <Container maxW='container.md'>
        <Heading as="h3" fontSize={36} mb={4}>
          Projects
        </Heading>
        <Section>
          <Heading as="h3" variant="section-title">
            2021 - 2022
          </Heading>
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section>
              <ProjectGridItem id="stratlog" title="Stratlog" thumbnail={placeHolder}>
                I made a web application that helps CS:GO players remember their strategies.
              </ProjectGridItem>
            </Section>
            <Section>
              <ProjectGridItem id="barlive" title="BarLive" thumbnail={placeHolder}>
                I designed low fidelity prototypes for BarLive&apos;s desktop website and the mobile application.
              </ProjectGridItem>
            </Section>
          </SimpleGrid>
        </Section>

        <Section>
          <Heading as="h3" variant="section-title">
            2019 - 2020
          </Heading>
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section>
              <ProjectGridItem id="pinterest" title="Pinterest Component Redesign" thumbnail={thumbPinterest}>
                A UX project that offers an alternative approach to Pinterest&apos;s design on its search component in 2020. Involves user testing and UI Design.
              </ProjectGridItem>
            </Section>
            <Section>
              <ProjectGridItem id="zipcar" title="ZipCar Analysis" thumbnail={placeHolder}>
                I don&apos;t remember exactly.
              </ProjectGridItem>
            </Section>
            <Section>
              <ProjectGridItem id="temporal" title="Temporal" thumbnail={thumbTemporal}>
                A task management app that uses timers and sounds, using the technolgies of NodeJS and Express.
              </ProjectGridItem>
            </Section>
          </SimpleGrid>
        </Section>

        <Section>
          <Heading as="h3" variant="section-title">
            Before 2019
          </Heading>
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section>
              <ProjectGridItem id="dungeon-siege" title="Dungeon Siege" thumbnail={placeHolder}>
                A simple platformer game with one boss, made in Java.
              </ProjectGridItem>
            </Section>
          </SimpleGrid>
        </Section>
        
      </Container>
    </Layout>
  )
}
export default Projects