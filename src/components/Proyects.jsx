import React from 'react';
import styled from 'styled-components';
import { selectLanguage } from '../Languages';
import { proyects } from '../StaticConst';
import { CardProyects } from './CardProyects';


const ProyectsContainer = styled.div`
    color: ${props => localStorage.theme == 'primary' ? props.theme.textPrimary : props.theme.textSecundary};
    background-color: ${props => localStorage.theme !== 'primary' ? props.theme.proyectSecundary : props.theme.proyectPrimary};
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 5rem;
`

export const Proyects = ({ language }) => {
    const toRender = selectLanguage(proyects);
    const { proyects_text } = selectLanguage(language);
    // console.log(selectLanguage(language));
    return (
        <ProyectsContainer>
            <h2><strong>{ proyects_text }:</strong></h2>
            {
                toRender && toRender.map(e => <CardProyects props={e} />)
            }
        </ProyectsContainer>
    )
}
