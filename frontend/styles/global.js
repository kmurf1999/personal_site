import { createGlobalStyle } from 'styled-components'

import reset from './reset'
import { respondTo } from './mixins'


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
    align-items: center;
    padding: 0 50px;
    margin-bottom: 200px;
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
        height: 1px;
        margin-left: 20px;
        background: rgba(255, 255, 255, 0.25);
        width: 300px;
    }
  }
  .scroll-reveal-stagger-container > .scroll-reveal-item {
    &:nth-child(1) { transition-delay: .1s; }
    &:nth-child(2) { transition-delay: .2s; }
    &:nth-child(3) { transition-delay: .3s; }
    &:nth-child(4) { transition-delay: .4s; }
  }
  .scroll-reveal-item {
    transition: opacity .35s cubic-bezier(.415,1.235,.645,1.47),transform .35s cubic-bezier(.415,1.235,.645,1.47);
  }
  .scroll-reveal-item-invisible {
      opacity: 0;
      transform: translateY(10px);
  }
  .scroll-reveal-item-visible {
      opacity: 1;
      transform: none;
  }

  ${respondTo.xs`
    .section-container {
      padding: 0 20px;
    }
    .section-header {
      justify-content: center;
      &:after {
        display: none !important;
      }
    }
  `}

`

export default GlobalStyle