import React from 'react'
import styled from 'styled-components'
import { FlipCard } from './FlipCard'

const SkillsContainer = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    color: ${props => localStorage.theme != 'primary' ? props.theme.textSecundary : props.theme.textPrimary};
    .box {
      li {
        list-style: none;
      }
    }
`

export const Skills = () => {
  return (
    <SkillsContainer>
      <div className='box'>
        <h2>Skills</h2>
        <h4>Front-End</h4>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>HTML</li>
          <li><FlipCard/></li>
          <li>Bootstrap</li>
          <li>Styled Components</li>
        </ul>
      </div>
    </SkillsContainer>
  )
}
