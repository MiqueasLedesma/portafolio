import React from 'react';
import styled from 'styled-components';
import { selectLanguage } from '../Languages';

const BodyContainer = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    height: 300px;
    color: ${props => localStorage.theme != 'primary' ? props.theme.textSecundary : props.theme.textPrimary};
    background-color: ${props => localStorage.theme !== 'primary' ? props.theme.secundary : props.theme.primary};
    .box {
        width: fit-content;
        height: fit-content;
    }
`

export const Presentation = ({ language }) => {
    const { body_text } = selectLanguage(language);
    return (
        <BodyContainer>
            <div className='box'>
                <h2>{body_text.title} ?</h2>
                <p>{body_text.text}</p>
            </div>
        </BodyContainer>
    )
}