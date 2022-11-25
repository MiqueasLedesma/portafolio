import React from 'react';
import styled from 'styled-components';
import css_logo from '../images/css-logo.svg';

const imgStyle = {
    width: '100px',
    heigth: '100px'
}

const FlipCardContainer = styled.div`
    .flip-card {
        background-color: transparent;
        width: 100px;
        height: 100px;
        perspective: 1000px;
        &:hover {
            transform: rotateY(180deg);
        }
    }
    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        transition: transform 0.8s;
        transform-style: preserve-3d;
        &:hover {
            transform: rotateY(180deg);
        }
    }
    .flip-card-front {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        background-color: #bbb;
        color: black;
    }
    .flip-card-back{
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        background-color: dodgerblue;
        color: white;
        transform: rotateY(180deg);
    }

`


export const FlipCard = () => {
    return (
        <FlipCardContainer>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={css_logo} alt="Avatar" style={imgStyle} />
                    </div>
                    <div className="flip-card-back">
                        
                    </div>
                </div>
            </div>
        </FlipCardContainer>
    )
}
