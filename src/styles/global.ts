import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-700']};
  }
  body {
    background-color:${(props) => props.theme['gray-100']};
    color: ${(props) => props.theme['gray-700']};
    padding-bottom: 3.5rem;
  }
  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
  }
  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }
  img {
    max-width: 100%;
  }
`
