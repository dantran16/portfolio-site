import { Box, Flex, IconButton, Link } from '@chakra-ui/react'
import {
  FaGithub as GitHubIcon,
  FaLinkedin as LinkedInIcon
} from 'react-icons/fa'

const Footer = () => (
  <Flex opacity={0.6} justify="space-between" align='center'>
    <Box>&copy; {new Date().getFullYear()} Dan Tran</Box>
    <Flex justify="space-around">
      <Link ml={3} rel="noopener" target="_blank" href="https://github.com/dantran16">
        <IconButton
          colorScheme="teal"
          aria-label="GitHub"
          icon={<GitHubIcon />}
          size="md"
          borderRadius="100%"
          variant="outline"
        />
      </Link>
      <Link ml={3} rel="noopener" target="_blank" href="https://www.linkedin.com/in/dantranux/">
        <IconButton
          colorScheme="teal"
          aria-label="LinkedIn"
          icon={<LinkedInIcon />}
          size="md"
          borderRadius="100%"
          variant="outline"
        />
      </Link>
    </Flex>
  </Flex>
)

export default Footer
