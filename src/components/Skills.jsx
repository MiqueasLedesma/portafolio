import React from 'react';
import styled from 'styled-components';
import { FlipCard } from './FlipCard';
import { flipCardInfo } from '../StaticConst';
import { selectLanguage } from '../Languages';

const SkillsContainer = styled.div`
    padding-top: 40px;
    padding-bottom: 40px;
    height: fit-content;
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
      h2 {
        padding-top: 4rem;
      }
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
      gap: 8rem;
      text-align: center;
      justify-content: center;
      width: 90%;
      @media screen and (max-width:768px){
        gap: 3rem;
      }
    }
    `

export const Skills = ({ language }) => {
  const { skills_text } = selectLanguage(language);
  return (
    <SkillsContainer>
      <div className='text'>
        <div><h2 id='skills'><strong>{skills_text}:</strong></h2></div>
      </div>
      <div className='skills'>
        {
          flipCardInfo.map((e, index) => <FlipCard key={index} {...e} />)
        }
      </div>
    </SkillsContainer>
  )
}
