import React from 'react';
import Compare from '../ReusableComponents/CompareElem/Compare'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './SuitesAndRooms.scss';
import SeviceProds from '../ReusableComponents/ServicesProducts/SeviceProds';
import { Navigation, Pagination } from 'swiper/modules';
import { useEffect } from 'react';


const SuitesAndRooms = () => {
  const SuitesSwiperSlides = [0, 1, 2, 3, 4];
  var Scroll = require('react-scroll');
  var scroll = Scroll.animateScroll;
  useEffect(()=>{
    scroll.scrollToTop();
  }, [])
  return (
    <div className='suites_container'>
      <Swiper navigation={true} pagination={{ type: 'bullets', clickable: true }} modules={[Navigation, Pagination]} className="suites_swiper" slidesPerView={1}>
        {SuitesSwiperSlides.map((id) => {
          return (<SwiperSlide key={id}><img src="https://www.the-berkeley.co.uk/siteassets/rooms-and-suites/suites-1.jpg?w=1420" alt="..." /></SwiperSlide>)
        })}
      </Swiper>

      <div className="suites_wrapper">
        <div className="suites_article">
          <h1>rooms and suites</h1>
          <p>
            We’d love to surprise you, but there’s so much about our luxury rooms
            and suites we just have to share. From the bold, innovative design and
            Italian marble bathrooms, to individually selected artworks and ‘touch me’
            fabrics, The Berkeley is the epitome of modern luxury. There’s even more to
            look forward to in our signature suites. Champagne welcomes, fresh flowers and…
            Well, you’ll have to wait and see. Whichever room or suite you choose, you can
            count on your stay in Knightsbridge to be one you’ll want to last forever.
          </p>
        </div>
        <Compare />
        <SeviceProds />
        <Compare />
      </div>
    </div>
  )
}

export default SuitesAndRooms