import React from 'react';
import '../../styles/style.scss';
import { gsap } from 'gsap/dist/gsap';
import { useGSAP } from '@gsap/react/dist';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// gsap.registerPlugin(useGSAP, ScrollTrigger);

// const MainPage = () => {
//   console.clear();

//   gsap.registerPlugin(ScrollTrigger);

//   window.addEventListener('load', () => {
//     gsap
//       .timeline({
//         scrollTrigger: {
//           trigger: '.wrapper',
//           start: 'top top',
//           end: '+=150%',
//           pin: true,
//           scrub: true,
//           markers: true,
//         },
//       })
//       .to('img', {
//         scale: 2,
//         z: 350,
//         transformOrigin: 'center center',
//         ease: 'power1.inOut',
//       })
//       .to(
//         '.section.hero',
//         {
//           scale: 1.1,
//           transformOrigin: 'center center',
//           ease: 'power1.inOut',
//         },
//         '<'
//       );
//   });

  return (
    <>
      <div class="mainContainer">
        <img class="img-spaceship" src="/static/spaceship.png" alt="image" />
        <div class="stars">
          <div class="stars1"></div>
          <div class="stars2"></div>
          <div class="stars3"></div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
