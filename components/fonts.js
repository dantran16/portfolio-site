import { Global } from '@emotion/react'

const Fonts = () => {
  return (
    <Global 
      styles={`
      @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700;800;900&display=swap');
      `}
      />
  )
}

export default Fonts