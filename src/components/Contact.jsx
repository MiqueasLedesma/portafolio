import React, { useState } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import send_logo from '../images/send-logo.png';
const ContactContainer = styled.div`
        background: linear-gradient(
        35.3deg,
        ${props => localStorage.theme == 'primary' ? props.theme.mixPrimary : props.theme.mixSecundary} 0%,
        ${props => localStorage.theme == 'primary' ? props.theme.mixPrimary : props.theme.mixSecundary} 50%,
        ${props => localStorage.theme == 'primary' ? props.theme.backgroundPrimary : props.theme.backgroundSecundary} 0%,
        ${props => localStorage.theme == 'primary' ? props.theme.backgroundPrimary : props.theme.backgroundSecundary} 50%
    );
    color: ${props => localStorage.theme == 'primary' ? props.theme.textPrimary : props.theme.textSecundary};
    padding-top: 40px;
    padding-bottom: 40px;
    height: fit-content;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    form {
        display: flex;
        flex-direction: column;
        input {
            border-radius: 5px;
        }
        textarea {
            border: 5px;
        }
    }
    .box {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        button {
            height: fit-content;
            width: fit-content;
            border-radius: 50%;
            transition: 1s ease;
            background-color: #fff;
            border: none;
            &:hover {
                background-color: #a0ff65;
            }
        }
    }
`

export const Contact = () => {

    const [state, setState] = useState({});

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault();
        await fetch(e.target.action, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                name: state.name,
                email: state.email,
                message: state.message,
            }),
        });
        setState({
            name: '',
            email: '',
            message: ''
        });
        Swal.fire('Succes!')
    };

    return (
        <ContactContainer>
            <h2><strong>Contact:</strong></h2>
            <form action="https://submit-form.com/fSutHLJe" onSubmit={handleSubmit}>
                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Name" required="" value={state.name} onChange={handleChange} />
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email" required="" value={state.email} onChange={handleChange} />
                <label for="message">Message</label>
                <textarea
                    value={state.message}
                    onChange={handleChange}
                    cols="30"
                    rows="10"
                    id="message"
                    name="message"
                    placeholder="Message"
                    required=""
                ></textarea>
                <div className='box'>
                    <button type="submit"><img src={send_logo} alt="" /></button>
                </div>
            </form>
        </ContactContainer>
    )
}
