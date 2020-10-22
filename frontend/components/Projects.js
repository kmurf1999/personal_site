import React, {useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

import colors from '../styles/colors'

import { FiExternalLink } from 'react-icons/fi'

const projects = [
{
    name: 'Rust Poker',
    year: "2020",
    link: "https://github.com/kmurf1999/rust_poker",
    desc: [
        "A Poker library written in Rust",
        "Quickly evalutes poker hand strength and calculates range vs range equities of up to six players",
        "Has been downloaded and used by over 250 other developers"
    ],
    tags: ["Rust", "TravisCI", "Git", "C/C++"]
},
{
    name: 'SnakTrak',
    year: "2017",
    link: "https://github.com/kmurf1999/snaktrak",
    desc: [
        "My first project, SnakTrak is a web application that uses text messages to track food nutrition information",
        "Uses Twilio to handle sms",
        "Deployed on Digital Ocean using Docker-Compose"
    ],
    tags: ["Twilio", "Docker", "SQL"]
},
{
    name: 'Poker Solver',
    year: "2020",
    link: "https://github.com/kmurf1999/CSE485PokerSolver",
    desc: [
        "Leading a team of six senior classmates to create a poker-playing AI written in Rust",
        "Uses Counter-Factual Regret Minimization to converge to a Nash-Equilibrium Strategy",
        "Developing new solutions to adhere to memory and time constraints"
    ],
    tags: ["Rust", "Reinforcement Learning", "Kmeans"]
},
{
    name: 'Holdem React',
    year: "2020",
    link: "https://github.com/kmurf1999/HoldemSolverReact",
    desc: [
        "A React-based frontend for a equity calculation and Poker game tree viewing",
        "This project hopes to bring typically expensive software free and accessible to everyone"
    ],
    tags: ["Typescript", "React"]
}
];

const ProjectsStyle = styled.section`
.projects-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 15px;
    position: relative;
    .project {
        position: relative;
        background: #3b4053;
        border-radius: 5px;
        padding: 30px;
        &:hover {
            transform: translateY(-5px);
        }
        .project-header {
            margin-bottom: 20px;
        }
        .project-name {
            font-family: Raleway;
            font-weight: 500;
            color: rgba(255,255,255,0.85);
            font-size: 24px;
            margin-right: 15px;
        }
        .project-year {
            font-family: Roboto;
            font-weight: 300;
            color: rgba(255,255,255,0.45);
            font-size: 14px;
        }
        .project-link {
            position: absolute;
            top: 30px;
            right: 30px;
            color: rgba(255,255,255,0.65);
            &:hover {
                color: rgba(255,255,255,0.95);
            }
            > svg {
                width: 25px;
                height: 25px;
            }
        }
        .project-desc {
            font-family: Roboto;
            font-weight: 300;
            color: rgba(255,255,255,0.65);
            font-size: 14px;
            margin-bottom: 40px;
            .project-desc-item {
                margin: 10px 0;
                line-height: 1.2;
            }
        }
        .project-tags {
            position: absolute;
            left: 30px;
            bottom: 30px;
            font-family: Roboto;
            font-weight: 200;
            font-size: 14px;
            color: ${colors.magenta};
            .project-tag {
                margin-right: 8px;
            }
        }
    }
}
`;

const Projects = () => {
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
        <ProjectsStyle className="section-container" id="projects">
            <div className="section">
                <div className="section-header">Projects</div>
                <div ref={container} className="scroll-reveal-container scroll-reveal-stagger-container projects-container">
                    {projects.map(p => (
                        <div key={p.name} className={scrollRevealItem("project", revealed)}>
                            <div className="project-header">
                                <span className="project-name">{p.name}</span>
                                <span className="project-year">{p.year}</span>
                            </div>
                            <a className="project-link" href={p.link}><FiExternalLink/></a>
                            <ul className="project-desc">
                            {p.desc.map(item => (
                                <li className="project-desc-item" key={item}>{item}</li>
                            ))}
                            </ul>
                            <div className="project-tags">
                            {p.tags.map(tag => (
                                <span className="project-tag" key={tag}>{tag}</span>
                            ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </ProjectsStyle>
    );
}

export default Projects;