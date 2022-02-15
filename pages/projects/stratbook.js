import { Heading, Container, Tag, Link, List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/project'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import TableOfContents from '../../components/tableofcontents'

const Project = () => (
    <Layout title="Stratbook">
      <Container maxW='container.md'>
        <Title>
            Stratbook <Tag>2021</Tag>
        </Title>
        <WorkImage src="/images/projects/thumb_stratbook.png" alt="Stratbook thumbnail" />
        <Paragraph>
          A personal web application that helps CS:GO teams organize their strategies in one place.
        </Paragraph>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Timeline</Meta> Jul 2020 - Aug 2020
          </ListItem>
          <ListItem>
            <Meta>Team</Meta> Dan Tran
          </ListItem>
          <ListItem>
            <Meta>Role</Meta> Full Stack Developer
          </ListItem>
          <ListItem>
            <Meta>Technologies</Meta> NodeJS, Express, MongoDB, EJS, Passport, Bootstrap
          </ListItem>
          <ListItem>
            <Meta>Code</Meta>
            <Link rel='noopener' target="_blank" href="https://github.com/dantran16/Stratbook">
              Github<ExternalLinkIcon mx="2px"/>
            </Link>
        </ListItem>
        <ListItem>
            <Meta>Application</Meta>
            <Link rel='noopener' target="_blank" href="https://stratbookproject.herokuapp.com/strategies">
              Heroku<ExternalLinkIcon mx="2px"/>
            </Link>
          </ListItem>
        </List>
        <TableOfContents>
          <ListItem>
            <Link href="#description">Description</Link>
          </ListItem>
          <ListItem>
            <Link href="#images">Images</Link>
          </ListItem>
        </TableOfContents>
        <Section delay={0.1}>
          <Heading id="description" as="h3" variant="section-title">
            Description
          </Heading>
          <Paragraph>Back when I played on an amateur CS:GO team, I always wished there was some way to store my strategies. I needed an easy way to share this information to the rest of the team. I also needed a place to store strategies that I rarely use. This is where this idea came in.</Paragraph>
          <Paragraph>I made this application, using skills I learned from a Udemy course. I learned how to set up a REST API and how to use NodeJS more effectively. I also learned about sessions, cookies, and user authentication.</Paragraph>
          <Paragraph>I finished the basics of the application, but I could easily add more things. I could add more robust user authentication (e.g. only users can access their team&apos;s strategies). I could add fitlers to show relevant strategies for the users (e.g. map specific, categories, data created, featured). I could also change the UI (e.g. more mobile-friendly) and use React. I could also add video embedding or add more information to my schemas (e.g. adding map data to draw on to elaborate the plan). I will revisit this when I have more experience.</Paragraph>
        
        </Section>
        
        <Section delay={0.2}>
          <Heading id="images" as="h3" variant="section-title">
            Images
          </Heading>
          <WorkImage src="/images/projects/barlive/stratbook1.png" alt="Stratgey Page" />
          <WorkImage src="/images/projects/stratbook/stratbook2.png" alt="Dashboard/All Strategies Page" />
          <WorkImage src="/images/projects/stratbook/stratbook3.png" alt="Player page of the strategy"/>
        </Section>
      </Container>
      </Layout>
)

export default Project