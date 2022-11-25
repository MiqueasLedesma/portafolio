import React from 'react';
import styled from 'styled-components';
import { CardProyects } from './CardProyects';
import image1 from '../images/appvg.png';
import image2 from '../images/apptech.png';

const ProyectsContainer = styled.div`
    background-color: ${props => localStorage.theme !== 'primary' ? props.theme.proyectSecundary : props.theme.proyectPrimary};
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 5rem;
`

export const Proyects = () => {

    const proyects = [
        {
            title: 'App-Videogames',
            image: image1,
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis vel modi, rerum reiciendis sequi consectetur maiores iure facilis similique dicta explicabo molestiae aperiam dolores omnis neque illo id iusto tempore?'
        },
        {
            title: 'TechStore',
            image: image2,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum totam eligendi, blanditiis sed beatae aspernatur quae fugit quia nulla ipsa minima dolor! Hic debitis corrupti unde commodi vero ducimus natus!'
        }
    ];

    return (
            <ProyectsContainer>
                <h2>Proyectos</h2>
                {
                    proyects && proyects.map(e => <CardProyects props={e} />)
                }
            </ProyectsContainer>
    )
}
