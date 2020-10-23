import React, {useRef, useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import colors from '../../styles/colors'
import { darken, respondTo } from '../../styles/mixins'

import PhoneSvg from './Phone.svg'

const animationTime = 0.4;

const pieces = {
  'contact_button': {
    yi: 0, yf: -200, xi: -1000, xf: 0
  },
  'front_assembly': {
    yi: 0, yf: -200, xi: 1000, xf: 0
  },
  'ui': {
    yi: 0, yf: -100, xi: -1000, xf: 0
  },
  'react_logo': {
    yi: 0, yf: -100, xi: 1000, xf: 0
  },
  'react_screen': {
    yi: 0, yf: 0, xi: -1000, xf: 0
  },
  'mongo': {
    yi: 0, yf: 100, xi: 1000, xf: 0
  },
  'nodejs': {
    yi: 0, yf: 100, xi: -1000, xf: 0
  },
  'back_screen': {
    yi: 0, yf: 200, xi: 1000, xf: 0
  },
  'back_assembly': {
    yi: 0, yf: 300, xi: -1000, xf: 0
  }
}

let animateIn = {}
Object.keys(pieces).forEach(key => {
  animateIn[key] = keyframes`
    0% {
      transform: translate(${pieces[key].xi}px, ${pieces[key].yi}px);
      pointer-events: none;
      opacity: 0;
    }
    100% {
      transform: translate(${pieces[key].xf}px, ${pieces[key].yf}px);
      pointer-events: inherit;
      opacity: 1;
    }
  `;
})

let animateOut = {}
Object.keys(pieces).forEach(key => {
    animateOut[key] = keyframes`
    100% {
      transform: translate(${pieces[key].xi}px, ${pieces[key].yi}px);
      pointer-events: inherit;
      opacity: 0;
    }
    0% {
      transform: translate(${pieces[key].xf}px, ${pieces[key].yf}px);
      pointer-events: none;
      opacity: 1;
    }
  `;
})

const PhoneHeaderStyle = styled.section`
    height: 100%;
    padding-top: 0;
    font-family: 'Raleway';
    position: relative;
    margin-bottom: 0;

    .section {
        height: 100%;
        text-align: center;
        padding-top: 40px;
    }

    .header {
        margin: 0 auto;
        width: auto;
        display: table;

        .name {
            color: white;
            font-weight: bold;
            font-size: 14px;
            letter-spacing: 5px;
            margin-left: 5px;
            text-align: justify;
        }

        .title {
            color: ${colors.orange};
            font-weight: 500;
            text-shadow: ${colors.red} 2px 4px;
            text-align: justify;
            font-size: 72px;
        }
    }
    .phone {
        max-width: 500px;
        overflow: visible;
        user-select: none;
        position: absolute;
        left: 0;
        right: 0;
        top: 40px;
        bottom: 0;
        margin: auto;
        [data-name="contact button"] {
            opacity: ${props => props.revealed ? 1 : 0};
            transform: translate(${
                props => props.revealed ? pieces['contact_button'].xf : pieces['contact_button'].xi
            }px, ${
                props => props.revealed ? pieces['contact_button'].yf : pieces['contact_button'].yi
            }px);
            transition: opacity .35s cubic-bezier(.28,.84,.44,1.02),transform .35s cubic-bezier(.28,.84,.44,1.02);
            transition-delay: .8s;

            cursor: pointer;
            > polygon {
              transition: fill 0.3s ease;
            }
            &:hover {
                > path:nth-child(1) {
                    fill: ${colors.orange} !important;
                }
                > path:nth-child(3) {
                    fill: ${darken(colors.orange, 20)} !important;
                }
                > path:nth-child(4) {
                    fill: ${darken(colors.orange, 10)} !important;
                }
            }
        }
        [data-name="front assembly"] {
            opacity: ${props => props.contactHover ? 0.5 : (props.revealed ? 1 : 0)};
            transform: translate(${
                props => props.revealed ? pieces['front_assembly'].xf : pieces['front_assembly'].xi
            }px, ${
                props => props.revealed ? pieces['front_assembly'].yf : pieces['front_assembly'].yi
            }px);
            transition: opacity .35s cubic-bezier(.28,.84,.44,1.02),transform .35s cubic-bezier(.28,.84,.44,1.02);
            transition-delay: .1s;
        }
        [data-name="ui"] {
            opacity: ${props => props.contactHover ? 0.5 : (props.revealed ? 1 : 0)};
            transform: translate(${
                props => props.revealed ? pieces['ui'].xf : pieces['ui'].xi
            }px, ${
                props => props.revealed ? pieces['ui'].yf : pieces['ui'].yi
            }px);
            transition: opacity .35s cubic-bezier(.28,.84,.44,1.02),transform .35s cubic-bezier(.28,.84,.44,1.02);
            transition-delay: .2s;
        }
        [data-name="react logo"] {
            opacity: ${props => props.contactHover ? 0.5 : (props.revealed ? 1 : 0)};
            transform: translate(${
                props => props.revealed ? pieces['react_logo'].xf : pieces['react_logo'].xi
            }px, ${
                props => props.revealed ? pieces['react_logo'].yf : pieces['react_logo'].yi
            }px);
            transition: opacity .35s cubic-bezier(.28,.84,.44,1.02),transform .35s cubic-bezier(.28,.84,.44,1.02);
        }
        [data-name="react screen"] {
            opacity: ${props => props.contactHover ? 0.5 : (props.revealed ? 1 : 0)};
            transform: translate(${
                props => props.revealed ? pieces['react_screen'].xf : pieces['react_screen'].xi
            }px, ${
                props => props.revealed ? pieces['react_screen'].yf : pieces['react_screen'].yi
            }px);
            transition: opacity .35s cubic-bezier(.28,.84,.44,1.02),transform .35s cubic-bezier(.28,.84,.44,1.02);
            transition-delay: .3s;

        }
        [data-name="mongo"] {
            opacity: ${props => props.contactHover ? 0.5 : (props.revealed ? 1 : 0)};
            transform: translate(${
                props => props.revealed ? pieces['mongo'].xf : pieces['mongo'].xi
            }px, ${
                props => props.revealed ? pieces['mongo'].yf : pieces['mongo'].yi
            }px);
            transition: opacity .35s cubic-bezier(.28,.84,.44,1.02),transform .35s cubic-bezier(.28,.84,.44,1.02);
            transition-delay: .4s;

        }
        [data-name="nodejs"] {
            opacity: ${props => props.contactHover ? 0.5 : (props.revealed ? 1 : 0)};
            transform: translate(${
                props => props.revealed ? pieces['nodejs'].xf : pieces['nodejs'].xi
            }px, ${
                props => props.revealed ? pieces['nodejs'].yf : pieces['nodejs'].yi
            }px);
            transition: opacity .35s cubic-bezier(.28,.84,.44,1.02),transform .35s cubic-bezier(.28,.84,.44,1.02);
            transition-delay: .5s;

        }
        [data-name="back screen"] {
            opacity: ${props => props.contactHover ? 0.5 : (props.revealed ? 1 : 0)};
            transform: translate(${
                props => props.revealed ? pieces['back_screen'].xf : pieces['back_screen'].xi
            }px, ${
                props => props.revealed ? pieces['back_screen'].yf : pieces['back_screen'].yi
            }px);
            transition: opacity .35s cubic-bezier(.28,.84,.44,1.02),transform .35s cubic-bezier(.28,.84,.44,1.02);
            transition-delay: .6s;

        }
        [data-name="back assembly"] {
            opacity: ${props => props.contactHover ? 0.5 : (props.revealed ? 1 : 0)};
            transform: translate(${
                props => props.revealed ? pieces['back_assembly'].xf : pieces['back_assembly'].xi
            }px, ${
                props => props.revealed ? pieces['back_assembly'].yf : pieces['back_assembly'].yi
            }px);
            transition: opacity .35s cubic-bezier(.28,.84,.44,1.02),transform .35s cubic-bezier(.28,.84,.44,1.02);
            transition-delay: .7s;

        }
    }

    ${respondTo.xs`
        .header {
            .name {
                text-align: center;
                margin-bottom: 10px;
            }
            .title {
                font-size: 32px;
                text-shadow: ${colors.red} 1px 2px;
            }
        }
        .phone {
            max-width: 300px;
        }
    `}
    
`

const PhoneHeader = () => {
    const container = useRef(null);
    const[revealed, setRevealed] = useState(false);
    const[contactHover, setContactHover] = useState(false);
    useEffect(() => {
        const contactBtn = container.current.querySelectorAll('[data-name="contact button"]')[0];
        contactBtn.addEventListener('mouseover', () => setContactHover(true));
        contactBtn.addEventListener('mouseout', () => setContactHover(false));
        contactBtn.addEventListener('click', contactClick);
        window.addEventListener('scroll', reveal);
        reveal();
        return () => window.removeEventListener('scroll', reveal);
    }, [container, revealed, setRevealed]);
    const reveal = (e) => {
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        const { top } = container.current.getBoundingClientRect();
        if (top <= windowHeight) {
            setRevealed(true);
            window.removeEventListener('scroll', reveal);
            setTimeout(() => {
                Object.keys(pieces).map(key => {
                    key = key.replace('_', ' ');
                    const n = container.current.querySelectorAll(`[data-name="${key}"]`)[0];
                    if (n) { n.style.transitionDelay = "0s"; }
                });
            }, 0);
        }
    };
    const contactClick = (e) => {
        e.preventDefault();
        window.location = "mailto:kmurf1999@gmail.com";
    }
    return (
        <PhoneHeaderStyle ref={container} id="home" className="section-container" contactHover={contactHover} revealed={revealed}>
            <div className="section">
                <div className="header">
                    <h1 className="name">
                        KYLE MURPHY
                    </h1>
                    <h2 className="title">
                        Fullstack Developer
                    </h2>
                </div>
                <PhoneSvg className="phone"/>
            </div>
        </PhoneHeaderStyle>
    );
}

export default PhoneHeader;