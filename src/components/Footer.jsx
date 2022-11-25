import React from 'react';
import styled from 'styled-components';
import footer_logo from '../images/footer-logo.png';
import linkedin_logo from '../images/linkedin-logo.svg';
import github_logo from '../images/github-logo.png';
import react_logo from '../images/react-logo.svg';
import html_logo from '../images/html-logo.svg';
import css_logo from '../images/css-logo.svg';
import styled_logo from '../images/styled-logo.svg';
import { selectLanguage } from '../Languages';


const Box = styled.div`
`
const Group1 = styled.div`
`
const Group2 = styled.div`
`

const FooterContainer = styled.div`
    position: relative;
    bottom: 0;
    width: 100%;
    footer {
        width: 100%;
        background-color: ${props => localStorage.theme !== 'primary' ? props.theme.secundary : props.theme.primary};
    }
    ${Group1}{
        width: 100%;
        max-width: 1200px;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(3 , 1fr);
        grid-gap: 50px;
        padding: 45px 0px;
        @media screen and (max-width:768px) {
            width: 50%;
            display: grid;
            grid-template-columns: repeat(1 , 1fr);
            grid-gap: 30px;
            padding: 35px 0px;
        }
    }
    ${Box} {
        figure {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                width: 150px;
            }
        }
        h2 {
            color: ${props => localStorage.theme !== 'primary' ? props.theme.textSecundary : props.theme.textPrimary};
            margin-bottom: 25px;
            font-size: 20px;
        }
        p {
            color: ${props => localStorage.theme !== 'primary' ? props.theme.textSecundary : props.theme.textPrimary};
            margin-bottom: 10px;
            img {
                width: 25px;
            }
        }
        a {
            padding: 10px;
            img {
                width: 50px;
                transition: all 300ms ease;
                &:hover {
                    width: 70px;
                }
            }
        }
    }
    ${Group2} {
        background-color: #0a1a2a;
        padding: 15px 10px;
        color: ${props => localStorage.theme !== 'primary' ? props.theme.textSecundary : props.theme.textPrimary};
        text-align: center;
    }

`

export const Footer = ({ language }) => {
    const { footer_text } = selectLanguage(language);
    return (
        <FooterContainer>
            <footer>
                <Group1 className="group-1">
                    <Box>
                        <figure>
                            <img src={footer_logo} alt="img" />
                        </figure>
                    </Box>
                    <Box className="box">
                        <h2>{footer_text.contact}:</h2>
                        <p>
                            <img src={react_logo} alt="" />
                            <img src={html_logo} alt="" />
                            <img src={css_logo} alt="" />
                            <img src={styled_logo} alt="" />
                        </p>
                    </Box>
                    <Box className="box">
                        <h2>{footer_text.social}:</h2>
                        <a href='https://www.linkedin.com/in/miqueas-ledesma-08a106246/' target='_blank'><img src={linkedin_logo} alt="img" /></a>
                        <a href='https://github.com/MiqueasLedesma' target='_bla'><img src={github_logo} alt="img" /></a>

                    </Box>
                </Group1>
                <Group2 className="group-2">
                    <small style={{color: 'white'}}>
                        copyright© 2022: <b>Miqueas Ledesma</b> - {footer_text.rights}
                    </small>
                </Group2>
            </footer>
        </FooterContainer>
    )
}
