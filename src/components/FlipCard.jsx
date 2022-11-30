import React from 'react';
import styled from 'styled-components';

const imgStyle = {
    width: '100px',
    heigth: '100px',
}

const FlipCardContainer = styled.div`
    background-color: transparent;
    .flip-card {
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
    }
    .flip-card-back{
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        transform: rotateY(180deg);
    }

`


export const FlipCard = ({img, text}) => {
    return (
        <FlipCardContainer>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={img} alt="Avatar" style={imgStyle} />
                    </div>
                    <div className="flip-card-back">
                    <img src={img} alt="Avatar" style={imgStyle} />
                    </div>
                </div>
            </div>
            {text}
        </FlipCardContainer>
    )
}
