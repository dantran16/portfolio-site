import { Heading, Container } from "@chakra-ui/react"
import Layout from "../components/layouts/article"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { BioSection, BioYear, BioDescription } from "../components/bio"

const About = () => {
  return (
    <Layout title="About">
      <Container maxW='container.md'>
        <Heading as="h3" fontSize={36} mb={4}>
          About Me
        </Heading>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About Me
          </Heading>
          <Paragraph>
            I am an adaptable full stack developer with some UX experience. I am passionate in improving the experience of people. With my curiosity to learn, I am confident in creating great products that anybody can use.
          </Paragraph>
        </Section>
        
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Timeline
          </Heading>
          <BioSection>
            <BioYear>2021-2022</BioYear>
            <BioDescription>Graduated from NuCamp Full Stack Development Bootcamp (6 months)</BioDescription>
            
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Design Consultant at BarLive for 2 months (Contract Work)
          </BioSection>
          <BioSection>
            <BioYear>2016-2020</BioYear>
            Graduated from UCSD with a B.S. in Human Computer Interaction
          </BioSection>
          <BioSection>
            <BioYear>1998</BioYear>
            Born in California, USA
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Socials
          </Heading>
        </Section>
      </Container>
    </Layout>
  )
}

export default About