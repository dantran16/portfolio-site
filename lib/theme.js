import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props),
      fontSize: 18
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 28,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      },
      'page-title': props => ({
        fontSize: 56,
        lineHeight: '60px',
        WebkitTextStroke: mode('1px #000', '1px #fff')(props),
      })
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#c28512')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const colors = {
  glassteal: '#88ccca'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const customTheme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts
})

export default customTheme;