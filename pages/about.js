import { GridItem, Heading, Container, Button, Grid, Text } from "@chakra-ui/react"
import Layout from "../components/layouts/article"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { BioSection, BioYear, BioDescription } from "../components/bio"
import { DownloadIcon } from "@chakra-ui/icons"

const About = () => {
  const downloadFile = () => {
    window.location.href = "/downloads/resume.pdf"
  }
  return (
    <Layout title="About">
      <Container maxW='container.md'>
        <Section delay={0.1}>
          <Heading as="h3" fontSize={36} mb={4} variant="section-title">
            About Me
          </Heading>
          <Paragraph>
            I am an adaptable full stack developer with some UX experience. I am passionate in improving the experience of people. With my curiosity to learn, I am confident in creating great products that anybody can use.
          </Paragraph>
          <Button fontSize={20} isFullWidth={true} leftIcon={<DownloadIcon />} colorScheme="teal" variant='outline' onClick={downloadFile}>Resume</Button> 
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
            Skills
          </Heading>
          <Grid templateColumns={{base: '1fr', md: 'repeat(3, 1fr)'}} gap={5}>
            <GridItem display='flex' flexDirection='column' justify='space-around'>
              <Text borderBottom='2px solid' mb={2} fontWeight={700} fontSize={24}>Web Development</Text>
              <Text>HTML, CSS, Javascript, React, NodeJS, React Native, Express, MongoDB, PostgreSQL</Text>
            </GridItem>
            <GridItem display='flex' flexDirection='column' justify='space-around'>
              <Text borderBottom='2px solid' mb={2} fontWeight={700} fontSize={24}>UX/UI Design</Text>
              <Text>Figma, Adobe XD, User Testing, Sketching, Prototyping</Text>
            </GridItem>
            <GridItem display='flex' flexDirection='column' justify='space-around'>
              <Text borderBottom='2px solid' mb={2} fontWeight={700} fontSize={24}>Programming</Text>
              <Text>JavaScript, Python, Java, C, SQL, Racket, VS Code </Text>
            </GridItem>
            <GridItem display='flex' flexDirection='column' justify='space-around'>
              <Text borderBottom='2px solid' mb={2} fontWeight={700} fontSize={24}>Video Editing</Text>
              <Text>Premiere Pro, After Effects, Sony Vegas</Text>
            </GridItem>
          </Grid>
        </Section>


      </Container>
    </Layout>
  )
}

export default About