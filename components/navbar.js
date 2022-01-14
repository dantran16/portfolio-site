import { React } from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack, 
  Heading, 
  Flex, 
  useColorModeValue,
} from '@chakra-ui/react'
import ThemeToggleButton from './theme-toggle-button'
import DrawerComponent from './drawer'

const LinkItem = ({ href, path, children }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200, whiteAlpha.900')
  return (
    <NextLink href={href}>
      <Link p={2} bg={active ? 'glassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  )
}

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
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{base:4, nmd: 0}}
        >
          <LinkItem href="/projects" path={path}>
            Projects
          </LinkItem>
          <LinkItem href="/about" path={path}>
            About Me
          </LinkItem>
          <LinkItem href="/contact" path={path}>
            Contact Me
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