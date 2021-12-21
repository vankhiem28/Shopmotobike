import React from 'react'

import { FaSearch,FaShoppingCart,FaUserAlt, } from 'react-icons/fa'
import { MdSearch,MdClose } from "react-icons/md"

import {Link} from 'react-router-dom'

import logo from '../img/logoFN.png'
import '../css/Header.css'
import '../css/Grid.css'



function Header() {
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
                                <Link to= "/products/:category">
                                    <li className="header__list-item">
                                        <span className="header__list-item-link">Đồ Chơi Xe Máy</span>
                                            <div className="header__drop-menu">
                                                <ul className="header__drop-menu-list">
                                                    <li className="header__drop-menu-item">
                                                        <a href="" className="header__drop-menu-link">
                                                            Tay thắng
                                                        </a>
                                                    </li>
                                                    <li className="header__drop-menu-item">
                                                        <a href="" className="header__drop-menu-link">
                                                            Bao tay
                                                        </a>
                                                    </li>
                                                    <li className="header__drop-menu-item">
                                                        <a href="" className="header__drop-menu-link">
                                                            Kính chiếu hậu 
                                                        </a>
                                                    </li>
                                                    <li className="header__drop-menu-item">
                                                        <a href="" className="header__drop-menu-link">
                                                            Đèn led xe máy
                                                        </a>
                                                    </li>
                                                    <li className="header__drop-menu-item">
                                                        <a href="" className="header__drop-menu-link">
                                                            Đĩa xe máy
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                    </li>

                                </Link>
                                <li className="header__list-item">
                                    <span className="header__list-item-link">Phụ Tùng Thay Thế</span>
                                    <div className="header__drop-menu">
                                            <ul className="header__drop-menu-list">
                                                <li className="header__drop-menu-item">
                                                    <a href="" className="header__drop-menu-link">
                                                        Phuộc xe máy
                                                    </a>
                                                </li>
                                                <li className="header__drop-menu-item">
                                                    <a href="" className="header__drop-menu-link">
                                                        Bình ác quy xe máy
                                                    </a>
                                                </li>
                                                <li className="header__drop-menu-item">
                                                    <a href="" className="header__drop-menu-link">
                                                        Khóa xe máy 
                                                    </a>
                                                </li>
                                                <li className="header__drop-menu-item">
                                                    <a href="" className="header__drop-menu-link">
                                                        Lọc gió xe máy
                                                    </a>
                                                </li>
                                                <li className="header__drop-menu-item">
                                                    <a href="" className="header__drop-menu-link">
                                                        Bố thắng (Má phanh)
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                </li>
                                <li className="header__list-item">
                                    <span className="header__list-item-link">Vỏ Bánh Xe</span>
                                    <div className="header__drop-menu">
                                            <ul className="header__drop-menu-list">
                                                <li className="header__drop-menu-item">
                                                    <a href="" className="header__drop-menu-link">
                                                        Vỏ xe Michelin
                                                    </a>
                                                </li>
                                                <li className="header__drop-menu-item">
                                                    <a href="" className="header__drop-menu-link">
                                                        Vỏ xe Continetal
                                                    </a>
                                                </li>
                                                <li className="header__drop-menu-item">
                                                    <a href="" className="header__drop-menu-link">
                                                        Vỏ xe Aspira
                                                    </a>
                                                </li>
                                                <li className="header__drop-menu-item">
                                                    <a href="" className="header__drop-menu-link">
                                                        Vỏ xe IRC
                                                    </a>
                                                </li>
                                                <li className="header__drop-menu-item">
                                                    <a href="" className="header__drop-menu-link">
                                                        Lốp chống đinh
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                </li>
                                <li className="header__list-item">
                                    <span className="header__list-item-link">Nhớt Xe Máy</span>
                                    <div className="header__drop-menu">
                                            <ul className="header__drop-menu-list">
                                                <li className="header__drop-menu-item">
                                                    <a href="" className="header__drop-menu-link">
                                                        Motul
                                                    </a>
                                                </li>
                                                <li className="header__drop-menu-item">
                                                    <a href="" className="header__drop-menu-link">
                                                        Liqui moly
                                                    </a>
                                                </li>
                                                <li className="header__drop-menu-item">
                                                    <a href="" className="header__drop-menu-link">
                                                        Fuchs
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                </li>
                                <li className="header__list-item">
                                    <span className="header__list-item-link">Phụ kiện khác</span>
                                    <div className="header__drop-menu">
                                            <ul className="header__drop-menu-list">
                                                <li className="header__drop-menu-item">
                                                    <a href="" className="header__drop-menu-link">
                                                        Đồ phượt
                                                    </a>
                                                </li>
                                                <li className="header__drop-menu-item">
                                                    <a href="" className="header__drop-menu-link">
                                                        Nón bảo hiểm
                                                    </a>
                                                </li>
                                                <li className="header__drop-menu-item">
                                                    <a href="" className="header__drop-menu-link">
                                                        Găng tay xe máy
                                                    </a>
                                                </li>
                                                <li className="header__drop-menu-item">
                                                    <a href="" className="header__drop-menu-link">
                                                        Bó gối bảo vệ
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
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
                                <span className="header__right-info-notice">4</span>
                                <FaShoppingCart className="header__right-info-icon" />
                                <div className="header__right-info-cart">
                                    <div className="header__right-info-cart-title">
                                        <p className="header__right-info-cart-title-text">
                                            Sản phẩm đã thêm
                                        </p>
                                    </div>
                                    <div className="header__right-info-cart-content-item">
                                        <div className="header__right-info-cart-item">
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
                                        </div>
                                        <div className="header__right-info-cart-item">
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
                                        </div>
                                        <div className="header__right-info-cart-item">
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
                                        </div>
                                        <div className="header__right-info-cart-item">
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
                                        </div>
                                        <div className="header__right-info-cart-item">
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
                                        </div>
                                    </div>
                                    <div className="header__right-info-cart-bottom">
                                        <button className="header__right-info-cart-bottom-btn">
                                            Xem Giỏ Hàng
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="header__right-info">
                                <FaUserAlt className="header__right-info-icon" />
                                <div className="header__right-info-form">
                                    <div className="header__right-info-form-login">
                                        <div className="header__right-info-form-login-title">
                                            <h3 className="header__right-info-form-login-title-text">
                                                Đăng nhập tài khoản
                                            </h3>
                                            <p className="header__right-info-form-login-title-text">
                                                Nhập tên đăng nhập và mật khẩu
                                            </p>
                                        </div>
                                        <div className="header__right-info-form-login-input">
                                            <input type="text" placeholder="Tên đăng nhập" className="header__right-info-form-login-ip" />
                                            <input type="password" placeholder="Mật khẩu" className="header__right-info-form-login-ip" />
                                        </div>
                                        <div className="header__right-info-form-login-policy">
                                            <p className="header__right-info-form-login-policy-text">
                                                This site is protected by reCAPTCHA and the Google <span>Privacy Policy </span> and <span> Terms of Service </span> apply.
                                            </p>
                                        </div>
                                        <div className="header__right-info-form-login-button">
                                            <button className="header__right-info-form-login-btn">
                                                Đăng nhập
                                            </button>
                                            <button className="header__right-info-form-login-btn">
                                                Đăng ký
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
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