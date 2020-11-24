import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header className="text-platinum border-solid border-b-2 border-black block text-center sm:flex sm:justify-between p-8 bg-onyx text-xl">
            <Link to="/" className="hover:text-silverSand hover:underline">Lucas Stevenson</Link>
            <nav className="text-center border-t-2 sm:border-none">
                <Link to="/about" className="pr-4 hover:text-silverSand hover:underline">About Me</Link>
                <Link to="/projects" className="pr-4 hover:text-silverSand hover:underline">My Projects</Link>
                <Link to="/resume" className="hover:text-silverSand hover:underline">Resume</Link>
            </nav>
        </header>
    )
}

export default Header;