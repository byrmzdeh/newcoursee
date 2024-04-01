import React from 'react'
import './style.scss'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';


const Extra = () => {
  return (
    <div className='extra'>

      <div className="best">
        <h2 >BEST PRICES</h2>
        <h1 >Extra Services</h1>
        <p>The best prices for your relaxing vacation. The utanislen quam nestibulum ac quame odion elementum sceisue the aucan.</p>
        <p>Orci varius natoque penatibus et magnis disney parturient monte nascete ridiculus mus nellen etesque habitant morbine.</p>
        <div className='number'>
          <i className='fa-solid fa-phone'></i>
          <div className="reser">
            <h3>RESERVATION</h3>
            <p>855 100 444</p>
          </div>
        </div>
      </div>

      <div className="swiper">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className='photo'>Slide 1</SwiperSlide>
          <SwiperSlide className='photo'>Slide 2</SwiperSlide>

        </Swiper>
      </div>
    </div>


  )
}

export default Extra
