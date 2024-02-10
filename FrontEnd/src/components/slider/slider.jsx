import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation,Autoplay, Pagination} from 'swiper/modules';
function Slider({custom1, custom2, custom3, custom4,}) {
  return (
    <React.Fragment>
       <Swiper navigation={false}  className="h-full w-full" 
        pagination={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay,Pagination,Navigation]}
        >
        <SwiperSlide className={custom1}></SwiperSlide>
        <SwiperSlide className={custom2}></SwiperSlide>
        <SwiperSlide className={custom3}></SwiperSlide>
        <SwiperSlide className={custom4}></SwiperSlide>
        
      </Swiper>
    </React.Fragment>
  )
}

export  {Slider}