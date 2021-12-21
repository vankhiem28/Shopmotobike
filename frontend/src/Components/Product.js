import React from 'react'
import Slider from "react-slick";
import {useRef} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaCheck,FaCartPlus,FaAngleRight,FaAngleLeft,FaAngleDoubleRight } from 'react-icons/fa'

import '../css/Grid.css'
import '../css/Product.css'

import pdnew1 from '../img/pdnew1.jpg'

function Product() {

    const sliderProductNews =useRef()
    const sliderProductMostViewer =useRef()

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,

      }
    return (
        <React.Fragment>
            <div className="product__container">
                <div className="grid wide">
                    <div className="product__news">
                        <div className="product__nav">
                            <div className="product__nav-title">
                                <h3 className="product__nav-title-text">Sản Phẩm Mới</h3>
                            </div>
                            <div className="product__nav-button">
                                <button className="product__nav-btn product__nav-btn-prev" onClick={() => sliderProductNews?.current?.slickPrev()}><FaAngleLeft className="product__nav-btn-icon"/></button>
                                <button className="product__nav-btn product__nav-btn-next" onClick={() => sliderProductNews?.current?.slickNext()}><FaAngleRight className="product__nav-btn-icon"/></button>
                            </div>
                        </div>
                    {/* <div className="row"> */}
                        {/* <div className="col l-2-4"> */}
                        <div className="product__item-slick">
                            <Slider ref={sliderProductNews} {...settings}>
                                <div className="product__item">
                                    <div className="product__item-img">
                                        <img src={pdnew1} alt="" />
                                    </div>
                                    <div className="product__item-text">
                                        <h3 className="product__item-text-title">Tay thắng Carbon cho Honda Sonic, MSX, CBR150</h3>
                                        <h3 className="product__item-text-price">300.000 đ</h3>
                                    </div>
                                    <div className="product__item-add">
                                        <button className="product__item-add-btn">
                                            <FaCartPlus/> Thêm vào giỏ
                                        </button>
                                    </div>
                                    <div className="product__item_corner_new">
                                        <span className="product__item_corner_new-text">Mới</span>
                                    </div>
                                </div>
                                <div className="product__item">
                                    <div className="product__item-img">
                                        <img src="https://shop2banh.vn/images/thumbs/2020/05/dia-nhom-probike-7075-a9-cho-exciter-42t-products-1242.jpg" alt="" />
                                    </div>
                                    <div className="product__item-text">
                                        <h3 className="product__item-text-title">Tay thắng Carbon cho Honda Sonic, MSX, CBR150</h3>
                                        <h3 className="product__item-text-price">300.000 đ</h3>
                                    </div>
                                    <div className="product__item-add">
                                        <button className="product__item-add-btn">
                                            <FaCartPlus/> Thêm vào giỏ
                                        </button>
                                    </div>
                                    <div className="product__item_corner_new">
                                        <span className="product__item_corner_new-text">Mới</span>
                                    </div>
                                </div>
                                <div className="product__item">
                                    <div className="product__item-img">
                                        <img src="https://shop2banh.vn/images/thumbs/2021/06/vo-dunlop-8090-16-d307-products-1530.jpg" alt="" />
                                    </div>
                                    <div className="product__item-text">
                                        <h3 className="product__item-text-title">Tay thắng Carbon cho Honda Sonic, MSX, CBR150</h3>
                                        <h3 className="product__item-text-price">300.000 đ</h3>
                                    </div>
                                    <div className="product__item-add">
                                        <button className="product__item-add-btn">
                                            <FaCartPlus/> Thêm vào giỏ
                                        </button>
                                    </div>
                                    <div className="product__item_corner_new">
                                        <span className="product__item_corner_new-text">Mới</span>
                                    </div>
                                </div>
                                <div className="product__item">
                                    <div className="product__item-img">
                                        <img src="https://shop2banh.vn/images/thumbs/2020/11/nhot-maxima-full-syn-10w40-products-1317.jpg" alt="" />
                                    </div>
                                    <div className="product__item-text">
                                        <h3 className="product__item-text-title">Tay thắng Carbon cho Honda Sonic, MSX, CBR150</h3>
                                        <h3 className="product__item-text-price">300.000 đ</h3>
                                    </div>
                                    <div className="product__item-add">
                                        <button className="product__item-add-btn">
                                            <FaCartPlus/> Thêm vào giỏ
                                        </button>
                                    </div>
                                    <div className="product__item_corner_new">
                                        <span className="product__item_corner_new-text">Mới</span>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                        <div className="product__button-view-all">
                            <button className="product__button-view-all-btn">
                                Xem Tất Cả <FaAngleDoubleRight className="product__button-view-all-btn-icon"/>
                            </button>
                        </div>
                        {/* </div> */}
                    {/* </div> */}
                    </div>
                    <div className="product__most-viewer">
                        <div className="product__nav">
                            <div className="product__nav-title">
                                <h3 className="product__nav-title-text">Sản Phẩm Phổ Biến</h3>
                            </div>
                            <div className="product__nav-button">
                                <button className="product__nav-btn product__nav-btn-prev" onClick={() => sliderProductMostViewer?.current?.slickPrev()}><FaAngleLeft className="product__nav-btn-icon"/></button>
                                <button className="product__nav-btn product__nav-btn-next" onClick={() => sliderProductMostViewer?.current?.slickNext()}><FaAngleRight className="product__nav-btn-icon"/></button>
                            </div>
                        </div>
                        <div className="product__item-slick">
                            <Slider ref={sliderProductMostViewer} {...settings}>
                                <div className="product__item">
                                    <div className="product__item-img">
                                        <img src={pdnew1} alt="" />
                                    </div>
                                    <div className="product__item-text">
                                        <h3 className="product__item-text-title">Tay thắng Carbon cho Honda Sonic, MSX, CBR150</h3>
                                        <h3 className="product__item-text-price">300.000 đ</h3>
                                    </div>
                                    <div className="product__item-add">
                                        <button className="product__item-add-btn">
                                            <FaCartPlus/> Thêm vào giỏ
                                        </button>
                                    </div>
                                    <div className="product__item_corner_new">
                                        <span className="product__item_corner_new-text">Mới</span>
                                    </div>
                                </div>
                                <div className="product__item">
                                    <div className="product__item-img">
                                        <img src="https://shop2banh.vn/images/thumbs/2020/05/dia-nhom-probike-7075-a9-cho-exciter-42t-products-1242.jpg" alt="" />
                                    </div>
                                    <div className="product__item-text">
                                        <h3 className="product__item-text-title">Tay thắng Carbon cho Honda Sonic, MSX, CBR150</h3>
                                        <h3 className="product__item-text-price">300.000 đ</h3>
                                    </div>
                                    <div className="product__item-add">
                                        <button className="product__item-add-btn">
                                            <FaCartPlus/> Thêm vào giỏ
                                        </button>
                                    </div>
                                    <div className="product__item_corner_new">
                                        <span className="product__item_corner_new-text">Mới</span>
                                    </div>
                                </div>
                                <div className="product__item">
                                    <div className="product__item-img">
                                        <img src="https://shop2banh.vn/images/thumbs/2021/06/vo-dunlop-8090-16-d307-products-1530.jpg" alt="" />
                                    </div>
                                    <div className="product__item-text">
                                        <h3 className="product__item-text-title">Tay thắng Carbon cho Honda Sonic, MSX, CBR150</h3>
                                        <h3 className="product__item-text-price">300.000 đ</h3>
                                    </div>
                                    <div className="product__item-add">
                                        <button className="product__item-add-btn">
                                            <FaCartPlus/> Thêm vào giỏ
                                        </button>
                                    </div>
                                    <div className="product__item_corner_new">
                                        <span className="product__item_corner_new-text">Mới</span>
                                    </div>
                                </div>
                                <div className="product__item">
                                    <div className="product__item-img">
                                        <img src="https://shop2banh.vn/images/thumbs/2020/11/nhot-maxima-full-syn-10w40-products-1317.jpg" alt="" />
                                    </div>
                                    <div className="product__item-text">
                                        <h3 className="product__item-text-title">Tay thắng Carbon cho Honda Sonic, MSX, CBR150</h3>
                                        <h3 className="product__item-text-price">300.000 đ</h3>
                                    </div>
                                    <div className="product__item-add">
                                        <button className="product__item-add-btn">
                                            <FaCartPlus/> Thêm vào giỏ
                                        </button>
                                    </div>
                                    <div className="product__item_corner_new">
                                        <span className="product__item_corner_new-text">Mới</span>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                        <div className="product__button-view-all">
                            <button className="product__button-view-all-btn">
                                Xem Tất Cả <FaAngleDoubleRight className="product__button-view-all-btn-icon"/>
                            </button>
                        </div>
                    </div>
                    <div className="product__banner">
                        <div className="row gutters-small">
                            {/* <div className="product__banner-contain"> */}
                                <div className="col gutters-small l-4">
                                    <div className="product__banner-contain-item-left">
                                        {/* <img src="https://shop2banh.vn/images/2-251021-675x370.jpg" alt="" className="product__banner-contain-item-img" /> */}
                                        <button className="product__banner-contain-item-text">
                                            Mua Ngay
                                        </button>
                                            <div className="product__banner-contain-item-overlay">
                                            </div>
                                    </div>
                                </div>
                                <div className="col gutters-small l-4">
                                    <div className="product__banner-contain-item-center">
                                        {/* <img src="https://shop2banh.vn/images/141021-675x370.jpg" alt="" className="product__banner-contain-item-img" /> */}
                                        <button className="product__banner-contain-item-text">
                                            Mua Ngay
                                        </button>
                                            <div className="product__banner-contain-item-overlay">
                                            </div>
                                    </div>
                                </div>
                                <div className="col gutters-small l-4">
                                    <div className="product__banner-contain-item-right">
                                        {/* <img src="https://shop2banh.vn/images/261021-675x370.jpg" alt="" className="product__banner-contain-item-img" /> */}
                                        <button className="product__banner-contain-item-text">
                                            Mua Ngay
                                        </button>
                                            <div className="product__banner-contain-item-overlay">
                                            </div>
                                    </div>
                                </div>
                            {/* </div> */}
                        </div>
                    </div>
                    <div className="product__best-seller">
                        <div className="product__nav">
                            <div className="product__nav-title">
                                <h3 className="product__nav-title-text">Sản Phẩm Bán Chạy</h3>
                            </div>
                            <div className="product__nav-button">
                                <button className="product__nav-btn product__nav-btn-prev" onClick={() => sliderProductMostViewer?.current?.slickPrev()}><FaAngleLeft className="product__nav-btn-icon"/></button>
                                <button className="product__nav-btn product__nav-btn-next" onClick={() => sliderProductMostViewer?.current?.slickNext()}><FaAngleRight className="product__nav-btn-icon"/></button>
                            </div>
                        </div>
                        <div className="product__item-slick">
                            <Slider ref={sliderProductMostViewer} {...settings}>
                                <div className="product__item">
                                    <div className="product__item-img">
                                        <img src={pdnew1} alt="" />
                                    </div>
                                    <div className="product__item-text">
                                        <h3 className="product__item-text-title">Tay thắng Carbon cho Honda Sonic, MSX, CBR150</h3>
                                        <h3 className="product__item-text-price">300.000 đ</h3>
                                    </div>
                                    <div className="product__item-add">
                                        <button className="product__item-add-btn">
                                            <FaCartPlus/> Thêm vào giỏ
                                        </button>
                                    </div>
                                    <div className="product__item_corner_new">
                                        <span className="product__item_corner_new-text">Mới</span>
                                    </div>
                                </div>
                                <div className="product__item">
                                    <div className="product__item-img">
                                        <img src="https://shop2banh.vn/images/thumbs/2020/05/dia-nhom-probike-7075-a9-cho-exciter-42t-products-1242.jpg" alt="" />
                                    </div>
                                    <div className="product__item-text">
                                        <h3 className="product__item-text-title">Tay thắng Carbon cho Honda Sonic, MSX, CBR150</h3>
                                        <h3 className="product__item-text-price">300.000 đ</h3>
                                    </div>
                                    <div className="product__item-add">
                                        <button className="product__item-add-btn">
                                            <FaCartPlus/> Thêm vào giỏ
                                        </button>
                                    </div>
                                    <div className="product__item_corner_new">
                                        <span className="product__item_corner_new-text">Mới</span>
                                    </div>
                                </div>
                                <div className="product__item">
                                    <div className="product__item-img">
                                        <img src="https://shop2banh.vn/images/thumbs/2021/06/vo-dunlop-8090-16-d307-products-1530.jpg" alt="" />
                                    </div>
                                    <div className="product__item-text">
                                        <h3 className="product__item-text-title">Tay thắng Carbon cho Honda Sonic, MSX, CBR150</h3>
                                        <h3 className="product__item-text-price">300.000 đ</h3>
                                    </div>
                                    <div className="product__item-add">
                                        <button className="product__item-add-btn">
                                            <FaCartPlus/> Thêm vào giỏ
                                        </button>
                                    </div>
                                    <div className="product__item_corner_new">
                                        <span className="product__item_corner_new-text">Mới</span>
                                    </div>
                                </div>
                                <div className="product__item">
                                    <div className="product__item-img">
                                        <img src="https://shop2banh.vn/images/thumbs/2020/11/nhot-maxima-full-syn-10w40-products-1317.jpg" alt="" />
                                    </div>
                                    <div className="product__item-text">
                                        <h3 className="product__item-text-title">Tay thắng Carbon cho Honda Sonic, MSX, CBR150</h3>
                                        <h3 className="product__item-text-price">300.000 đ</h3>
                                    </div>
                                    <div className="product__item-add">
                                        <button className="product__item-add-btn">
                                            <FaCartPlus/> Thêm vào giỏ
                                        </button>
                                    </div>
                                    <div className="product__item_corner_new">
                                        <span className="product__item_corner_new-text">Mới</span>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                        <div className="product__button-view-all">
                            <button className="product__button-view-all-btn">
                                Xem Tất Cả <FaAngleDoubleRight className="product__button-view-all-btn-icon"/>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default Product
