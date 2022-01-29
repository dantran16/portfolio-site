import { Grid, GridItem } from '@chakra-ui/react'

export const BioSection = ({ children }) => (
  <Grid templateColumns='1fr 2fr' mb={4}>
    {children}
  </Grid>
)

export const BioYear = ({children}) => (
  <GridItem>
    <span style={{
      fontWeight: 'bold',
      marginRight: '1em'
    }}>
      {children}
    </span>
  </GridItem>
)

export const BioDescription = ({ children }) => (
  <GridItem>
    {children}
  </GridItem>
)