import React from 'react';
import styled from 'styled-components';
import { FlipCard } from './FlipCard';
import { flipCardInfo } from '../StaticConst';

const SkillsContainer = styled.div`
    height: 50rem;
    display: flex;
    gap: 3rem;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    color: ${props => localStorage.theme != 'primary' ? props.theme.textSecundary : props.theme.textPrimary};
    @media screen and (max-width:768px){
      height: 60rem;
    }
    .text {
      display: flex;
      flex-direction: column;
      .box {
        display: flex;
        gap: 5rem;
        align-items: center;
        text-align: center;
        justify-content: space-between;
      }
    }
    .skills {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 3rem;
      text-align: center;
      justify-content: center;
      width: 90%;
    }
    `

export const Skills = () => {
  return (
    <SkillsContainer>
      <div className='text'>
        <div><h2>Skills</h2></div>
      </div>
      <div className='skills'>
        {
          flipCardInfo.map(e => <FlipCard img={e.img} text={e.text} />)
        }
      </div>
    </SkillsContainer>
  )
}
