import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

import 'swiper/css/bundle';
import Role from '../Models/Role';
import { Card, Container } from 'react-bootstrap';


const CarouselTemplate: React.FC<{ roles: Role[] }> = ({ roles }) => {
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
                    <Card className="my-3 shadow">
                        <Card.Body>
                            <Card.Title className="mb-2 display-5 text-muted border-bottom pb-2 text-truncate">
                                {role?.ns.name}
                            </Card.Title>
                            <Card.Subtitle className="mb-4 fs-5 text-muted">
                                Server: {role.ns.server.name}
                            </Card.Subtitle>
                            <Card.Text className="mb-2" style={{ fontSize: '1.1rem', textTransform: 'uppercase' }}>
                                {role.value}
                            </Card.Text>
                            <Card.Text className="text-muted">
                                Last Updated: {role.ns.updateDttm?.toLocaleDateString()}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CarouselTemplate;
