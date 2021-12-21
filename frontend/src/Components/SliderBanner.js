import React from 'react'
import Slider  from "react-slick";
import {useRef} from 'react';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaCheck,FaCartPlus,FaAngleRight,FaAngleLeft,FaAngleDoubleRight } from 'react-icons/fa'

import {dataSlider} from '../data'

import '../css/Grid.css'
import '../css/SliderBanner.css'


function SliderBanner() {

    const sliderBanner= useRef()

    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      }
    return (
        <React.Fragment>
          <div className="Slider__banner-container">
            <div className="grid wide Slider__banner-wide " >
                <div className="slider__banner-button">
                    <button className="slider__banner-btn slider__banner-btn-prev" onClick={() => sliderBanner?.current?.slickPrev()}><FaAngleLeft className="slider__banner-btn-icon"/></button>
                    <button className="slider__banner-btn slider__banner-btn-next" onClick={() => sliderBanner?.current?.slickNext()}><FaAngleRight className="slider__banner-btn-icon"/></button>
                </div>
                <div className="Slider__banner-slick">
                <Slider ref={sliderBanner} {...settings}>
                    <div className="Slider__banner__flash">
                        <img className="Slider__banner-img Slider__banner-img-L" src="https://img.webike.net/gcm/vn/shopping/banners/weekly_sale/20211119_sale_1280x345.jpg" alt="" />
                    </div>
                    <div className="Slider__banner__flash">
                        <img className="Slider__banner-img Slider__banner-img-L" src="https://img.webike.net/gcm/vn/shopping/banners/weekly_sale/20211001_OEM_pointback_1288x345.jpg" alt="" />
                    </div>
                    <div className="Slider__banner__flash">
                        <img className="Slider__banner-img Slider__banner-img-L" src="https://img.webike.net/gcm/vn/shopping/banners/weekly_sale/20211201_gl_christmas_sale_1280x345.jpg" alt="" />
                    </div>
                </Slider>
                </div>
            </div>
          </div>  
        </React.Fragment>
    )
}

export default SliderBanner
