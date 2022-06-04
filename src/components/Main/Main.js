import React from 'react';
import Promo from './Promo/Promo'
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';

function Main() {
    return (
        // <h1>'Это Main'</h1>
        <section className='main'>
          <Promo></Promo>
           <AboutProject></AboutProject>
            <Techs></Techs>
           <AboutMe></AboutMe>
          <Portfolio></Portfolio>
        </section>
      );
}

export default Main;