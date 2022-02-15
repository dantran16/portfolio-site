import { Heading, Container, Tag, Link, List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/project'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import TableOfContents from '../../components/tableofcontents'

const Project = () => (
    <Layout title="BarLive">
      <Container maxW='container.md'>
        <Title>
            BarLive <Tag>2021</Tag>
        </Title>
        <WorkImage src="/images/projects/thumb_barlive.png" alt="BarLive Thumbnail" />
        <Paragraph>
          I designed low fidelity prototypes for BarLive&apos;s desktop website and its mobile application. I am not allowed to share the Figma prototype.
        </Paragraph>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Timeline</Meta> Oct 2021 - Nov 2021
          </ListItem>
          <ListItem>
            <Meta>Team</Meta> Dan Tran
          </ListItem>
          <ListItem>
            <Meta>Role</Meta> Design Consultant, UI Designer
          </ListItem>
          <ListItem>
            <Meta>Technologies</Meta> Figma
          </ListItem>
        <ListItem>
            <Meta>Website</Meta>
            <Link rel='noopener' target="_blank" href="https://https://barlive.net/">
              BarLive<ExternalLinkIcon mx="2px"/>
            </Link>
          </ListItem>
        </List>
        <TableOfContents>
          <ListItem>
            <Link href="#overview">Overview</Link>
          </ListItem>
          <ListItem>
            <Link href="#images">Images</Link>
          </ListItem>
        </TableOfContents>
        <Section delay={0.1}>
          <Heading id="overview" as="h3" variant="section-title">
            Description
          </Heading>
          <Paragraph>I was tasked to design BarLive&apos;s mobile app and the desktop version. I discussed with the CTO about the design and its potential features. </Paragraph>
          <Paragraph>Initially, I worked on the mobile application and its main features. Then, I worked on the desktop version.</Paragraph>
          <Paragraph>The live version is a lot different than my prototype because they don&apos;t have a front-end engineer, and at the time, I wasn&apos;t experienced enough to design the front-end by myself. </Paragraph>
        
        </Section>
        
        <Section delay={0.2}>
          <Heading id="images" as="h3" variant="section-title">
            Images
          </Heading>
          <WorkImage src="/images/projects/barlive/barlive_mobile_overview.png" alt="BarLive Mobile Overview" />
          <WorkImage src="/images/projects/barlive/barlive_desktop_overview.png" alt="Barlive Desktop Overview" />
        </Section>
      </Container>
      </Layout>
)

export default Project