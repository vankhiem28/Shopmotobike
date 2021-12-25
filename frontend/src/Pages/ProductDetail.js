import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams,useNavigate} from 'react-router-dom'
import Slider  from "react-slick"

import Header from '../Components/Header'
import SliderBottom from '../Components/SliderBottom'
import Footer from '../Components/Footer'

import {FaCartPlus,FaCreativeCommonsSa,FaTruck,FaRegCheckCircle,FaCheckCircle} from 'react-icons/fa'

import '../css/Grid.css'
import '../css/ProductDetail.css'

import { useDispatch, useSelector } from 'react-redux'
import LoadingBox from '../Components/LoadingBox'
import MessageBox from '../Components/MessageBox'
import { detailsProducts } from '../actions/ProductActions'
import { addToCart } from '../actions/CartActions'

function ProductDetail(props) {
    const [nav1, setNav1] = useState()
    const [nav2, setNav2] = useState()
    const [quantily,setQuantity] = useState(1);
    const {id} = useParams()
    const navigate = useNavigate()
    const productId =(id)


    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const {loading,error,product} = productDetails
    
    console.log(productId);

    useEffect(()=> {
        dispatch(detailsProducts(productId))
    },[dispatch, productId])

    const handleQuantityUp = () => {
        setQuantity((prev) => (Number(prev) + 1))
    }

    const handleQuantityDown = () => {
        quantily <= 0 ? setQuantity(0) : setQuantity(quantily -1)
    }

    const handleAddToCart = (id) => {
        dispatch(addToCart(id,quantily))
    }

    const handleBuyNow = () => {
        navigate(`/cart/${productId}?qty=${quantily}`)
    }

    return (
        <React.Fragment>
            <Header/>

            <div className="productsdetail__container">
                <div className="grid wide">
                    {
                        loading ? 
                            <LoadingBox/>
                        :error ? 
                            <MessageBox variant='danger'>{error}</MessageBox>
                        :
                    <div className="row productsdetail__contain">
                        <div className="col l-5">
                            <div className="productsdetail__image">
                                <div className="productsdetail__image-slick-big">
                                    <Slider asNavFor={nav2} ref={(slider1)=>(setNav1(slider1))} >
                                        <div className="productsdetail__image-slick-img">
                                            <img src={product.image_left} alt="" />
                                        </div>
                                        <div className="productsdetail__image-slick-img">
                                            <img src={product.image_bottom} alt="" />
                                        </div>
                                        <div className="productsdetail__image-slick-img">
                                            <img src={product.image_right} alt="" />
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
                                            <img src={product.image_left} alt="" />
                                        </div>
                                        <div className="productsdetail__image-slick-img">
                                            <img src={product.image_bottom} alt="" />
                                        </div>
                                        <div className="productsdetail__image-slick-img">
                                            <img src={product.image_right} alt="" />
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                        <div className="col l-7">
                            <div className="productsdetail__box-right">
                                <div className="productsdetail__box-title">
                                    <h3 className="productsdetail__box-title-text">
                                        {product.name}
                                    </h3>
                                </div>
                                <div className="productsdetail__box-evaluate">
                                    <p className="productsdetail__box-evaluate-text">
                                        Chưa Có Đánh Giá
                                    </p>
                                </div>
                                <div className="productsdetail__box-price">
                                    <p className="productsdetail__box-price-text">
                                        {product.price.toLocaleString()}đ
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
                                        <button onClick={handleQuantityDown} className="productsdetail__box-quantily-btn">
                                            -
                                        </button>
                                        <input onChange={(e)=>setQuantity(Number(e.target.value))} type="text" className="productsdetail__box-quantily-input" value={quantily} />
                                        <button onClick={handleQuantityUp} className="productsdetail__box-quantily-btn">
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className="productsdetail__box-button">
                                    {product.countInStock > 0 && (

                                        <button className="productsdetail__box-button-btn"  onClick={()=>handleAddToCart(product._id)}>
                                            <FaCartPlus/> Thêm Vào Giỏ Hàng
                                        </button>
                                    )}
                                    <button className= "productsdetail__box-button-btn" onClick={()=>handleBuyNow()} >
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
                                            {product.description}
                                        </p>
                                    </div>
                                    <div className="productsdetail__info-image">
                                        <img src={product.image_bottom} alt="" className="productsdetail__info-image-img" />
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
                    }
                <SliderBottom/>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default ProductDetail
