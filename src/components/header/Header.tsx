import React from 'react';
import './Header.css';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

import header from '../../images/Header.jpg';

export default function Header({ active }: { active: string }) {
  return (
    <div className="header">
      <div className="header__logo">
        <a href="/">
          <img className="hl__img" src={header} alt="logo" />
        </a>
      </div>
      <div className="header__menu">
        <ul className="list">
          <li className={active === 'home' ? 'active' : ''}>
            <a href="/">Home</a>
          </li>
          <li className={active === 'about' ? 'active' : ''}>
            <a href="/about">About</a>
          </li>
          <li className={active === 'portfolio' ? 'active' : ''}>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li className={active === 'contact' ? 'active' : ''}>
            <a href="/contact">Contact</a>
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
