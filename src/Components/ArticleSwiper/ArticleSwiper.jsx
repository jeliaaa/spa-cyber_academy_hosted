import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import './ArticleSwiper.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const ArticleSwiper = () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div className="swiper_container">
            <div className=' swiper_wrapper'>
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation={true}
                    pagination={{ type: 'bullets' }}
                    className="article_swiper"
                    slidesPerView={3}
                    spaceBetween={10}
                    slidesPerGroup={3}
                >
                    {arr.map((id) => {
                        return (
                            <SwiperSlide key={id}>
                                <img src="https://picsum.photos/400/400" alt="..." />
                                <div className="card_info">
                                    <p>BAR</p>
                                </div>

                            </SwiperSlide>
                        )

                    })}

                </Swiper>
            </div>
        </div>
    );
}

export default ArticleSwiper