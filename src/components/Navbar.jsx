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
        width: 40%;
        justify-content: space-between;
        transition: 1s;
        &:hover {
            cursor: pointer;
        }
        .active {
            color: #0057c0;
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
        window.scrollTo(0, 0);
        setState({ [e.target.id]: true })
    }

    const handleScroll2 = e => {
        if (state[e.target.id]) return setState({});
        window.scrollTo(0, 0);
        setState({ [e.target.id]: true })
    }

    const handleScroll3 = e => {
        if (state[e.target.id]) return setState({});
        window.scrollTo(0, 0);
        setState({ [e.target.id]: true })
    }

    return (
        <NavContainer>
            <div className='links'>
                <h4 id='title' onClick={handleScroll} className={state.title && 'active'}>
                    Miqueas Ledesma
                </h4>
                <h4 id='about' onClick={handleScroll2} className={state.about && 'active'} >
                    {nav_text.about}
                </h4>
                <h4 id='skills' onClick={handleScroll3} className={state.skills && 'active'}>
                    {nav_text.skills}
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
