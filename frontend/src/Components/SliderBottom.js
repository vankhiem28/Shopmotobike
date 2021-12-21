import React from 'react'
import Slider from "react-slick";
import {useRef} from 'react';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import '../css/Grid.css'
import '../css/SliderBottom.css'
function SliderBottom() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true
      }
    return (
        <React.Fragment>
            <div className="slider__bottom-container">
                <div className="grid wide">
                    <div className="slider__bottom-title">
                        <h3 className="slider__bottom-text">Thương Hiệu</h3>
                    </div>
                    <div className="slider__bottom-slick">
                            <Slider {...settings}>
                                <div className="slider__bottom">
                                    <div className="slider__bottom-image">
                                        <img className="slider__bottom-img" src="https://shop2banh.vn/images/thumbs/partners/michelin-7.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="slider__bottom">
                                    <div className="slider__bottom-image">
                                        <img className="slider__bottom-img" src="https://shop2banh.vn/images/thumbs/partners/ohlins-11.png" alt="" />
                                    </div>
                                </div>
                                <div className="slider__bottom">
                                    <div className="slider__bottom-image">
                                        <img className="slider__bottom-img" src="https://shop2banh.vn/images/thumbs/partners/drpulley-1.png" alt="" />
                                    </div>
                                </div>
                                <div className="slider__bottom">
                                    <div className="slider__bottom-image">
                                        <img className="slider__bottom-img" src="https://shop2banh.vn/images/thumbs/partners/pirelli-20.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="slider__bottom">
                                    <div className="slider__bottom-image">
                                        <img className="slider__bottom-img" src="https://shop2banh.vn/images/thumbs/partners/maxxis-4.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="slider__bottom">
                                    <div className="slider__bottom-image">
                                        <img className="slider__bottom-img" src="https://shop2banh.vn/images/thumbs/partners/givi-14.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="slider__bottom">
                                    <div className="slider__bottom-image">
                                        <img className="slider__bottom-img" src="https://shop2banh.vn/images/thumbs/partners/salaya-10.jpg" alt="" />
                                    </div>
                                </div>
                            </Slider>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SliderBottom
