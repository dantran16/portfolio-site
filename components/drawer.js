import React from 'react'
import {
  Link,
  Heading, 
  ListItem,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  List,
  DrawerBody,
  useDisclosure,
  Button,
  IconButton,
  Box,
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
      placement='top'
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
          <List>
            <NextLink href="/" passHref>
              <ListItem as={Link}>About</ListItem>
            </NextLink>
            <NextLink href="/projects" passHref>
              <ListItem as={Link}>Projects</ListItem>
            </NextLink>
            <NextLink href="/about" passHref>
              <ListItem as={Link}>About Me</ListItem>
            </NextLink>
            <NextLink href="/contact" passHref>
              <ListItem as={Link}>Contact Me</ListItem>
            </NextLink>
          </List>
        </DrawerBody>
      </DrawerContent>
      </Drawer>
    </>
  )
}

export default DrawerComponent;