import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div>
            <nav className="navbar bg-base-200 fixed w-full z-[10] shadow-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex="0" role="button" className="btn btn-ghost btn-circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-primary"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7"/>
                            </svg>
                        </div>
                        <ul
                            tabIndex="0"
                            className="menu menu-compact dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow text-primary">
                            <li className="hover:bg-base-300 rounded-md">
                                <Link to="home" smooth={true} duration={500}>Accueil</Link>
                            </li>
                            <li className="hover:bg-base-300 rounded-md">
                                <Link to="skill" smooth={true} duration={500}>Compétences</Link>
                            </li>
                            <li className="hover:bg-base-300 rounded-md">
                                <Link to="experience" smooth={true} duration={500}>Expériences</Link>
                            </li>
                            <li className="hover:bg-base-300 rounded-md">
                                <Link to="project" smooth={true} duration={500}>Projets</Link>
                            </li>
                            <li className="hover:bg-base-300 rounded-md">
                                <Link to="contact" smooth={true} duration={500}>Me Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <p className="navbar-brand text-primary cursor-default text-sm md:text-base lg:text-lg hidden sm:block">Portfolio
                        | Florian Beudaert</p>
                </div>
                <div className="navbar-end">
                    <label className="flex cursor-pointer gap-2 items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-primary"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5"/>
                            <path
                                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>
                        </svg>
                        <input type="checkbox" className="toggle border border-primary bg-primary hover:" onClick={toggleTheme}/>
                        <svgbg-primary
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-primary"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svgbg-primary>
                    </label>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;