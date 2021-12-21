import React from 'react'
import { useState } from 'react'
import Slider  from "react-slick"

import Header from '../Components/Header'
import SliderBottom from '../Components/SliderBottom'
import Footer from '../Components/Footer'

import {FaCartPlus,FaCreativeCommonsSa,FaTruck,FaRegCheckCircle,FaCheckCircle} from 'react-icons/fa'

import '../css/Grid.css'
import '../css/ProductDetail.css'

function ProductDetail() {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    return (
        <React.Fragment>
            <Header/>
            <div className="productsdetail__container">
                <div className="grid wide">
                    <div className="row productsdetail__contain">
                        <div className="col l-5">
                            <div className="productsdetail__image">
                                <div className="productsdetail__image-slick-big">
                                    <Slider asNavFor={nav2} ref={(slider1)=>(setNav1(slider1))} >
                                        <div className="productsdetail__image-slick-img">
                                            <img src="https://shop2banh.vn/images/thumbs/2021/01/dia-kingspeed-245mm-4-lo-cho-exciter150-1427-slide-products-5ff425fb0ede4.jpg" alt="" />
                                        </div>
                                        <div className="productsdetail__image-slick-img">
                                            <img src="https://shop2banh.vn/images/thumbs/2021/01/dia-kingspeed-245mm-4-lo-cho-exciter150-1427-slide-products-5ff425fa9c99d.jpg" alt="" />
                                        </div>
                                        <div className="productsdetail__image-slick-img">
                                            <img src="https://shop2banh.vn/images/thumbs/2021/01/dia-kingspeed-245mm-4-lo-cho-exciter150-1427-slide-products-5ff425fac113a.jpg" alt="" />
                                        </div>
                                    </Slider>
                                </div>
                                <div className="productsdetail__image-slick-small">
                                    <Slider
                                        asNavFor={nav1}
                                        ref={(slider2) => setNav2(slider2)}
                                        slidesToShow={3}
                                        swipeToSlide={true}
                                        focusOnSelect={true}
                                        >
                                        <div className="productsdetail__image-slick-img">
                                            <img src="https://shop2banh.vn/images/thumbs/2021/01/dia-kingspeed-245mm-4-lo-cho-exciter150-1427-slide-products-5ff425fb0ede4.jpg" alt="" />
                                        </div>
                                        <div className="productsdetail__image-slick-img">
                                            <img src="https://shop2banh.vn/images/thumbs/2021/01/dia-kingspeed-245mm-4-lo-cho-exciter150-1427-slide-products-5ff425fa9c99d.jpg" alt="" />
                                        </div>
                                        <div className="productsdetail__image-slick-img">
                                            <img src="https://shop2banh.vn/images/thumbs/2021/01/dia-kingspeed-245mm-4-lo-cho-exciter150-1427-slide-products-5ff425fac113a.jpg" alt="" />
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                        <div className="col l-7">
                            <div className="productsdetail__box-right">
                                <div className="productsdetail__box-title">
                                    <h3 className="productsdetail__box-title-text">
                                        Đĩa KingSpeed 245mm (4 lỗ mâm độ) cho Exciter 150
                                    </h3>
                                </div>
                                <div className="productsdetail__box-evaluate">
                                    <p className="productsdetail__box-evaluate-text">
                                        Chưa Có Đánh Giá
                                    </p>
                                </div>
                                <div className="productsdetail__box-price">
                                    <p className="productsdetail__box-price-text">
                                        500.000đ
                                    </p>
                                    <div className="productsdetail__box-price-status">
                                        <FaCheckCircle className="productsdetail__box-price-status-icon"/>
                                        <p className="productsdetail__box-price-status-text">
                                            Còn Hàng
                                        </p>
                                    </div>
                                </div>
                                <div className="productsdetail__box-quantily">
                                    <p className="productsdetail__box-quantily-text">
                                        Số Lượng
                                    </p>
                                    <div className="productsdetail__box-quantily-contain">
                                        <button className="productsdetail__box-quantily-btn">
                                            -
                                        </button>
                                        <input type="text" className="productsdetail__box-quantily-input" value={1} />
                                        <button className="productsdetail__box-quantily-btn">
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className="productsdetail__box-button">
                                    <button className="productsdetail__box-button-btn">
                                       <FaCartPlus/> Thêm Vào Giỏ Hàng
                                    </button>
                                    <button className="productsdetail__box-button-btn">
                                        Mua Ngay
                                    </button>
                                </div>
                                <div className="productsdetail__box-bottom">
                                    <p className="productsdetail__box-bottom-title">
                                        <FaCreativeCommonsSa className='productsdetail__box-bottom-title-icon' />
                                        7 ngày miễn phí trả hàng
                                        </p>
                                    <p className="productsdetail__box-bottom-title">
                                        <FaTruck className='productsdetail__box-bottom-title-icon' />
                                        Hàng chính hãng 100%
                                        </p>
                                    <p className="productsdetail__box-bottom-title">
                                        <FaRegCheckCircle   className='productsdetail__box-bottom-title-icon' />
                                        Miễn phí vận chuyển
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row productsdetail__info-app">
                            <div className="col l-9">
                                <div className="productsdetail__info-contain">
                                    <div className="productsdetail__info-title">
                                        <h3 className="productsdetail__info-title-text">
                                            Thông Tin Chi Tiết
                                        </h3>
                                    </div>
                                    <div className="productsdetail__info-description">
                                        <p className="productsdetail__info-description-text">
                                            Đĩa KingSpeed thương hiệu mới đang hot trên thị trường với thiết kế rất đẹp, độc tuy nhiên giá thành lại khá hợp lí.
                                            Đĩa KingSpeed 245mm 4 lỗ cho Exciter 150 đi mâm độ có 4 lỗ bắt đĩa như mâm RCB, mâm X1R...
                                        </p>
                                    </div>
                                    <div className="productsdetail__info-image">
                                        <img src="https://shop2banh.vn/images/thumbs/2021/01/dia-kingspeed-245mm-4-lo-cho-exciter150-1427-slide-products-5ff425fb0ede4.jpg" alt="" className="productsdetail__info-image-img" />
                                    </div>
                                </div>
                            </div>
                            <div className="col l-3">
                                <div className="productsdetail__info-involve">
                                    <div className="productsdetail__info-involve-title">
                                        <h3 className="productsdetail__info-involve-title-text">
                                            Sản Phẩm Liên Quan
                                        </h3>
                                    </div>
                                    <a href="" className="productsdetail__info-involve-link">
                                        <div className="productsdetail__info-involve-box">
                                            <img src="https://shop2banh.vn/images/thumbs/2017/03/dia-thang-racing-boy-chinh-hang-truoc-cho-exciter-150-535-slide-products-58d3a2cc30f32.jpg" alt="" className="productsdetail__info-involve-img" />
                                            <div className="productsdetail__info-involve-text">
                                                <p className="productsdetail__info-involve-text-name">
                                                    Đĩa thắng RCB (chính hãng) trước cho Exciter 150
                                                </p>
                                                <p className="productsdetail__info-involve-text-price">
                                                    400.000đ
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="" className="productsdetail__info-involve-link">
                                        <div className="productsdetail__info-involve-box">
                                            <img src="https://shop2banh.vn/images/thumbs/2017/03/dia-thang-racing-boy-chinh-hang-truoc-cho-exciter-150-535-slide-products-58d3a2cc30f32.jpg" alt="" className="productsdetail__info-involve-img" />
                                            <div className="productsdetail__info-involve-text">
                                                <p className="productsdetail__info-involve-text-name">
                                                    Đĩa thắng RCB (chính hãng) trước cho Exciter 150
                                                </p>
                                                <p className="productsdetail__info-involve-text-price">
                                                    400.000đ
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="" className="productsdetail__info-involve-link">
                                        <div className="productsdetail__info-involve-box">
                                            <img src="https://shop2banh.vn/images/thumbs/2017/03/dia-thang-racing-boy-chinh-hang-truoc-cho-exciter-150-535-slide-products-58d3a2cc30f32.jpg" alt="" className="productsdetail__info-involve-img" />
                                            <div className="productsdetail__info-involve-text">
                                                <p className="productsdetail__info-involve-text-name">
                                                    Đĩa thắng RCB (chính hãng) trước cho Exciter 150
                                                </p>
                                                <p className="productsdetail__info-involve-text-price">
                                                    400.000đ
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="" className="productsdetail__info-involve-link">
                                        <div className="productsdetail__info-involve-box">
                                            <img src="https://shop2banh.vn/images/thumbs/2017/03/dia-thang-racing-boy-chinh-hang-truoc-cho-exciter-150-535-slide-products-58d3a2cc30f32.jpg" alt="" className="productsdetail__info-involve-img" />
                                            <div className="productsdetail__info-involve-text">
                                                <p className="productsdetail__info-involve-text-name">
                                                    Đĩa thắng RCB (chính hãng) trước cho Exciter 150
                                                </p>
                                                <p className="productsdetail__info-involve-text-price">
                                                    400.000đ
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="" className="productsdetail__info-involve-link">
                                        <div className="productsdetail__info-involve-box">
                                            <img src="https://shop2banh.vn/images/thumbs/2017/03/dia-thang-racing-boy-chinh-hang-truoc-cho-exciter-150-535-slide-products-58d3a2cc30f32.jpg" alt="" className="productsdetail__info-involve-img" />
                                            <div className="productsdetail__info-involve-text">
                                                <p className="productsdetail__info-involve-text-name">
                                                    Đĩa thắng RCB (chính hãng) trước cho Exciter 150
                                                </p>
                                                <p className="productsdetail__info-involve-text-price">
                                                    400.000đ
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                <SliderBottom/>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default ProductDetail
