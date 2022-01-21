import React from 'react'
import {
  Link,
  Heading, 
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Button,
  IconButton,
  Box,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import {
  HamburgerIcon
} from '@chakra-ui/icons'
import NextLink from 'next/link'
import Logo from './logo'

const DrawerComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <>
    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
      <Button as={IconButton}
        icon={<HamburgerIcon />}
        variant="outline"
        aria-label="Options"
        onClick={onOpen}
        h='full'
        p={3}
        bg={useColorModeValue('#ffffff40', '#20202380')}  
      />
    </Box>
    
    <Drawer
      isOpen={isOpen}
      placement='right'
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent h="full">
        <DrawerCloseButton />
        <DrawerHeader>
        <Heading as="h1" size="lg" letterSpacing={'tighter'}>
          <Logo />
        </Heading>
        </DrawerHeader>
        <DrawerBody>
          <Stack fontSize={'xl'}>
            <NextLink href="/" passHref>
              <Link>Home</Link>
            </NextLink>
            <NextLink href="/projects" passHref>
              <Link>Projects</Link>
            </NextLink>
            <NextLink href="/about" passHref>
              <Link>About Me</Link>
            </NextLink>
            <NextLink href="/contact" passHref>
              <Link>Contact Me</Link>
            </NextLink>
          </Stack>
        </DrawerBody>
      </DrawerContent>
      </Drawer>
    </>
  )
}

export default DrawerComponent;