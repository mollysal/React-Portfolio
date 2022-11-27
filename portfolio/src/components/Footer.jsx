import React from 'react';
import '../style/footer.css';
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";



export const Footer = () => {
    return <footer className='footer'>
        <div className='content links'>
            <p>
                <a href='https://github.com/mollysal' target="_blank">  <AiFillGithub />GitHub</a>
            </p>
            <p>
                <a href='https://www.linkedin.com/in/molly-salmonsen' target="_blank"> <AiOutlineLinkedin />LinkedIn</a>
            </p>
            <p>
                <a href='https://www.instagram.com/molly_lynn1/' target="_blank"> <AiOutlineInstagram />Instagram</a>
            </p>
        </div>
    </footer>
}