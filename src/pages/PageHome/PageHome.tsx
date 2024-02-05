import React, { useEffect, useState } from 'react';
import './PageHome.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { IoGameController } from 'react-icons/io5';
import { PiVirtualRealityFill } from 'react-icons/pi';
import { MdOutlineAudiotrack } from 'react-icons/md';
import { FaBookOpenReader } from 'react-icons/fa6';

import image1 from '../../images/Home1.jpg';
import image2 from '../../images/Home2.jpg';
import image3 from '../../images/Home3.jpg';
import image4 from '../../images/Home4.jpg';
import profile from '../../images/HomeProfile.jpg';

export default function PageHome() {
  const [heroLeftActive, setHeroLeftActive] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setHeroLeftActive(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>
      <Header active="home" />
      <div className="container">
        <div className="hero">
          <div
            className={`${heroLeftActive ? 'hero__left active' : 'hero__left'}`}
          >
            <p className="hl__name">Anggreiny Claudia</p>
            <p className="hl__desc">Portofolio</p>
          </div>
          <div className="hero__right">
            <img className="hr__img" src={profile} alt="Anggreyni Claudia" />
          </div>
        </div>
        <div className="desc">
          <div className="desc__left">
            <p className="dl__title">Description</p>
            <div className="dl__separate--wrapper">
              <hr className="dl__separate" />
            </div>
            <p className="dl__content">
              I am committed to deepening my understanding of the development
              world, with a particular emphasis on new aspects related to game
              development. I am also striving to improve my skills so I can
              become even better.
            </p>
          </div>
          <div className="desc__mid">
            <div className="desc__item-top">
              <IoGameController size={40} />
              <p className="desc__title">Game Development</p>
              <p className="desc__desc">
                I enjoy game development that requires high creativity,
                problem-solving, and teamwork. My passion lies in designing deep
                gameplay and creating captivating 3D environments to craft a
                unique and thrilling gaming experience.
              </p>
            </div>
            <div className="desc__item-bottom">
              <PiVirtualRealityFill size={40} />
              <p className="desc__title">Virtual Reality</p>
              <p className="desc__desc">
                VR has been my focus for the past year due to my interest in the
                unique aspects of the metaverse, which I find intriguing to
                explore.
              </p>
            </div>
          </div>
          <div className="desc__right">
            <div className="desc__item-top">
              <MdOutlineAudiotrack size={40} />
              <p className="desc__title">Audio Editing</p>
              <p className="desc__desc">
                I'm interested in making sound and music too. One crucial aspect
                in game development is achieving realistic sound along with
                fitting music
              </p>
            </div>
            <div className="desc__item-bottom">
              <FaBookOpenReader size={40} />
              <p className="desc__title">Learn New Things</p>
              <p className="desc__desc">
                I want to continue learning new things, especially those related
                to game development. Of course, achieving this requires good
                teamwork.
              </p>
            </div>
          </div>
        </div>
        <div className="image">
          <div className="image__list">
            <img className="il__img" src={image4} alt="Anggreyni Claudia" />
          </div>
          <div className="image__list">
            <img className="il__img" src={image3} alt="Anggreyni Claudia" />
          </div>
          <div className="image__list">
            <img className="il__img" src={image1} alt="Anggreyni Claudia" />
          </div>
          <div className="image__list">
            <img className="il__img" src={image2} alt="Anggreyni Claudia" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
