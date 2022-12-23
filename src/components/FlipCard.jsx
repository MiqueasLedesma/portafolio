import React from 'react';
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import styled from 'styled-components';


const BackCardContainer = styled.div`
    cursor: pointer;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => localStorage.theme == 'primary' ? props.theme.textPrimary : props.theme.textSecundary};
    box-shadow: 0px 0px 2px 2px ${props => localStorage.theme == 'primary' ? props.theme.textPrimary : props.theme.textSecundary};
    border-radius: 15px;
`
const FrontCardContainer = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: fit-content;
    background-color: transparent;
    img {
        transition: 500ms ease;
        width: 100px;
        height: 100px;
        &:hover {
            width: 110px;
            height: 110px;
        }
    }
`

export const FlipCard = ({ img, text }) => {

    const [state, setState] = useState(false);

    return (
        <ReactCardFlip isFlipped={state}>
            <FrontCardContainer onClick={() => setState(!state)} >
                <img src={img} alt="loadging..." data-bs-toggle="tooltip" data-bs-placement="top" title={text} />
            </FrontCardContainer>

            <BackCardContainer onClick={() => setState(!state)}>
                <p>{text}</p>
            </BackCardContainer>
        </ReactCardFlip>
    )
}
