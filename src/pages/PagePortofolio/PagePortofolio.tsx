import React, { useEffect } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './PagePortofolio.css';

import portfolio1 from '../../images/Portfolio1.png';
import portfolio2 from '../../images/Portfolio2.png';
import portfolio3 from '../../images/Portfolio3.png';
import portfolio4 from '../../images/Portfolio4.png';
import portfolio5 from '../../images/Portfolio5.png';
import portfolio6 from '../../images/Portfolio6.png';
import portfolio7 from '../../images/Portfolio7.png';
import portfolio8 from '../../images/Portfolio8.png';
import portfolio9 from '../../images/Portfolio9.png';
import portfolio10 from '../../images/Portfolio10.png';
import portfolio11 from '../../images/Portfolio11.png';
import portfolio12 from '../../images/Portfolio12.png';
import portfolio13 from '../../images/Portfolio13.png';
import portfolio14 from '../../images/Portfolio14.png';
import portfolio15 from '../../images/Portfolio15.png';
import portfolio16 from '../../images/Portfolio16.png';

const responsiveSettings = {
  desktop1440: {
    breakpoint: { max: 3000, min: 1440 },
    items: 3,
    centerMode: true,
    centerSlidePercentage: 50,
    partialVisibilityGutter: 0,
  },
  desktop1080: {
    breakpoint: { max: 2000, min: 1000 },
    items: 3,
    centerMode: true,
    centerSlidePercentage: 50,
    partialVisibilityGutter: 0,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    centerMode: false,
  },
};

