import React from 'react';
import styled from 'styled-components';
import photo from '../images/photo.png';
import download_logo from '../images/download-logo.svg';
import { selectLanguage } from '../Languages';
import my_cv from '../pdf/Miqueas-Ledesma.pdf';

const BodyContainer = styled.div`
    padding-top: 100px;
    padding-bottom: 50px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    height: fit-content;
    color: ${props => localStorage.theme != 'primary' ? props.theme.textSecundary : props.theme.textPrimary};
    background-color: ${props => localStorage.theme !== 'primary' ? props.theme.secundary : props.theme.primary};
    .box {
        display: flex;
        flex-direction: row;
        gap: 10rem;
        width: fit-content;
        height: fit-content;
        img {
            box-shadow: 0 0 2px 2px black;
            width: 200px;
            border: 2px solid ${props => localStorage.theme == 'primary' ? props.theme.textPrimary : props.theme.textSecundary};
            border-radius: 10px;
        }
        @media screen and (max-width:768px){
            display: flex;
            flex-direction: column;
            gap: 3rem;
        }
        .text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            a{  
                width: 200px;
                height: 50px;
                border-radius: 15px;
                border: 2px solid ${props => localStorage.theme == 'primary' ? props.theme.textPrimary : props.theme.textSecundary};
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                gap: 1rem;
                text-decoration: none;
                color: ${props => localStorage.theme == 'primary' ? props.theme.textPrimary : props.theme.textSecundary};
            }
            p{
                width: 25rem;
                @media screen and (max-width:768px){
                    width: 90%;
                }
            }
            img {
                border: none;
                width: 40px;
                &:hover {
                    user-select: none;
                    cursor: pointer;
                }
            }
            @media screen and (max-width:768px) {
                display: flex;
                align-items: center;
            }
            img {
                box-shadow: none;
            }
        }
    }
`

export const Presentation = ({ language }) => {
    const { body_text } = selectLanguage(language)
    return (
        <BodyContainer id='about'>
            <div className='box'>
                <div className='portrait'>
                    <img src={photo} alt="error" />
                </div>

                <div className='text'>
                    <h2>{body_text.title}</h2>
                    <p>{body_text.text}</p>
                    <a href={my_cv} download><span>Download CV</span><img src={download_logo} alt="error" /></a>
                </div>
            </div>
        </BodyContainer>
    )
}