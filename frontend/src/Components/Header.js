import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { FaSearch,FaShoppingCart,FaUserAlt, } from 'react-icons/fa'
import { MdSearch,MdClose } from "react-icons/md"

import {Link, useLocation, useParams} from 'react-router-dom'

import logo from '../img/logoFN.png'
import '../css/Header.css'
import '../css/Grid.css'
import { addToCart, removeFromCart } from '../actions/CartActions'
import { signin, signout } from '../actions/UserActions'

function Header() {
    
    const cart = useSelector(state => state.cart)
    const {cartItems} =cart


    const dispatch = useDispatch()
    const handleDeleteItemFromCart = (id) => {
        dispatch(removeFromCart(id))
    }

    const userSignin = useSelector((state)=>state.userSignin)
    const {userInfo} = userSignin

    const productList = useSelector((state) => state.productList)
    const {loading, error, products} = productList


    const handlerSignout = () => {
        dispatch(signout())
    }


    return (
        <>
            <header>
                <div className="grid wide">
                    <div className="header">
                        <div className="header__nav">
                            <Link to="/">
                                <div className="header__nav-logo">
                                    <img src={logo} className="header__nav-logo-img" alt="logo"/>
                                </div>
                            </Link>
                            <ul className="header__list">
                                <Link to="/">
                                    <li className="header__list-item">
                                        <span className="header__list-item-link">Trang Chủ</span>
                                    </li>
                                </Link>
                                <Link to= "/productsList">
                                    <li className="header__list-item">
                                        <span className="header__list-item-link">Sản phẩm</span>
                                    </li>
                                </Link>
                                <li className="header__list-item">
                                    <span className="header__list-item-link">Tin Tức</span>
                                </li>
                                <Link to= "/contact">
                                    <li className="header__list-item">
                                        <span className="header__list-item-link">Liên Hệ</span>
                                    </li>
                                </Link>
                                <li className="header__list-item">
                                    <span className="header__list-item-link">Về chúng tôi</span>
                                </li>
                                <li className="header__list-item">
                                    <span className="header__list-item-link">Khác</span>
                                </li>
                            </ul>
                        </div>
                        <div className="header__right">
                            <div className="header__right-info">
                                <label htmlFor="header__show-search">
                                <FaSearch className="header__right-info-icon" />
                                </label>
                            </div>
                            <div className="header__right-info header__right-info-cart--hover">
                                {cartItems.length > 0 && (
                                    <span className="header__right-info-notice">{cartItems.length}</span>
                                    
                                )}
                                <FaShoppingCart className="header__right-info-icon" />
                                <div className="header__right-info-cart">
                                    <div className="header__right-info-cart-title">
                                        {cartItems.length > 0 ? <p className="header__right-info-cart-title-text">Sản phẩm đã thêm</p>:<p className="header__right-info-cart-title-text">Chưa có sản phẩm</p> }
                                    </div>
                                    <div className="header__right-info-cart-content-item">
                                        {cartItems.map((item)=>(

                                            <div className="header__right-info-cart-item">
                                                <img src={item.image} alt="" className="header__right-info-cart-item-img" />
                                                <div className="header__right-info-cart-item-box">
                                                    <div className="header__right-info-cart-item-left">
                                                        <Link className="header__link" to={`/product/${item.product}`}>
                                                            <h3 className="header__right-info-cart-item-left-name">
                                                                {item.name}
                                                            </h3>
                                                        </Link>
                                                        <p className="header__right-info-cart-item-left-quantily">
                                                            SL:1
                                                        </p>
                                                    </div>
                                                    <div className="header__right-info-cart-item-right">
                                                        <p className="header__right-info-cart-item-right-price">
                                                            {item.price.toLocaleString()}đ
                                                        </p>
                                                        <button onClick={()=>handleDeleteItemFromCart(item.product)} className="header__right-info-cart-item-right-btn">
                                                            Xóa
                                                        </button>
                                                    </div>

                                                </div>
                                            </div>

                                        ))}
                                        {/* <div className="header__right-info-cart-item">
                                            <img src="https://shop2banh.vn/images/thumbs/2021/01/dia-kingspeed-245mm-4-lo-cho-exciter150-1427-slide-products-5ff425fb0ede4.jpg" alt="" className="header__right-info-cart-item-img" />
                                            <div className="header__right-info-cart-item-box">
                                                <div className="header__right-info-cart-item-left">
                                                    <h3 className="header__right-info-cart-item-left-name">
                                                        Đĩa KingSpeed 245mm (4 lỗ mâm độ) cho Exciter 150
                                                    </h3>
                                                    <p className="header__right-info-cart-item-left-quantily">
                                                        Số lượng: 1
                                                    </p>
                                                </div>
                                                <div className="header__right-info-cart-item-right">
                                                    <p className="header__right-info-cart-item-right-price">
                                                        500.000đ
                                                    </p>
                                                    <button className="header__right-info-cart-item-right-btn">
                                                        Xóa
                                                    </button>
                                                </div>

                                            </div>
                                        </div> */}
                                        {/* <div className="header__right-info-cart-item">
                                            <img src="https://shop2banh.vn/images/thumbs/2021/01/dia-kingspeed-245mm-4-lo-cho-exciter150-1427-slide-products-5ff425fb0ede4.jpg" alt="" className="header__right-info-cart-item-img" />
                                            <div className="header__right-info-cart-item-box">
                                                <div className="header__right-info-cart-item-left">
                                                    <h3 className="header__right-info-cart-item-left-name">
                                                        Đĩa KingSpeed 245mm (4 lỗ mâm độ) cho Exciter 150
                                                    </h3>
                                                    <p className="header__right-info-cart-item-left-quantily">
                                                        Số lượng: 1
                                                    </p>
                                                </div>
                                                <div className="header__right-info-cart-item-right">
                                                    <p className="header__right-info-cart-item-right-price">
                                                        500.000đ
                                                    </p>
                                                    <button className="header__right-info-cart-item-right-btn">
                                                        Xóa
                                                    </button>
                                                </div>

                                            </div>
                                        </div> */}
                                        {/* <div className="header__right-info-cart-item">
                                            <img src="https://shop2banh.vn/images/thumbs/2021/01/dia-kingspeed-245mm-4-lo-cho-exciter150-1427-slide-products-5ff425fb0ede4.jpg" alt="" className="header__right-info-cart-item-img" />
                                            <div className="header__right-info-cart-item-box">
                                                <div className="header__right-info-cart-item-left">
                                                    <h3 className="header__right-info-cart-item-left-name">
                                                        Đĩa KingSpeed 245mm (4 lỗ mâm độ) cho Exciter 150
                                                    </h3>
                                                    <p className="header__right-info-cart-item-left-quantily">
                                                        Số lượng: 1
                                                    </p>
                                                </div>
                                                <div className="header__right-info-cart-item-right">
                                                    <p className="header__right-info-cart-item-right-price">
                                                        500.000đ
                                                    </p>
                                                    <button className="header__right-info-cart-item-right-btn">
                                                        Xóa
                                                    </button>
                                                </div>

                                            </div>
                                        </div> */}
                                        {/* <div className="header__right-info-cart-item">
                                            <img src="https://shop2banh.vn/images/thumbs/2021/01/dia-kingspeed-245mm-4-lo-cho-exciter150-1427-slide-products-5ff425fb0ede4.jpg" alt="" className="header__right-info-cart-item-img" />
                                            <div className="header__right-info-cart-item-box">
                                                <div className="header__right-info-cart-item-left">
                                                    <h3 className="header__right-info-cart-item-left-name">
                                                        Đĩa KingSpeed 245mm (4 lỗ mâm độ) cho Exciter 150
                                                    </h3>
                                                    <p className="header__right-info-cart-item-left-quantily">
                                                        Số lượng: 1
                                                    </p>
                                                </div>
                                                <div className="header__right-info-cart-item-right">
                                                    <p className="header__right-info-cart-item-right-price">
                                                        500.000đ
                                                    </p>
                                                    <button className="header__right-info-cart-item-right-btn">
                                                        Xóa
                                                    </button>
                                                </div>

                                            </div>
                                        </div> */}
                                    </div>
                                    <div className="header__right-info-cart-bottom">
                                        <Link to={`/cart/all`}>
                                            <button className="header__right-info-cart-bottom-btn">
                                                Xem Giỏ Hàng
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {
                                userInfo ? (
                                    <div className="header__right-info-logged">
                                        <Link to="#" className="header__right-info-user" >{userInfo.name}</Link>
                                        <div className="header__logged-dropmenu">
                                            <ul className="header__logged-dropmenu-list">
                                                <li>
                                                    <Link to="/signin" onClick={handlerSignout} className="header__logged-dropmenu-list-item">
                                                        Đăng Xuất
                                                    </Link>                             
                                                </li>
                                                <li>
                                                    <Link to="/profile" className="header__logged-dropmenu-list-item">
                                                        Tài Khoản
                                                    </Link>                             
                                                </li>
                                            {userInfo.isAdmin && 
                                            <>
                                                    <li>
                                                        <Link to="/productsAdmin"  className="header__logged-dropmenu-list-item">
                                                            QL Sản Phẩm
                                                        </Link>                             
                                                    </li>
                                                    <li>
                                                        <Link to="/ordersAdmin"  className="header__logged-dropmenu-list-item">
                                                            QL Người Dùng
                                                        </Link>                             
                                                    </li>
                                                    <li>
                                                        <Link to="/ordersAdmin"  className="header__logged-dropmenu-list-item">
                                                            QL Đơn Hàng
                                                        </Link>                             
                                                    </li>
                                            </>
                                            }    
                                            </ul>
                                        </div>
                                    </div>
                                ): 
                                <Link to={'/signin'}>
                                    <div className="header__right-info">
                                            <FaUserAlt className="header__right-info-icon" />
                                    </div>
                                </Link>
                            }
                        </div>
                    </div>
                </div>
            </header>
            <input type="checkbox"  id="header__show-search" className="header__show-search" />
            <div className="header__open-search">
                <div className="header__open-input">
                    <MdSearch className="header__open-input-icon"/>
                    <input type="text" placeholder="Search" className="header__open-input-text"/>
                </div>
                <label htmlFor="header__show-search" className="header__open-search-close">
                    <MdClose className="header__open-search-close-icon"/>
                </label>
            </div>
        </>
    )
}

export default Header