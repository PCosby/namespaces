import React from 'react';
import User from '../Models/User';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

import 'swiper/css/bundle';


const CarouselTemplate: React.FC<{users : (User | undefined)[]}> = ({ users }) => {
    return (
        <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={3}
            className="mySwiper"
            navigation 
        >
            {users.map((user, index) => (
                <SwiperSlide key={index}>
                    <div className="card-content">
                        {user?.name}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
// 
//         
//         modules={[Navigation]}
//         navigation
export default CarouselTemplate;
