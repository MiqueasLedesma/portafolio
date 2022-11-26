import React, { useState } from 'react';
import styled from 'styled-components';
import sun_logo from '../images/sun-logo.svg';
import moon_logo from '../images/moon-logo.svg';
import { selectLanguage } from '../Languages';

const NavContainer = styled.div`
    position: fixed;
    z-index: 1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: fit-content;
    background-color: ${props => localStorage.theme == 'primary' ? props.theme.primary : props.theme.secundary};
    color: ${props => localStorage.theme == 'primary' ? props.theme.textPrimary : props.theme.textSecundary};
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
        padding-top: 2rem;
        display: flex;
        flex-direction: column;
        height: fit-content;
        gap: 20px;
    }
`

export const Navbar = ({ handleClick, handleSelect, language }) => {

    const { nav_text } = selectLanguage(language);

    const [state, setState] = useState({});
    const [open, setOpen] = useState(false);

    const handleScroll = e => {
        window.scrollTo(0, 2200);
        setState({ [e.target.id]: true })
    }

    const handleScroll2 = e => {
        window.scrollTo(0, 0);
        setState({ [e.target.id]: true })
    }

    const handleScroll3 = e => {
        window.scrollTo(0, 400);
        setState({ [e.target.id]: true })
    }

    const handleScroll4 = e => {
        window.scrollTo(0, 1055);
        setState({ [e.target.id]: true })
    }


    return (
        <NavContainer>
            <div>
                <button onClick={e => setOpen(!open)}>Menu</button>
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

            <div className='box'>
                <div>
                    <img src={localStorage.theme === 'primary' ? sun_logo : moon_logo} alt='error' onClick={handleClick} />
                </div>
                <select name="language" id="" onChange={handleSelect}>
                    <option value="en">EN</option>
                    <option value="esp">ESP</option>
                </select>
            </div>

        </NavContainer>
    )
}
