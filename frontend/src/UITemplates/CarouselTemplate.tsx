import React from 'react';
import User from '../Models/User';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

import 'swiper/css/bundle';
import Role from '../Models/Role';


const CarouselTemplate: React.FC<{roles : Role[]}> = ({ roles }) => {
    return (
        <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={3}
            className="mySwiper"
            navigation 
        >
            {roles.map((role, index) => (
                <SwiperSlide key={index}>
                    <div className="card-content">
                        <h4>{role?.ns.name}</h4> <br/>
                        <h4>Server: {role.ns.server.name}</h4>
                        <h4>{role.value}</h4>
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
