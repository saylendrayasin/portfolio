import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

import header from '../../images/Header.jpg';

export default function Header({ active }: { active: string }) {
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          <img className="hl__img" src={header} alt="logo" />
        </Link>
      </div>
      <div className="header__menu">
        <ul className="list">
          <li className={active === 'home' ? 'active' : ''}>
            <Link to="/">Home</Link>
          </li>
          <li className={active === 'about' ? 'active' : ''}>
            <Link to="/about">About</Link>
          </li>
          <li className={active === 'portfolio' ? 'active' : ''}>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className={active === 'contact' ? 'active' : ''}>
            <Link to="/contact">Contact</Link>
          </li>
          <li>|</li>
          <li>
            <a
              href="https://github.com/cludiaong"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/anggreiny-claudia-101002ae/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
