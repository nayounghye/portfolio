import React from 'react';
import '../../styles/style.scss';

const MainPage = () => {
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
