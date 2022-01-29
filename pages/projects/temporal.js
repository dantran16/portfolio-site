import { Flex, Heading, Container, Tag, Link, List, ListItem, Image, UnorderedList} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/project'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import TableOfContents from '../../components/TableOfContents'

const Project = () => {
  return (
    <Layout title="Temporal">
      <Container>
        <Title>
          Temporal <Tag>2019</Tag>
        </Title>
        <WorkImage src="/images/projects/temporal/project1.png" alt="Temporal Thumbnail"/>
        <Paragraph>
          A task management app that uses timers and sounds, using the technolgies of NodeJS and Express. Made for a uni project.
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Timeline</Meta> Jan 2019 - Mar 2019
          </ListItem>
          <ListItem>
            <Meta>Team</Meta> Dan Tran, Johnathan Tran, Angelica Ramos
          </ListItem>
          <ListItem>
            <Meta>Role</Meta> UX Designer &amp; Full Stack Developer
          </ListItem>
          <ListItem>
            <Meta>Technologies</Meta> NodeJS, Express, Figma, Google Analytics
          </ListItem>
          <ListItem>
            <Meta>UX Design</Meta>
            <Link rel='noopener' target="_blank" href="https://www.figma.com/proto/DxlH0L6EBprxwyiZ9YuJeYh4/Temporal-Task-App?node-id=363%3A0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=363%3A0">
              Figma Prototype <ExternalLinkIcon mx="2px"/>
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Code</Meta>
            <Link rel='noopener' target="_blank" href="https://github.com/dantran16/Temporal">
              GitHub Repository <ExternalLinkIcon mx="2px"/>
            </Link>
          </ListItem>
        </List>
        <TableOfContents>
            <ListItem>
              <Link href="#overview">Overview/Background</Link>
            </ListItem>
            <ListItem>
              <Link href="#problem-statement">Problem Statement</Link>
            </ListItem>
            <ListItem>
              <Link href="#needfinding">User Research &amp; Needfinding</Link>
            </ListItem>
            <ListItem>
              <Link href="#storyboards">Storyboards</Link>
            </ListItem>
            <ListItem>
              <Link href="#prototypes">Prototypes</Link>
            </ListItem>
            <ListItem>
              <Link href="#user-testing">User Testing</Link>
            </ListItem>
            <ListItem>
              <Link href="#conclusion">Final Product Design and Results</Link>
            </ListItem>
        </TableOfContents>
        <Section delay={0.1}>
          <Heading id="overview" as="h3" variant="section-title">
            Overview/Background
          </Heading>
          <Paragraph>
          Oftentimes, people encounter scenarios where they are overwhelmed with work. Sometimes, they don&apos;t manage their time efficiently and procrastinate to the last minute. When tasks are so easy, people would do them later. When these tasks build up, it can cause unnecessary stress. When people are stressed, they are more distracted and become less productive.
          </Paragraph>
          <Paragraph>
            However, after talking to several college students, we found that allocating time into tasks ahead of a deadline could resolve procrastination. However, many apps don&apos;t include a timer to track how much time is done within the tasks. Some can do it implicitly by creating a mental timer. However, it is hard to keep track and is unreliable. Many people would have a hard time doing it mentally. When there&apos;s a big task, a person could split it into smaller tasks and split the time it takes. If one finishes a task ahead of their estimated time, they could move on to the next task or find out they have extra free time. If one cannot finish a task in their estimated time, they could add more time and roughly guess how much time they need before finishing. As a result, proper time management is key in finishing work effectively.
          </Paragraph>
          <Paragraph>
            In one course in Interaction Design, I worked with two other people to create a mobile web application that helps the user manage tasks through the use of timers, lists, and sound feedback. We learned how the design process works, such as needfinding, prototyping, designing the app, and user testing.
          </Paragraph>
        </Section>
        <Section delay={0.2}>
          <Heading id='problem-statement' as="h3" variant="section-title">
            Problem Statement
          </Heading>
          <Paragraph>
            Many college students encounter the problem of being overwhelmed when they don&apos;t manage their time efficiently. Usually, people won&apos;t remember all the due dates and the estimated times it takes to finish before the deadline.
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading id='needfinding' as="h3" variant="section-title">
            User Research & Needfinding
          </Heading>
          <Paragraph>
          We interviewed several college students about procrastination. Afterwards, we observed them studying. We observed some breakdowns, such as being distracted by their phone. Some questions we asked were if procrastination was preventable and why they felt that way.
          </Paragraph>  
          <Flex direction={{ base: 'column', md: 'row' }} justify="space-around" align='center'>
            <Image borderRadius={{base: 'lg', md:'md'}} w={{base: '100%', md:'47.5%'}} src={'/images/projects/temporal/needfinding1.jpg'} alt={'Person 1 studying'} mb={4} />
            <Image borderRadius={{base: 'lg', md:'md'}} w={{base: '100%', md:'47.5%'}} src={'/images/projects/temporal/needfinding2.jpg'} alt={'Person 2 studying'} mb={4} />
          </Flex>
          <Paragraph>
          We drew inspiration from popular apps that are involved with tasks or time. We looked at any.do for how it keeps track of tasks. We looked at the UX of Android&apos;s timer. We looked at Alarmy&apos;s simple list design and how they used icons to fit everything within one block.
          </Paragraph>
          <Flex direction={{ base: 'column', md: 'row' }} justify="space-around" align='center'>
            <Image borderRadius={{ base: 'lg', md: 'md' }} w={{ base: '100%', md: '30%' }} src={'/images/projects/temporal/needfinding3.jpg'} alt={'Any Do App'} mb={4} />
            <Image borderRadius={{ base: 'lg', md: 'md' }} w={{ base: '100%', md: '30%' }} src={'/images/projects/temporal/needfinding4.png'} alt={'Alarmy'} mb={4} />
            <Image borderRadius={{ base: 'lg', md: 'md' }} w={{ base: '100%', md: '30%' }} src={'/images/projects/temporal/needfinding5.png'} alt={'Android Timer'} mb={4} />
          </Flex>
        </Section>

        <Section delay={0.4}>
          <Heading id='storyboards' as="h3" variant="section-title">
            Storyboards
          </Heading>
          <Paragraph>
          We created storyboards for three different scenarios: studying for an exam, taking a break, and exercising!
          </Paragraph>
          <WorkImage src={'/images/projects/temporal/storyboard1.png'} alt={'Storyboard for using Temporal when studying for an exam'} />
          <WorkImage src={'/images/projects/temporal/storyboard2.jpg'} alt={'Storyboard for using Temporal when taking a break'}/>
          <WorkImage src={'/images/projects/temporal/storyboard3.jpg'} alt={'Storyboard for using Temporal when exercising'} />
        </Section>

        <Section delay={0.5}>
          <Heading id='prototypes' as="h3" variant="section-title">
            Prototypes
          </Heading>
          <Paragraph>
          We started designing our app with two low-fidelity prototypes. Prototype 1 has a more boxy, modern feel, while Prototype 2 has a simple look that&apos;s easy to navigate. Prototype 1 included a goals section and a calendar section. Prototype 2 has notifications when it&apos;s getting closer to the time running out.
          </Paragraph>
          <WorkImage src={'/images/projects/temporal/prototype1.png'} alt={'Low Fidelity Prototype 1'} />
          <WorkImage src={'/images/projects/temporal/prototype2.png'} alt={'Low Fidelity Prototype 2'} />
          <Paragraph>
            We liked a lot of the designs in Prototype 1, but we liked the simplicity of Prototype 2.
          </Paragraph>
          <WorkImage src={'/images/projects/temporal/highfidprototype.jpg'} alt={'High Fidelity Prototype'} />
        </Section>

        <Section delay={0.6}>
          <Heading id='user-testing' as="h3" variant="section-title">
            User Testing
          </Heading>
          <Paragraph>
            After making our paper prototypes, we needed to test to see if it made any sense to someone unfamiliar with our product. We gave several of our peers (~5 people) the paper prototypes and hoped that they could navigate it without getting confused. During the test, our peers did heuristic evaluations, using Neilsen&apos;s 10 Design Heuristics. Some changes that we did based on the feedback are:
          </Paragraph>
          <UnorderedList mb={4}>
            <ListItem> Cosmetic changes to the UI by spacing things apart more for a more minimalist look </ListItem>
            <ListItem>Add some more user control by adding a back/undo button</ListItem>
            <ListItem>Adding a help/documentation page to make the user more familiar with the app if they’re confused</ListItem>
          </UnorderedList>
          <Paragraph>
            After making the first version of the app, we did user testing from three peers. We found some common themes amongst our different users. We noticed there was an inconsistency with intuitive language on the task card, lack of user freedom when navigating the session page, and slight confusion on the purpose of menu bar tasks. We anticipated some of our design choices to be intuitive to them, but we were wrong. We believe users had a lack of user freedom because we had not fully implemented all the functionality we wanted. One user tried to fully explore the session page feature and could not figure out how to edit or delete tasks, making them feel stuck.
          </Paragraph>
          <Flex direction={{ base: 'column', md: 'row' }} justify="space-around">
            <Image borderRadius={{base: 'lg', md:'md'}} w={{base: '100%', md:'30%'}} src={'/images/projects/temporal/usertesting1.png'} alt={'User 1 doing testing'} mb={4} />
            <Image borderRadius={{ base: 'lg', md: 'md' }} w={{ base: '100%', md: '30%' }} src={'/images/projects/temporal/usertesting1.5.jpg'} alt={'User 2 doing testing'} mb={4} />
            <Image borderRadius={{ base: 'lg', md: 'md' }} w={{ base: '100%', md: '30%' }} src={'/images/projects/temporal/usertesting2.png'} alt={'User 3 doing testing'} mb={4} />
          </Flex>
          <Paragraph>
          We also did A/B testing to see if certain design choices were better than another. Some changes we did were:  
          </Paragraph>
          <UnorderedList mb={4}>
            <ListItem> A new color for the new session button </ListItem>
            <ListItem> Change the “Current Sessions” list to a card styled list rather than our stacked list of sessions </ListItem>
          </UnorderedList>
          <Flex direction={{ base: 'column', md: 'row' }} justify="space-around" align='center'>
            <Image borderRadius={{base: 'lg', md:'md'}} w={{base: '95%', md:'47.5%'}} src={'/images/projects/temporal/usertesting3.png'} alt={'Version A'} mb={4} />
            <Image borderRadius={{base: 'lg', md:'md'}} w={{base: '100%', md:'47.5%'}} src={'/images/projects/temporal/usertesting4.png'} alt={'Version B'} mb={4} />
          </Flex>
        </Section>
        <Section delay={0.7}>
          <Heading id="conclusion" as="h3" variant="section-title">
            Final Product Design and Results
          </Heading>
          <Paragraph>
            It&apos;s amazing to see create an idea with scratch through collaboration. Even with scheduling problems and coding errors, we created something that came from a simple need. The idea moved onto being visualized into paper, then into computer graphics, and then into a functional webapp.
          </Paragraph>
          <Paragraph>
          In the end, we made the app, but it isn&apos;t fully functional. We had several weeks to code the app, but it wasn&apos;t enough. Although the timer works, there were some huge problems, such as not pausing properly. We made sound work, but the user can&apos;t customize the sound they want. We didn&apos;t implement all the style changes perfectly. We had to drop the implementation for the goals and calendar sections. Despite these problems, it was a good experience to understand what it was like to be in a team and design a web app. 
          </Paragraph>
          <WorkImage src='/images/projects/temporal/finaldesign.jpg' alt='Final Design'/>
        </Section>
      </Container>
    </Layout>
  )
}

export default Project