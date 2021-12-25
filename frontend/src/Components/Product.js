import React, { useState } from 'react'
import Slider from "react-slick"
import {useRef,useEffect} from 'react'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import {Link, useNavigate, useParams} from 'react-router-dom'

import LoadingBox from './LoadingBox'
import MessageBox from './MessageBox'
import {useDispatch, useSelector} from 'react-redux'
import {FaCartPlus,FaAngleRight,FaAngleLeft,FaAngleDoubleRight } from 'react-icons/fa'

import '../css/Grid.css'
import '../css/Product.css'
import { detailsProducts, listProducts } from '../actions/ProductActions'
import { addToCart } from '../actions/CartActions'



function Product() {
    const sliderProductNews =useRef()
    const sliderProductMostViewer =useRef()
    const sliderProductMostSeller =useRef()

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      }
      const dispatch =useDispatch()
      const productList = useSelector((state) => state.productList)
      const {loading, error, products} = productList

    useEffect(() => {
        dispatch(listProducts());
    }, [])

    const handleAddToCart = (id) => {
        dispatch(addToCart(id))
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
                                {
                                    loading ? 
                                    <LoadingBox/>
                                    :error ? 
                                    <MessageBox variant='danger' >{error}</MessageBox>
                                    :
                                    products.map(product =>(
                                        <div className="product__item">
                                            <Link className="product__item-router" to={`/product/${product._id}`}>
                                                <div className="product__item-img">
                                                    <img src={product.image} alt="" />
                                                </div>
                                                <div className="product__item-text">
                                                    <h3 className="product__item-text-title">{product.name}</h3>
                                                    <h3 className="product__item-text-price">{product.price.toLocaleString()} đ</h3>
                                                </div>
                                            </Link>
                                            <div className="product__item-add">
                                                <button className="product__item-add-btn" onClick={()=>handleAddToCart(product._id)} >
                                                    <FaCartPlus/> Thêm vào giỏ
                                                </button>
                                            </div>
                                            <div className="product__item_corner_new">
                                                <span className="product__item_corner_new-text">Mới</span>
                                            </div>
                                        </div>
                                    ))
                                }
                                
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

                            {
                                loading ? 
                                    <LoadingBox/>
                                    :error ? 
                                    <MessageBox variant='danger' >{error}</MessageBox>
                                    :
                                    products.map(product =>(
                                        <div className="product__item">
                                            <Link className="product__item-router" to={`/product/${product._id}`}>
                                                <div className="product__item-img">
                                                    <img src={product.image} alt="" />
                                                </div>
                                                <div className="product__item-text">
                                                    <h3 className="product__item-text-title">{product.name}</h3>
                                                    <h3 className="product__item-text-price">{product.price.toLocaleString()} đ</h3>
                                                </div>
                                            </Link>
                                            <div className="product__item-add">
                                                <button className="product__item-add-btn">
                                                    <FaCartPlus/> Thêm vào giỏ
                                                </button>
                                            </div>
                                            <div className="product__item_corner_new">
                                                <span className="product__item_corner_new-text">Mới</span>
                                            </div>
                                        </div>
                                    ))
                                }
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
                                <button className="product__nav-btn product__nav-btn-prev" onClick={() => sliderProductMostSeller?.current?.slickPrev()}><FaAngleLeft className="product__nav-btn-icon"/></button>
                                <button className="product__nav-btn product__nav-btn-next" onClick={() => sliderProductMostSeller?.current?.slickNext()}><FaAngleRight className="product__nav-btn-icon"/></button>
                            </div>
                        </div>
                        <div className="product__item-slick">
                            <Slider ref={sliderProductMostSeller} {...settings}>
                            {
                                loading ? 
                                    <LoadingBox/>
                                    :error ? 
                                    <MessageBox variant='danger' >{error}</MessageBox>
                                    :
                                    products.map(product =>(
                                        <div className="product__item">
                                            <Link className="product__item-router" to={`/product/${product._id}`}>
                                                <div className="product__item-img">
                                                    <img src={product.image} alt="" />
                                                </div>
                                                <div className="product__item-text">
                                                    <h3 className="product__item-text-title">{product.name}</h3>
                                                    <h3 className="product__item-text-price">{product.price.toLocaleString()} đ</h3>
                                                </div>
                                            </Link>
                                            <div className="product__item-add">
                                                <button className="product__item-add-btn">
                                                    <FaCartPlus/> Thêm vào giỏ
                                                </button>
                                            </div>
                                            <div className="product__item_corner_new">
                                                <span className="product__item_corner_new-text">Mới</span>
                                            </div>
                                        </div>
                                    ))
                                }
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
