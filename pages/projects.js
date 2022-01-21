import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/GridItem'

import thumbTemporal from '../public/images/projects/thumb_temporal.png'
import thumbPinterest from '../public/images/projects/thumb_pinterest.jpg'

const Projects = () => {
  return (
    <Container maxW='container.md'>
      <Heading as="h3" fontSize={28} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <ProjectGridItem id="temporal" title="Temporal" thumbnail={thumbTemporal}>
            A task managing app that uses NodeJS, Express, and MongoDB.
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem id="pinterest" title="Pinterest Component Redesign" thumbnail={thumbPinterest}>
            A school project that offers an alternative approach to Pinterest's design on its search component in 2020. Involves user testing and UX Design.
          </ProjectGridItem>
          </Section>
      </SimpleGrid>
    </Container>
  )
}
export default Projects