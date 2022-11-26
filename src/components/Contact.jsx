import React from 'react';
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
    return (
        <ContactContainer>
            <h2>Contact:</h2>
            <form>
                <label>Name</label>
                <input className='name' type="text" />
                <label>Email</label>
                <input className='email' type="text" />
                <label>Message</label>
                <textarea name="message" id="" cols="30" rows="10"></textarea>
                <div className='box'>
                    <button>
                        <img src={send_logo} alt="" />
                    </button>
                </div>
            </form>
        </ContactContainer>
    )
}