export default function PagePortofolio() {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const titles = document.querySelectorAll('.porfolio__title');
      titles.forEach((title) => {
        title.classList.add('active');
      });
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>
      <Header active="portfolio" />
      <div className="container">
        <div className="wrapper">
          <h1 className="porfolio__title">Portfolio</h1>
          <Carousel
            responsive={responsiveSettings}
            partialVisible={true}
            additionalTransfrom={0}
            arrows={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            centerMode={false}
            infinite={true}
            keyBoardControl={true}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable={false}
            className="portfolio__carousel"
          >
            <div className="pc__item">
              <img
                className="pc__img"
                src={portfolio1}
                alt="Portfolio 1"
                onClick={() => {
                  window.open(portfolio1, '_blank');
                }}
              />
              <p className="pc__title">City Scene</p>
              <p className="pc__desc">Map seen as a whole from above</p>
            </div>
            <div className="pc__item">
              <img
                className="pc__img"
                src={portfolio2}
                alt="Portfolio 2"
                onClick={() => {
                  window.open(portfolio2, '_blank');
                }}
              />
              <p className="pc__title">City Scene</p>
              <p className="pc__desc">
                For thesis defense VRPasgat project part 1
              </p>
            </div>
            <div className="pc__item">
              <img
                className="pc__img"
                src={portfolio3}
                alt="Portfolio 3"
                onClick={() => {
                  window.open(portfolio3, '_blank');
                }}
              />
              <p className="pc__title">City Scene</p>
              <p className="pc__desc">
                For thesis defense VRPasgat project part 2
              </p>
            </div>
            <div className="pc__item">
              <img
                className="pc__img"
                src={portfolio4}
                alt="Portfolio 4"
                onClick={() => {
                  window.open(
                    'https://drive.google.com/file/d/1J7Xv8_DTEt1opligqlRMCid2bd5Kx61N/view?usp=sharing',
                    '_blank'
                  );
                }}
              />
              <p className="pc__title">City Scene Video</p>
              <p className="pc__desc">There's fog and rain</p>
            </div>
            <div className="pc__item">
              <img
                className="pc__img"
                src={portfolio5}
                alt="Portfolio 5"
                onClick={() => {
                  window.open(portfolio5, '_blank');
                }}
              />
              <p className="pc__title">City Scene</p>
              <p className="pc__desc">
                For thesis defense VRPasgat project part 3
              </p>
            </div>
            <div className="pc__item">
              <img
                className="pc__img"
                src={portfolio6}
                alt="Portfolio 6"
                onClick={() => {
                  window.open(portfolio6, '_blank');
                }}
              />
              <p className="pc__title">Forest Scene</p>
              <p className="pc__desc">Landmine and Human</p>
            </div>
            <div className="pc__item">
              <img
                className="pc__img"
                src={portfolio7}
                alt="Portfolio 7"
                onClick={() => {
                  window.open(portfolio7, '_blank');
                }}
              />
              <p className="pc__title">Forest Scene</p>
              <p className="pc__desc">Hut and Rocks</p>
            </div>
            <div className="pc__item">
              <img
                className="pc__img"
                src={portfolio8}
                alt="Portfolio 8"
                onClick={() => {
                  window.open(portfolio8, '_blank');
                }}
              />
              <p className="pc__title">Forest Scene</p>
              <p className="pc__desc">Map seen as a whole from above</p>
            </div>
            <div className="pc__item">
              <img
                className="pc__img"
                src={portfolio9}
                alt="Portfolio 9"
                onClick={() => {
                  window.open(portfolio9, '_blank');
                }}
              />
              <p className="pc__title">Boi - Boian VR</p>
              <p className="pc__desc">Field, Crowd, & Flag</p>
            </div>
            <div className="pc__item">
              <img
                className="pc__img"
                src={portfolio10}
                alt="Portfolio 10"
                onClick={() => {
                  window.open(portfolio10, '_blank');
                }}
              />
              <p className="pc__title">Boi - Boian VR</p>
              <p className="pc__desc">Waruga and Borobudur Temple</p>
            </div>
            <div className="pc__item">
              <img
                className="pc__img"
                src={portfolio11}
                alt="Portfolio 11"
                onClick={() => {
                  window.open(portfolio11, '_blank');
                }}
              />
              <p className="pc__title">Boi - Boian VR</p>
              <p className="pc__desc">Crowds</p>
            </div>
            <div className="pc__item">
              <img
                className="pc__img"
                src={portfolio12}
                alt="Portfolio 12"
                onClick={() => {
                  window.open(portfolio12, '_blank');
                }}
              />
              <p className="pc__title">VR Interaction</p>
              <p className="pc__desc">Sulawesi Education & Techno Expo 2023</p>
            </div>
            <div className="pc__item">
              <img
                className="pc__img"
                src={portfolio13}
                alt="Portfolio 13"
                onClick={() => {
                  window.open(portfolio13, '_blank');
                }}
              />
              <p className="pc__title">VR Interaction</p>
              <p className="pc__desc">
                Sulawesi Education & Techno Expo 2023 Part 2
              </p>
            </div>
            <div className="pc__item">
              <img
                className="pc__img"
                src={portfolio14}
                alt="Portfolio 14"
                onClick={() => {
                  window.open(portfolio14, '_blank');
                }}
              />
              <p className="pc__title">Park</p>
              <p className="pc__desc">Draft for Futuristic Scene Part 1</p>
            </div>
            <div className="pc__item">
              <img
                className="pc__img"
                src={portfolio15}
                alt="Portfolio 15"
                onClick={() => {
                  window.open(portfolio15, '_blank');
                }}
              />
              <p className="pc__title">Park</p>
              <p className="pc__desc">Draft for Futuristic Scene Part 2</p>
            </div>
            <div className="pc__item">
              <img
                className="pc__img"
                src={portfolio16}
                alt="Portfolio 16"
                onClick={() => {
                  window.open(
                    'https://drive.google.com/file/d/17UIimZu1wIAj0jdEU5gnYEJ3XEvjJPz3/view?usp=sharing',
                    '_blank'
                  );
                }}
              />
              <p className="pc__title">Boi - Boian VR Presentation</p>
              <div className="pc__desc">
                <p className="pc__desc">
                  INVENTIA National Game Competition 2023
                </p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
      <Footer />
    </>
  );
}
