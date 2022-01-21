import { React } from 'react'
import Logo from './logo'
import {
  Container,
  Box,
  Stack, 
  Heading, 
  Flex, 
  useColorModeValue,
  Icon
} from '@chakra-ui/react'
import ThemeToggleButton from './theme-toggle-button'
import DrawerComponent from './drawer'
import { BsFillPersonFill as AboutIcon } from 'react-icons/bs'
import { MdWork as ProjectsIcon, MdOutlineContactPage as ContactIcon } from 'react-icons/md'
import LinkItem from './LinkItem'

const Navbar = props => {
  const { path } = props
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container display="flex" p={2} maxW="container.md" wrap="wrap" align="center" justify="space-between">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction='row'
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{base:4, nmd: 0}}
        >
          <LinkItem href="/projects" path={path}>
            <Icon boxSize={3.5} as={ ProjectsIcon } /> <span>Projects</span>
          </LinkItem>
          <LinkItem href="/about" path={path}>
            <Icon boxSize={3.5} w={4} h={4} as={ AboutIcon } /> About
          </LinkItem>
          <LinkItem href="/contact" path={path}>
            <Icon boxSize={3.5} w={4} h={4} as={ ContactIcon } /> Contact
          </LinkItem>
        </Stack>
        <Box flex={1} align="right">
          <ThemeToggleButton />
          <DrawerComponent/>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar;