import React, { useEffect, useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

//aos
import AOS from 'aos';
import 'aos/dist/aos.css';

import './style.scss'



const Slider = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <Swiper
            direction={'vertical'}
            pagination={{
                clickable: true,
            }}
            slidesPerView={'auto'}
            spaceBetween={30}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide className='photo'>
                <img src="https://us.123rf.com/450wm/dotshock/dotshock1609/dotshock160900042/121643402-it-students-on-workshop-listening-presentation-and-taking-notes-on-laptop-computer.jpg?ver=6" alt="" />
                <div className="write">
                    <div className="icon" >
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <h1 >Təhsil, fərdlərin şəxsi və peşəkar inkişafında əsas bir elementdir. <br /> Ancaq, düzgün mənbələrə giriş və düzgün məlumat <br /> tapmaq zaman zaman çətin ola bilər.  <br />
                    </h1>
                </div>
                <div className='number'>
                    <div className='phone'><i className='fa-solid fa-phone'></i></div>
                    <div className="reser">
                        <h3>Əlaqə nömrəsi</h3>
                        <p>855 100 444</p>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide className='photo'>
                <img src="https://media.istockphoto.com/id/1463404970/photo/high-school-students-e-learning-over-computers-in-the-classroom.jpg?b=1&s=612x612&w=0&k=20&c=z6ijkmbDGUQ_X-SwYnVrLjXiiUqSpX0HpZZwvCcILAU=" alt="" />
                <div className="write">
                    <div className="icon" >
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <h1 > Buna sebeb olaraq da bele bir qerara geldik ki , tələbələrin <br /> və öz üzərində işləmək isdəyən hər kəs üçün belə <br /> bir platforma yaradaq .  </h1>
                </div>
                <div className='number'>
                    <div className='phone'><i className='fa-solid fa-phone'></i></div>
                    <div className="reser">
                        <h3>Əlaqə nömrəsi</h3>
                        <p>855 100 444</p>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide className='photo'>
                <img src="https://securityintelligence.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/12/Stock-exchange-market-concept-business-team-trader-looking-on-tablet-and-laptop-with-graphs-analysis-candle-line-in-office-room-diagrams-on-screen.-630x330.jpeg.webp" alt="" />
                <div className="write">
                    <div className="icon" >
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <h1 >Komputer kurslarının məqsədi, tələbələrə kompüter elmi <br /> və texnologiyasında əsas və inkişaf etmiş səviyyədə <br /> bacarıqlar verməkdir.</h1>
                </div>
                <div className='number'>
                    <div className='phone'><i className='fa-solid fa-phone'></i></div>
                    <div className="reser">
                        <h3>Əlaqə nömrəsi</h3>
                        <p>855 100 444</p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Slider
