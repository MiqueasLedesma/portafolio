import React, { useState } from 'react';
import styled from 'styled-components';
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
    h1 {
        padding-top: 2px;
        margin-top: 2px;
        user-select: none;
        font-size: 1.5rem;
    }
    .box {
        display: inline;
        padding-right: 2%;
        span {
            padding-right: 10px;
            user-select: none;
            font-size: 1rem;
            font-weight: 800;
            &:hover {
                cursor: pointer;
            }
        }
    }
    .links {
        display: flex;
        user-select: none;
        gap: 3rem;
        transition: 1s;
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
`

export const Navbar = ({ handleClick, handleSelect, language }) => {

    const { nav_text } = selectLanguage(language);

    const [state, setState] = useState({});

    const handleScroll = e => {
        if (state[e.target.id]) return setState({});
        window.scrollTo(0, 2210);
        setState({ [e.target.id]: true })
    }

    const handleScroll2 = e => {
        if (state[e.target.id]) return setState({});
        window.scrollTo(0, 0);
        setState({ [e.target.id]: true })
    }

    const handleScroll3 = e => {
        if (state[e.target.id]) return setState({});
        window.scrollTo(0, 300);
        setState({ [e.target.id]: true })
    }

    const handleScroll4 = e => {
        if (state[e.target.id]) return setState({});
        window.scrollTo(0, 1070);
        setState({ [e.target.id]: true })
    }

    return (
        <NavContainer>
            <div className='links'>
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
                <span onClick={handleClick}>{localStorage.theme != 'primary' ? 'Ligth' : 'Dark'}</span>
                <select name="language" id="" onChange={handleSelect}>
                    <option value="en">EN</option>
                    <option value="esp">ESP</option>
                </select>
            </div>

        </NavContainer>
    )
}
