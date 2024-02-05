import React, { useEffect } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './PageContact.css';

import { MdEmail, MdPhone, MdLocationPin } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';

export default function PageContact() {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const titles = document.querySelectorAll('.contact__title');
      titles.forEach((title) => {
        title.classList.add('active');
      });
    }, 100);
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>
      <Header active="contact" />
      <div className="container">
        <div className="contact__header">
          <h1 className="contact__title">Contact</h1>
          <div className="contact__item">
            <div className="ci__logo">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=claudiaongkowijoyo@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdEmail size={40} />
              </a>
            </div>
            <div className="ci__desc">
              <p className="cid__title">Email</p>
              <p className="cid__desc">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=claudiaongkowijoyo@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  claudiaongkowijoyo@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="contact__item">
            <div className="ci__logo">
              <MdPhone size={40} />
            </div>
            <div className="ci__desc">
              <p className="cid__title">Phone</p>
              <p className="cid__desc">0812-4445-8800</p>
            </div>
          </div>
          <div className="contact__item">
            <div className="ci__logo">
              <a
                href="https://www.instagram.com/claudiaong_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={40} />
              </a>
            </div>
            <div className="ci__desc">
              <p className="cid__title">Instagram</p>
              <p className="cid__desc">
                <a
                  href="https://www.instagram.com/claudiaong_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @claudiaong_
                </a>
              </p>
            </div>
          </div>
          <div className="contact__item">
            <div className="ci__logo">
              <MdLocationPin size={40} />
            </div>
            <div className="ci__desc">
              <p className="cid__title">Address</p>
              <p className="cid__desc">
                Jl. Kayu Besi no. 27, Airmadidi Bawah, North Sulawesi, Indonesia
              </p>
              <p className="cid__desc">
                Jl. Kemakmuran, Kampung Cina Gamsungi, Tobelo, North Halmahera,
                Indonesia
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
