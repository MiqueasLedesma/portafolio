import React, { useState } from 'react';
import styled from 'styled-components';
import sun_logo from '../images/sun-logo.svg';
import moon_logo from '../images/moon-logo.svg';
import { selectLanguage } from '../Languages';
import { MenuIcon } from './MenuIcon';

const NavContainer = styled.div`
    position: fixed;
    z-index: 1;
    width: 100%;
    height: fit-content;
    background-color: ${props => localStorage.theme == 'primary' ? props.theme.primary : props.theme.secundary};
    color: ${props => localStorage.theme == 'primary' ? props.theme.textPrimary : props.theme.textSecundary};
    .bigBox {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    .bigBox.active {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(5, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px; 
    }
    button {
        display: none;
        @media screen and (max-width:768px) {
            display: flex;
            float: right;
        }
    }
    h1 {
        padding-top: 2px;
        margin-top: 2px;
        user-select: none;
        font-size: 1.5rem;
    }
    .box {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        img {
            height: auto;
            width: 50px;
            &:hover {
                cursor: pointer;
            }
        }
        select {
            margin-right: 1rem;
        }
    }
    .box.active {
        grid-area: 1 / 5 / 2 / 6;
    }
    .links {
        display: flex;
        user-select: none;
        gap: 3rem;
        &:hover {
            cursor: pointer;
        }
        h4 {
            &:hover {
                color: #0057c0;
            }
        }
        @media screen and (max-width:768px) {
            display: none;
        }
    }
    .links.active {
        display: flex;
        flex-direction: column;
        align-items: center;
        grid-area: 2 / 3 / 6 / 4;
        @media screen and (min-width:768px){
            display: none;
        }
    }
    .menu {
        @media screen and (min-width:768px){
            display: none;
        }
    }
    .menu.active {
        grid-area: 1 / 1 / 2 / 2;
    }
    
`

export const Navbar = ({ handleClick, handleSelect, language }) => {

    const { nav_text } = selectLanguage(language);

    const [open, setOpen] = useState(false);

    const handleScroll = e => {
        window.scrollTo(0, 2200);
    }

    const handleScroll2 = e => {
        window.scrollTo(0, 0);
    }

    const handleScroll3 = e => {
        window.scrollTo(0, 400);
    }

    const handleScroll4 = e => {
        window.scrollTo(0, 1055);
    }


    return (
        <NavContainer>
            <div className={`bigBox ${open && 'active'}`}>
                <div className={`menu ${open && 'active'}`}>
                    <MenuIcon setState={setOpen} state={open}/>
                </div>

                <div className={`links ${open && 'active'}`}>
                    <h4 id='about' onClick={handleScroll2}>
                        {nav_text.about}
                    </h4>
                    <h4 id='skills' onClick={handleScroll3}>
                        {nav_text.skills}
                    </h4>
                    <h4 id='proyects' onClick={handleScroll4}>
                        {nav_text.proyects}
                    </h4>
                    <h4 id='contact' onClick={handleScroll}>
                        {nav_text.contact}
                    </h4>
                </div>

                <div className={`box ${open && 'active'}`}>
                    <div>
                        <img src={localStorage.theme === 'primary' ? sun_logo : moon_logo} alt='error' onClick={handleClick} />
                    </div>
                    <select name="language" id="" onChange={handleSelect}>
                        <option value="en">EN</option>
                        <option value="esp">ESP</option>
                    </select>
                </div>
            </div>


        </NavContainer>
    )
}
