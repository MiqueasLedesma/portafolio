import React from 'react';
import styled from 'styled-components';

const CardProyect = styled.div`
    background-color: ${props => localStorage.theme !== 'primary' ? props.theme.proyectSecundary : props.theme.proyectPrimary};
    h2 {
        color: ${props => localStorage.theme !== 'primary' ? props.theme.textSecundary : props.theme.textPrimary};
    }
    img {
        width: 60%;
        height: 80%;
    }
    p {
        color: ${props => localStorage.theme !== 'primary' ? props.theme.textSecundary : props.theme.textPrimary};
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    .text {
        font-size: 1rem;
        width: 50%;
    }
`

export const CardProyects = ({ props }) => {
    const { image, description, title, url } = props;
    return (
        <CardProyect>
            <h2>{title}</h2>
            <a href={url} target="_blank" rel="noopener noreferrer"><img src={image} alt="image" /></a>
            <div className='text'>
                <p>{description}</p>
            </div>
        </CardProyect>
    )
}
