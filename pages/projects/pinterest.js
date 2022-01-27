import { Container, Tag, List, Link, ListItem } from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/project";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Layout from "../../components/layouts/article";
import Paragraph from "../../components/paragraph";

const Project = () => (
  <Layout title="Pinterest">
    <Container>
      <Title>
          Pinterest Component Redesign <Tag>2020</Tag>
      </Title>
      <WorkImage src="/images/projects/pinterest/project2.jpg" alt="Pinterest Thumbnail" />
      <Paragraph>
        A UX project that offers an alternative approach to Pinterest&apos;s design on its search component in 2020. Involves user testing and UI Design.
      </Paragraph>

      <List ml={4} my={4}>
          <ListItem>
            <Meta>Timeline</Meta> Nov 2020 - Dec 2020
          </ListItem>
          <ListItem>
            <Meta>Team</Meta> Dan Tran, Ryan Wey, Osvaldo Vasquez-lara, Henry Pham-Tran
          </ListItem>
          <ListItem>
            <Meta>Role</Meta> UX Designer &amp; User Researcher
          </ListItem>
          <ListItem>
            <Meta>Technologies</Meta> Figma, User Testing
          </ListItem>
          <ListItem>
            <Meta>UX Design</Meta>
            <Link target="_blank" href="https://www.figma.com/proto/z9nMeXsaHcXhneE3N2JxBZ/187A-final?node-id=1%3A2&scaling=scale-down">
              Figma Prototype 1 <ExternalLinkIcon mx="2px"/>
            </Link>
            &nbsp; &nbsp;
            <Link target="_blank" href="https://www.figma.com/proto/z9nMeXsaHcXhneE3N2JxBZ/187A-final?node-id=1%3A2&scaling=scale-down">
              Figma Prototype 2 <ExternalLinkIcon mx="2px"/>
            </Link>
          </ListItem>
        </List>
    </Container>
  </Layout>
)

export default Project