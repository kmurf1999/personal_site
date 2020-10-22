import { createGlobalStyle } from 'styled-components'

import reset from './reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body, #__next, .wrapper {
    height: 100%;
  }
  body {
    background: #2a2d38;
  }
  main {
    height: 100%;
  }
  footer {

  }

  .section-container {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0 50px;
    margin: 200px 0;
  }

  .section {
    max-width: 900px;
    width: 100%;
  }
  
  .section-header {
    position: relative;
    display: flex;
    align-items: center;
    color: rgba(255, 255, 255, 0.95);
    font-family: Raleway;
    font-weight: 600;
    font-size: 28px;
    margin: 0 0 50px;
    &:after {
        content: '';
        display: block;
        position: relative;
        width: 300px;
        height: 1px;
        margin-left: 20px;
        background: rgba(255, 255, 255, 0.25);
    }
  }

`

export default GlobalStyle