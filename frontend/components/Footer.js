import React from 'react'
import styled from 'styled-components'

import { AiFillMail, AiFillFile, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const FooterStyle = styled.footer`
    padding: 20px 0;
    text-align: center;
    .footer-social-links {
        display: flex;
        flex-wrap;
        justify-content: center;
        .footer-social-link {
            margin-right: 20px;
            color: rgba(255, 255, 255, 0.45);
            &:hover {
                color: white;
            }
            .footer-social-link-icon {
                width: 25px;
                height: 25px;
            }
        }
    }
    .footer-text {
        text-align: center;
        color: rgba(255, 255, 255, 0.45);
        font-family: Roboto;
        font-weight: 200;
        font-size: 14px;
        margin-bottom: 20px;
    }
`

const links = [
{
    link: "https://www.linkedin.com/in/kyle-w-murphy/",
    icon: <AiFillLinkedin className="footer-social-link-icon"/>
},
{
    link: "https://github.com/kmurf1999",
    icon: <AiFillGithub className="footer-social-link-icon"/>
},
{
    link: "mailto:kmurf1999@gmail.com",
    icon: <AiFillMail className="footer-social-link-icon"/>
},
];

const Footer = () => {
    return (
        <FooterStyle>
            <div className="footer-text">
                Designed and Created by Kyle Murphy
            </div>
            <div className="footer-social-links">
                {links.map(link => (
                    <a key={link.link} className="footer-social-link" href={link.link}>
                        {link.icon}
                    </a>
                ))}
            </div>
        </FooterStyle>
    )
}

export default Footer;