import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

import 'swiper/css/bundle';
import Role, { roleToColor } from '../Models/Role';
import { Card, Col, Container, Row } from 'react-bootstrap';




const CarouselTemplate: React.FC<{ roles: Role[] }> = ({ roles }) => {
    return (
        <Swiper
            modules={[Navigation]}
            spaceBetween={-35}
            slidesPerView={3}
            className="py-3"
            navigation
        >
            {roles.map((role, index) => (
                <SwiperSlide key={index} className='card-content'>
                    <Card className="my-3 shadow"  style={{ height: '260px' }}>
                        <Card.Body>
                            <Row className="align-items-center border-bottom pb-2 mb-2">
                                <Col xs={8}>
                                    <Card.Title className="display-5 text-muted text-truncate">
                                        {role?.ns.name}
                                    </Card.Title>
                                </Col>
                                <Col className="text-end" xs={4}>
                                    <span className={`badge px-1 fs-6 ${roleToColor(role.value)}`}>
                                        {role.value}
                                    </span>
                                </Col>
                            </Row>
                            <Card.Subtitle className="mb-2 fs-5 text-muted">
                                Server: {role.ns.server.name}
                            </Card.Subtitle>
                            <Card.Text className="text-muted mb-4">
                                Last Updated: {role.ns.updateDttm?.toLocaleDateString()}
                            </Card.Text>
                            <Card.Text className="text-muted overflow-hidden fst-italic" style={{ maxHeight: '4.4em' }}>
                                {role.ns.desc || 'No note available'}
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CarouselTemplate;
