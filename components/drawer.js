import React from 'react'
import {
  Heading, 
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Button,
  Icon,
  IconButton,
  Box,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import {
  HamburgerIcon
} from '@chakra-ui/icons'
import Logo from './logo'
import LinkItem from './LinkItem'

import { FaHome as HomeIcon } from 'react-icons/fa'
import { BsFillPersonFill as AboutIcon } from 'react-icons/bs'
import { MdWork as ProjectsIcon, MdOutlineContactPage as ContactIcon } from 'react-icons/md'

const DrawerComponent = ({ path }) => {
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
              <LinkItem onClick={onClose} href="/" path={path}>
              <Icon boxSize={4} as={ HomeIcon } /> <span>Home</span>
            </LinkItem>
            <LinkItem onClick={onClose} href="/projects" path={path}>
              <Icon boxSize={4} as={ ProjectsIcon } /> <span>Projects</span>
            </LinkItem>
            <LinkItem onClick={onClose} href="/about" path={path}>
              <Icon boxSize={4} w={4} h={4} as={ AboutIcon } /> About
            </LinkItem>
            <LinkItem onClick={onClose} href="/contact" path={path}>
              <Icon boxSize={4} w={4} h={4} as={ ContactIcon } /> Contact
            </LinkItem>
          </Stack>
        </DrawerBody>
      </DrawerContent>
      </Drawer>
    </>
  )
}

export default DrawerComponent;