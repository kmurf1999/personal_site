import React, {useRef, useEffect, useState } from 'react';
import styled from 'styled-components'

import colors from '../styles/colors'
import { respondTo } from '../styles/mixins'

import { AiOutlineMail, AiFillFile, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const AboutStyle = styled.section`
    .about {
        display: grid;
        grid-template-columns: 3fr 2fr;
        gap: 50px;

        .left {
            .about-desc {
                font-family: Raleway;
                font-weight: 300;
                color: rgba(255, 255, 255, 0.65);
                font-size: 16px;
                margin-bottom: 30px;
                .sentence {
                    margin: 0 0 15px;
                    line-height: 1.5;
                }
            }
            .about-skills {
                display: flex;
                flex-wrap: wrap;
                margin-bottom: 40px;
                .about-skill {
                    margin-right: 15px;
                    color: ${colors.magenta};
                    font-family: Roboto;
                    font-weight: 200;
                    font-size: 16px;
                }
            }
            .about-links {
                .about-link {
                    display: flex;
                    align-items: center;
                    color: rgba(255,255,255,0.85);
                    font-family: Roboto;
                    font-weight: 300;
                    font-size: 16px;
                    text-decoration: none;
                    &:hover {
                        color: rgba(255, 255, 255, 1);
                        text-decoration: underline;
                    }
                    margin-bottom: 14px;
                    > svg {
                        width: 20px;
                        height: 20px;
                        margin-right: 8px;
                    }
                }
            }
        }
        .right {
            max-width: 300px;
            width: 100%;
            .img-wrapper {
                position: relative;
                
                &:before {
                    content: '';
                    width: 1px;
                    margin-left: -1px;
                    float: left;
                    height: 0;
                    padding-top: 100%;
                }

                &:after {
                    content: '';
                    display: table;
                    clear: both;
                }
                
                .picture-frame {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 15px;
                    left: 15px;
                    border: 2px solid rgba(255, 255, 255, 0.45);
                    border-radius: 5px;
                }

                > picture {
                    > img {
                        position: absolute;
                        left: 0;
                        top: 0;
                        object-fit: cover;
                        height: 100%;
                        width: 100%;
                        border-radius: 5px;
                    }
                }
            }
        }
    }

    ${respondTo.xs`
        .about {
            display: flex;
            flex-direction: column-reverse;
            align-items: center;
            gap: 0px;
            .right {
                margin-bottom: 30px;
                max-width: 200px;
            }
        }
    `}
`;

const links = [
    {
        name: 'Resume\'',
        link: '/Resume.pdf',
        icon: <AiFillFile className="link-icon"/>
    },
    // {
    //     name: 'kmurf1999@gmail.com',
    //     link: 'mailto:kmurf1999@gmail.com',
    //     icon: <AiOutlineMail className="link-icon"/>
    // },
    // {
    //     name: 'github.com/kmurf1999',
    //     link: 'https://github.com/kmurf1999',
    //     icon: <AiFillGithub className="link-icon"/>
    // },
    // {
    //     name: 'linkedin.com/in/kyle-w-murphy',
    //     link: 'https://www.linkedin.com/in/kyle-w-murphy/',
    //     icon: <AiFillLinkedin className="link-icon"/>
    // }
]

const description = [
    "I'm Kyle, a Senior Undergraduate Computer Science Student at Arizona State University.",
    "I like using software as a tool to transform my ideas into reality.",
    "Here are a few of my strongest skills:"
]

const skills = [
    "React.js", "Rust", "Docker", "C/C++", "Node.js"
];

const About = () => {
    const container = useRef(null);
    const[revealed, setRevealed] = useState(false);
    useEffect(() => {
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
                const elems = container.current.getElementsByClassName('scroll-reveal-item');
                for (let i=0; i < elems.length; ++i) {
                    elems[i].style.transitionDelay = '0s';
                }
            }, 0);
        }
    };
    const scrollRevealItem = (className, revealed) => {
        return [className, "scroll-reveal-item", revealed ? "scroll-reveal-item-visible" : "scroll-reveal-item-invisible"].join(' ');
    }
    return (
        <AboutStyle className="section-container" id="about">
            <div className="section">
                <div className="section-header">
                    About Me
                </div>
                <div ref={container} className="about scroll-reveal-container">
                    <div className="left">
                        <div className="about-desc scroll-reveal-stagger-container">
                            {description.map(text => (
                                <p key={text} className={scrollRevealItem("sentence", revealed)}>{text}</p>
                            ))}
                        </div>
                        <div className={scrollRevealItem("about-skills", revealed)}>
                            {skills.map(skill => (
                            <div className="about-skill" key={skill}>{skill}</div> 
                            ))}
                        </div>
                        <ul className="about-links scroll-reveal-stagger-container">
                            {links.map(link => (
                                <li key={link.name}>
                                    <a className={scrollRevealItem("about-link", revealed)} href={link.link}>
                                        {link.icon}
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={scrollRevealItem("right", revealed)}>
                        <div className="img-wrapper">
                            <div className="picture-frame"/>
                            <picture>
                                <source srcSet="/headshot.webp" type ="image/webp"/>
                                <source srcSet="/headshot.jpg" type="image/jpeg"/>
                                <img src="/headshot.jpg"/>
                            </picture>
                        </div>
                    </div>
                </div>

            </div>
        </AboutStyle>
    );
}

export default About;