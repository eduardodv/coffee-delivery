import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    /* box-shadow: 0 0 0 2px ${(props) => props.theme.colors['purple-500']}; */
  }

  html {
    min-height: 100vh;
  }

  body {
    min-height: inherit;
    color: ${(props) => props.theme.colors['base-title']};
    /* background: ${(props) => props.theme.colors.background}; */
    -webkit-font-smoothing: antialiased;
    line-height: 1.3;
    position: relative;
  }
  
  body, input, textarea, button {
    font-family: '${(props) => props.theme.fonts.default}', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    /* line-height: 1.3; */
  }
`
