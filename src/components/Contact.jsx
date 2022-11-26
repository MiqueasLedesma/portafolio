import React, { useState } from 'react';
import styled from 'styled-components';
import send_logo from '../images/send-logo.png';
const ContactContainer = styled.div`
    color: ${props => localStorage.theme == 'primary' ? props.theme.textPrimary : props.theme.textSecundary};
    padding-bottom: 20px;
    height: fit-content;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    form {
        display: flex;
        flex-direction: column;
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

    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        await fetch(e.target.action, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                message,
            }),
        });
        setMessage("")
        setEmail("")
        setName("")
        alert("Form submitted");
    };

    return (
        <ContactContainer>
            <h2>Contact:</h2>
            <form action="https://submit-form.com/fSutHLJe" onSubmit={handleSubmit}>
                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Name" required="" value={name} onChange={e => setName(e.target.value)} />
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email" required="" value={email} onChange={e => setEmail(e.target.value)} />
                <label for="message">Message</label>
                <textarea
                    value={message}
                    onChange={e => setMessage(e.target.value)}
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
