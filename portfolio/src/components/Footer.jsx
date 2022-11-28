import React from 'react';
import '../style/footer.css';
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaSquarespace } from "react-icons/fa";




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
                <a href='https://www.instagram.com/mollysalphotography/' target="_blank"> <AiOutlineInstagram />Instagram</a>
            </p>
            <p>
                <a href='https://www.mollysalmonsen.com/' target="_blank"> <FaSquarespace />Website</a>
            </p>
        </div>
    </footer>
}