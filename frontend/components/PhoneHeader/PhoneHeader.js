import React, { Component } from 'react'
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
  'Mongo': {
    yi: 0, yf: 100, xi: 1000, xf: 0
  },
  'nodejs': {
    yi: 0, yf: 100, xi: -1000, xf: 0
  },
  'BackScreen': {
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
        > g {
            transition: all 0.5s ease !important;
        }
        [data-name="contact button"] {
            transform: translate(${pieces['contact_button'].xf}px, ${pieces['contact_button'].yf}px);
            animation: ${props => props.inView ? animateIn['contact_button'] : animateOut['contact_button']} ${animationTime}s normal backwards ease-out;
            opacity: ${props => props.inView ? 1 : 0};
            animation-delay: ${8 * animationTime / 8}s;
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
            transform: translate(${pieces['front_assembly'].xf}px, ${pieces['front_assembly'].yf}px);
            opacity: ${props => props.inView ? props.opacity : 0};
            animation: ${props => props.inView ? animateIn['front_assembly'] : animateOut['front_assembly']} ${animationTime}s normal backwards ease-out;
            animation-delay: ${0 * animationTime / 8}s;
        }
        [data-name="ui"] {
            transform: translate(${pieces['ui'].xf}px, ${pieces['ui'].yf}px);
            opacity: ${props => props.inView ? props.opacity : 0};
            animation: ${props => props.inView ? animateIn['ui'] : animateOut['ui']} ${animationTime}s normal backwards ease-out;
            animation-delay: ${1 * animationTime / 8}s;
        }
        [data-name="react logo"] {
            transform: translate(${pieces['react_logo'].xf}px, ${pieces['react_logo'].yf}px);
            opacity: ${props => props.inView ? props.opacity : 0};
            animation: ${props => props.inView ? animateIn['react_logo'] : animateOut['react_logo']} ${animationTime}s normal backwards ease-out;
            animation-delay: ${2 * animationTime / 8}s;
        }
        [data-name="react screen"] {
            transform: translate(${pieces['react_screen'].xf}px, ${pieces['react_screen'].yf}px);
            opacity: ${props => props.inView ? props.opacity : 0};
            animation: ${props => props.inView ? animateIn['react_screen'] : animateOut['react_screen']} ${animationTime}s normal backwards ease-out;
            animation-delay: ${3 * animationTime / 8}s;
        }
        [data-name="mongo"] {
            transform: translate(${pieces['Mongo'].xf}px, ${pieces['Mongo'].yf}px);
            opacity: ${props => props.inView ? props.opacity : 0};
            animation: ${props => props.inView ? animateIn['Mongo'] : animateOut['Mongo']} ${animationTime}s normal backwards ease-out;
            animation-delay: ${4 * animationTime / 8}s;
        }
        [data-name="nodejs"] {
            transform: translate(${pieces['nodejs'].xf}px, ${pieces['nodejs'].yf}px);
            opacity: ${props => props.inView ? props.opacity : 0};
            animation: ${props => props.inView ? animateIn['nodejs'] : animateOut['nodejs']} ${animationTime}s normal backwards ease-out;
            animation-delay: ${5 * animationTime / 8}s;
        }
        [data-name="back screen"] {
            transform: translate(${pieces['BackScreen'].xf}px, ${pieces['BackScreen'].yf}px);
            opacity: ${props => props.inView ? props.opacity : 0};
            animation: ${props => props.inView ? animateIn['BackScreen'] : animateOut['BackScreen']} ${animationTime}s normal backwards ease-out;
            animation-delay: ${6 * animationTime / 8}s;
        }
        [data-name="back assembly"] {
            transform: translate(${pieces['back_assembly'].xf}px, ${pieces['back_assembly'].yf}px);
            opacity: ${props => props.inView ? props.opacity : 0};
            animation: ${props => props.inView ? animateIn['back_assembly'] : animateOut['back_assembly']} ${animationTime}s normal backwards ease-out;
            animation-delay: ${7 * animationTime / 8}s;
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

class PhoneHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inView: true,
            contactHover: false
        }
    }
    getDist = () => {
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        const { top, bottom } = this.svg.getBoundingClientRect();
        const middle = (top + bottom) / 2;
        const dist = Math.abs(middle - (windowHeight / 2));
        return { dist };
    }
    componentDidMount() {
        if (typeof window !== 'undefined') {
            this.svg = document.getElementsByClassName('phone')[0];
            this.contact = document.querySelectorAll('[data-name="contact button"')[0];
            this.contact.addEventListener('mouseover', this.contactOver);
            this.contact.addEventListener('mouseout', this.contactOut);
            this.contact.addEventListener('click', this.contactClick);
            window.addEventListener('scroll', () => {
                const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
                const { top, bottom } = this.svg.getBoundingClientRect();
                const middle = (top + bottom) / 2;
                const dist = Math.abs(middle - (windowHeight / 2));
                this.setState({
                    inView: dist < 300
                });
            });
        }
    }
    componentWillUnmount() {
        if (this.contact) {
            this.contact.removeEventListener('mouseover', this.contactOver);
            this.contact.removeEventListener('mouseout', this.contactOut);
            this.contact.removeEventListener('click', this.contactClick);
        }
    }
    contactOver = () => this.setState({ contactHover: true })
    contactOut = () => this.setState({ contactHover: false})
    contactClick = e => {
        e.preventDefault();
        window.location = 'mailto:kmurf1999@gmail.com';
    }
    render() {
        const { inView, contactHover } = this.state;
        return (
            <PhoneHeaderStyle id="home" className="section-container" inView={inView} opacity={contactHover ? 0.5 : 1 }>
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
}

export default PhoneHeader;