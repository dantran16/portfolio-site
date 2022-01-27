import { Container, Tag, List, Link, ListItem, Badge, Heading, UnorderedList } from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/project";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Layout from "../../components/layouts/article";
import Paragraph from "../../components/paragraph";
import TableOfContents from "../../components/TableOfContents";
import Section from "../../components/section";

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
      <TableOfContents>
        <ListItem>
          <Link href="#overview">Overview/Background</Link>
        </ListItem>
        <ListItem>
          <Link href="#user-testing-1">User Testing - Pinterest</Link>
        </ListItem>
        <ListItem>
          <Link href="#component-redesign">Component Redesign</Link>
        </ListItem>
        <ListItem>
          <Link href="#competitor-analysis">Competitor Analysis</Link>
        </ListItem>
        <ListItem>
          <Link href="#sketches">Sketches</Link>
        </ListItem>
        <ListItem>
          <Link href="#prototypes">Prototypes</Link>
        </ListItem>
        <ListItem>
          <Link href="#user-testing-2">User Testing - Prototypes</Link>
        </ListItem>
        <ListItem>
          <Link href="#conclusion">Conclusion</Link>
        </ListItem>
      </TableOfContents>
      <Section delay={0.1}>
        <Heading id="overview" as="h3" variant="section-title">
          Overview/Background
        </Heading>
        <Paragraph><Badge colorScheme='red'>Disclaimer </Badge> We do not work with Pinterest nor are we associated with them. We did this for a school project.</Paragraph>
        <Paragraph>
        Pinterest is a unique social media app that shows images to preview content of other sites. It is used to find inspiration for ideas, such as finding unique fashion trends or getting ideas to draw something. The feed layout is visually appealing and useful because it helps users quickly glance at ideas that they want. Once they find an idea they like, they can save it as a “pin” and save it into a “board”. This concept enables users to keep a collection of inspirations and ideas that can be referred to later for work, hobbies, or other things.
        </Paragraph>
        <Paragraph>
        We chose to redesign Pinterest because we liked how different Pinterest was to other social media apps and wanted to challenge ourselves in doing a redesign of a popular app.
        </Paragraph>
        <Paragraph>
        In one course of interaction design, I worked with three other people to redesign the search component of Pinterest. In this project, we learned how to create prototypes that utilized a redesigned component to solve user problems we noticed from the original app with the analysis of user testing and competitors. We redesigned the search component because we noticed that users ignored some of the core features and saw unneeded features. Although we did changes, it ultimately came back to users preferring the original component.
        </Paragraph>
        <Paragraph>
        I was primarily responsible for the component redesign and competitor analysis. I was also primarily responsible for the user testing plan for the prototypes. Additionally, I also interviewed and took notes for some of the users. I also chimed in ideas for the sketches and made sure the high-fidelity prototypes were functional.
        </Paragraph>
      </Section>
      <Section delay={0.2}>
        <Heading id="user-testing-1" as="h3" variant="section-title">
          User Testing - Pinterest
        </Heading>
        <Paragraph>
        In the user testing process, we found five users (primarily college students). Most users had minimal interaction with Pinterest, while one was familiar with it. For every user we tested, we had an observer and a guide. Our guide asks the users questions to answer and gives tasks for users to do. Our observer noted any confusion that a user might have while they are doing tasks.
        </Paragraph>
        <Paragraph>
          We made a group of questions and tasks for users to navigating Pinterest&apos;s mobile site. Some of these questions and tasks include:
        </Paragraph>
        <UnorderedList mb={4}>
          <ListItem>A person&apos;s familiarity with the app (e.g. Do you use Pinterest?)</ListItem>
          <ListItem>Using the app (e.g. Can you get inspiration ideas from anything you&apos;re interested in?)</ListItem>
          <ListItem>Impression of Pinterest (e.g. What do you think the purpose of Pinterest is?)</ListItem>
        </UnorderedList>
        <Paragraph>
        Based on our testing, we found that users didn&apos;t have much trouble navigating the website. Users had no trouble going to where they needed to go and endless scrolling didn&apos;t frustrate them. Most users knew how to create boards and save pins.
        </Paragraph>
        <Paragraph>
        However, there were also problems that users came across. First, they were unfamiliar with some features because they were hard to find. Some users couldn&apos;t easily figure out how to create notes, edit pins, or move boards. Second, the overall layout is overwhelming and can lead to information overload. Ultimately, it means some features are getting ignored. Some users ignored the tabs and mostly used search for their needs. The user familiar with the app used the “For you” tab for inspiration. In the search component, all of the users exclusively used the search bar to look up things and ignored many of its other features.
        </Paragraph>
      </Section>
      <Section delay={0.3}>
        <Heading id="component-redesign" as="h3" variant="section-title">
          Component Redesign
        </Heading>
        <Paragraph>
        There were problems in many areas, so finding a single area to redesign was a dilemma. Changing the visual layout and any core user interactions would be too ambitious. We eventually decided to redesign the search section of the website. The biggest problem we discovered was that the search feature wasn&apos;t fully utilized.
        </Paragraph>
        <WorkImage src='/images/projects/pinterest/componentredesign1.png' alt="A screen of Pinteresst's search component" />
        <Paragraph>
        For example, none of the users noticed the drop-down to the right of the search bar to limit the search. This is because the home page doesn&apos;t include this feature. The design needs to be consistent (remove it or have it on all pages). Inconsistent design can confuse people. As a result, some people could miss out the filtering option, which limits their percepton of options to search for only pins, only pinners, or only boards. Its filtering option is weak. Users can&apos;t search for popular pins or the latest pins if they wanted to. There should be some sorting options (e.g. sort by latest pin saved) and other filters (e.g. filter to pins uploaded this month). Improved filtering help people find content they like faster.
        </Paragraph>
      </Section>
    </Container>
  </Layout>
)

export default Project