import React from 'react';
import styled from 'styled-components';
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

export const Proyects = () => {

    return (
            <ProyectsContainer>
                <h2>Proyectos</h2>
                {
                    proyects && proyects.map(e => <CardProyects props={e} />)
                }
            </ProyectsContainer>
    )
}
