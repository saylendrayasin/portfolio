import React, { useEffect } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './PageAbout.css';

import image1 from '../../images/About1.jpg';
import image2 from '../../images/About2.jpg';
import image3 from '../../images/About3.jpg';

export default function PageAbout() {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const titles = document.querySelectorAll('.ac__title');
      titles.forEach((title) => {
        title.classList.add('active');
      });
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>
      <Header active="about" />
      <div className="container">
        <div className="about">
          <p className="ac__title">More About Me</p>
          <div className="ac__separate--wrapper">
            <hr className="ac__separate" />
          </div>
          <div className="about__content">
            <div className="about__logo">
              <div className="al__left">
                <img
                  className="all__img"
                  src={image1}
                  alt="logo"
                  height={450}
                />
              </div>
              <div className="al__right">
                <img
                  className="alr__img"
                  src={image2}
                  alt="logo"
                  height={216}
                />
                <img
                  className="alr__img"
                  src={image3}
                  alt="logo"
                  height={216}
                />
              </div>
            </div>
            <div className="about__desc">
              <div className="ad__content-wrapper">
                <p className="adc__desc">
                  I was born in Bitung on October 10, 2002. Originally, I am
                  from Tobelo, North Halmahera in the eastern part of Indonesia.
                  I have been living with both of my parents until now, and they
                  have always supported me in both academic and non-academic
                  aspects. I attended school in Tobelo until the age of 15 and
                  then moved to Manado to pursue my high school education. After
                  graduating from high school in 2020, I entered college in the
                  same year at Klabat University, majoring in Informatics.
                  Throughout my academic journey, I initially found interest in
                  design, particularly UI/UX. However, my passion evolved, and I
                  developed a keen interest in game development, specifically in
                  3D design. Since childhood, I have always enjoyed playing
                  video games, leading me to decide to specialize in game
                  development with the aspiration of becoming a level designer.
                  After graduating from high school in 2020, I entered college
                  in the same year at Klabat University, majoring in
                  Informatics. Throughout my academic journey, I initially found
                  interest in design, particularly UI/UX. However, my passion
                  evolved, and I developed a keen interest in game development,
                  specifically in 3D design. Since childhood, I have always
                  enjoyed playing video games, leading me to decide to
                  specialize in game development with the aspiration of becoming
                  a level designer. I like singing and playing the piano since I
                  was 9. I'm also into music, which is why I enjoy sounds and
                  music in game development and want to learn more about it.
                  Looking forward, I am eager to contribute to the gaming
                  industry, bringing fresh ideas and innovative designs to life.
                  I envision a future where my skills not only meet the demands
                  of the evolving game development landscape but also inspire
                  others to push the boundaries of creativity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
