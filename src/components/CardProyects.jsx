import React, { useEffect } from 'react';
import styled from 'styled-components';
import Typed from 'typed.js';

const CardProyect = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
        color: ${props => localStorage.theme !== 'primary' ? props.theme.textSecundary : props.theme.textPrimary};
    }
    .box {
        width: 100%;
        display: flex;
        flex-direction: ${props => props.left ? 'row' : 'row-reverse'};
        gap: 2rem;
        @media (max-width:768px) {
            display: flex;
            flex-direction: column;
        }
    }
    img {
        width: 95%;
        box-shadow: 5px 5px 3px 1px black;
        transition: 100ms ease-out;
        &:hover {
            width: 100%;
        }
        border: 2px solid ${props => localStorage.theme == 'primary' ? props.theme.textPrimary : props.theme.textSecundary};
        @media screen and (max-width:768px) {
            width: 100vw;
            &:hover {
                width: 100vw;
            }
            box-shadow: none;
        }
    }
    p {
        color: ${props => localStorage.theme !== 'primary' ? props.theme.textSecundary : props.theme.textPrimary};
    }
    .text {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        width: 100%;
    }
`

export const CardProyects = ({ image, description, title, url, left, github }) => {

    return (
        <CardProyect left={left} >
            <div className="box">
                <a href={url} target="_blank" rel="noopener noreferrer"><img src={image} alt="image" /></a>
                <div className='text'>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <a href={github} target='_blank'><button type="button" className={`btn btn-outline-${localStorage.theme !== 'primary' ? 'dark' : 'light'}`}>GitHub</button></a>
                </div>
            </div>
        </CardProyect >
    )
}
