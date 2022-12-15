import React from 'react';
import styled from 'styled-components';
import { selectLanguage } from '../Languages';
import { proyects } from '../StaticConst';
import { CardProyects } from './CardProyects';


const ProyectsContainer = styled.div`
    padding-top: 40px;
    padding-bottom: 40px;
    color: ${props => localStorage.theme == 'primary' ? props.theme.textPrimary : props.theme.textSecundary};
    background-color: ${props => localStorage.theme !== 'primary' ? props.theme.proyectSecundary : props.theme.proyectPrimary};
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    h2 {
        padding-top: 4rem;
    }
`

export const Proyects = ({ language }) => {
    const toRender = selectLanguage(proyects);
    const { proyects_text } = selectLanguage(language);
    return (
        <ProyectsContainer>
            <h2 id='proyects'><strong>{ proyects_text }:</strong></h2>
            {
                toRender && toRender.map((e, index) => <CardProyects key={index} props={e} />)
            }
        </ProyectsContainer>
    )
}
