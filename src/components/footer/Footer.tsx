import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className="container--footer">
      <div className="footer__content">
        <div className="fc__one">
          <p className="fco__title">Contact</p>
          <p className="fco__desc">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=claudiaongkowijoyo@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              claudiaongkowijoyo@gmail.com
            </a>
          </p>
          <p className="fco__desc">0812-4445-8800</p>
        </div>
        <div className="fc__two">
          <p className="fco__title">Social Media</p>
          <p className="fco__desc">
            <a
              href="https://www.instagram.com/claudiaong_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @claudiaong_
            </a>
          </p>
          <p className="fco__desc">
            <a
              href="https://www.linkedin.com/in/anggreiny-claudia-101002ae/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Anggreiny Claudia
            </a>
          </p>
        </div>
        <div className="fc__three">
          <p className="fco__title">Address</p>
          <p className="fco__desc">
            Jl. Kayu Besi no. 27, Airmadidi Bawah, North Sulawesi, Indonesia
          </p>
          <p className="fco__desc">
            Jl. Kemakmuran, Kampung Cina Gamsungi, Tobelo, North Halmahera,
            Indonesia
          </p>
        </div>
      </div>
      <hr className="footer__separate" />
      <div className="footer__bottom">
        <p>
          Copyright © 2024 All Rights Reserved | Made with{' '}
          <span className="love">&#10084;</span> by{' '}
          <span className="love">Anggreiny Claudia</span> | S Y
        </p>
      </div>
    </div>
  );
}
