import React from 'react';
import '../style/Nav.css';
import MSLogo from '../images/MS.png'

export const Nav = ({ page, pages, setPage }) => {
    return <nav className="navbar navbar-expand-lg navbar-light px-4">
        <a className="navbar-brand" onClick={() => setPage(pages[0])}>
            <img src={MSLogo} alt='MS Logo' width="120" class="d-inline-block align-text-top"></img>
        </a>
        <div className="navbar navbar-light" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" onClick={() => setPage(pages[0])}>Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={() => setPage(pages[1])}>Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={() => setPage(pages[2])}>Contact</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={() => setPage(pages[3])}>Resume</a>
                </li>
            </ul>
        </div>
    </nav>
}