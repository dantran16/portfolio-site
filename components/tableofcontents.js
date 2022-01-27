import { Box, Text, OrderedList, useColorModeValue } from '@chakra-ui/react'

const TableOfContents = ({children}) => (
  <Box
    borderRadius="lg"
    my={3}
    px={5}
    py={3}
    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}>
    <Text
      fontWeight='bold'
      fontSize={24}
      mb={2}
    >Table of Contents</Text>
    <OrderedList>
      {children}
    </OrderedList>
  </Box>
)
export default TableOfContents;