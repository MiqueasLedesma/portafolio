import React from 'react';
import styled from 'styled-components';

const CardProyect = styled.div`
    background-color: ${props => localStorage.theme !== 'primary' ? props.theme.backgroundSecundary : props.theme.backgroundPrimary};
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
`

export const CardProyects = ({ props }) => {
    const { image, description, title } = props;
    return (
            <CardProyect>
                <h2>{title}</h2>
                <img src={image} alt="image" />
                <p>{description}</p>
            </CardProyect>
    )
}
