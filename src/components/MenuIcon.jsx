import React from 'react'
import styled from 'styled-components'

const MyContainer = styled.div`
    
.row .three{
  padding: 80px 30px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background-color: ${props => localStorage.theme == 'primary' ? props.theme.textPrimary : props.theme.textSecundary};
  color: ${props => localStorage.theme == 'primary' ? props.theme.textPrimary : props.theme.textSecundary};
  text-align: center;
}
.hamburger .line{
  width: 50px;
  height: 5px;
  background-color: ${props => localStorage.theme == 'primary' ? props.theme.textPrimary : props.theme.textSecundary};
  display: block;
  margin: 8px auto;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.hamburger:hover{
  cursor: pointer;
}
#hamburger-1.is-active .line:nth-child(2){
  opacity: 0;
}
#hamburger-1.is-active .line:nth-child(1){
  -webkit-transform: translateY(13px) rotate(45deg);
  -ms-transform: translateY(13px) rotate(45deg);
  -o-transform: translateY(13px) rotate(45deg);
  transform: translateY(13px) rotate(45deg);
}
#hamburger-1.is-active .line:nth-child(3){
  -webkit-transform: translateY(-13px) rotate(-45deg);
  -ms-transform: translateY(-13px) rotate(-45deg);
  -o-transform: translateY(-13px) rotate(-45deg);
  transform: translateY(-13px) rotate(-45deg);
}
`

export const MenuIcon = ({ state, setState }) => {

  const handleClick = () => {
    setState(!state);
  };

  return (
    <MyContainer onClick={handleClick}>
      <div className={`hamburger ${state && 'is-active'}`} id="hamburger-1">
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </MyContainer>
  )
}