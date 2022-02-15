import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/GridItem'
import Layout from '../components/layouts/article'

import thumbTemporal from '../public/images/projects/thumb_temporal.png'
import thumbPinterest from '../public/images/projects/thumb_pinterest.jpg'
import thumbStratbook from '../public/images/projects/thumb_stratbook.png'
import thumbBarlive from '../public/images/projects/thumb_barlive.png'

const Projects = () => {
  return (
    <Layout title="Projects">
      <Container maxW='container.md'>
        <Heading as="h3" fontSize={36} mb={4}>
          Projects
        </Heading>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            2021 - 2022
          </Heading>
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section>
              <ProjectGridItem id="stratbook" title="Stratbook" thumbnail={thumbStratbook}>
                A personal web application that helps CS:GO teams organize their strategies in one place. 
              </ProjectGridItem>
            </Section>
            <Section>
              <ProjectGridItem id="barlive" title="BarLive" thumbnail={thumbBarlive}>
                I designed low fidelity prototypes for BarLive&apos;s desktop website and the mobile application.
              </ProjectGridItem>
            </Section>
          </SimpleGrid>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            2019 - 2020
          </Heading>
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section>
              <ProjectGridItem id="pinterest" title="Pinterest Component Redesign" thumbnail={thumbPinterest}>
                A school UX project that offers an alternative approach to Pinterest&apos;s design on its search component in 2020. Involves user testing and UI Design.
              </ProjectGridItem>
            </Section>
            <Section>
              <ProjectGridItem id="temporal" title="Temporal" thumbnail={thumbTemporal}>
                A school project where we made a task management app that uses timers and sounds, using the technolgies of NodeJS and Express.
              </ProjectGridItem>
            </Section>
          </SimpleGrid>
        </Section>

        
      </Container>
    </Layout>
  )
}
export default Projects