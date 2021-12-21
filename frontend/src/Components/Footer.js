import React from 'react'

import logo from '../img/logoFN.png'
import '../css/Grid.css'
import '../css/Footer.css'

import {FaFacebook,FaInstagram,FaSearchLocation,FaPhoneAlt} from 'react-icons/fa'
import {FiMail,FiPhone,FiNavigation,FiHeart} from 'react-icons/fi'

function Footer() {
    return (
        <React.Fragment>
            <footer>
                <div className="grid wide">
                    <div className="row">
                                <div className="col l-3">
                                    <div className="footer__heading">
                                        <p className="footer__heading-text">
                                            Về vankhiem shop
                                        </p>
                                    </div>
                                    <div className="footer__list">
                                        <ul className="footer__list-list">
                                            <li className="footer__list-list-item">
                                                <a href="" className="footer__list-list-item-link">
                                                    Giới thiệu
                                                </a>
                                            </li>
                                            <li className="footer__list-list-item">
                                                <a href="" className="footer__list-list-item-link">
                                                    Điều khoản
                                                </a>
                                            </li>
                                            <li className="footer__list-list-item">
                                                <a href="" className="footer__list-list-item-link">
                                                    Tuyển dụng
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col l-3">
                                    <div className="footer__heading">
                                        <p className="footer__heading-text">
                                            Danh mục
                                        </p>
                                    </div>
                                    <div className="footer__list">
                                        <ul className="footer__list-list">
                                            <li className="footer__list-list-item">
                                                <a href="" className="footer__list-list-item-link">
                                                    Đồ chơi xe máy
                                                </a>
                                            </li>
                                            <li className="footer__list-list-item">
                                                <a href="" className="footer__list-list-item-link">
                                                    Vỏ Bánh xe
                                                </a>
                                            </li>
                                            <li className="footer__list-list-item">
                                                <a href="" className="footer__list-list-item-link">
                                                    Phụ tùng thay thế
                                                </a>
                                            </li>
                                            <li className="footer__list-list-item">
                                                <a href="" className="footer__list-list-item-link">
                                                    Phụ kiện khác
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col l-3">
                                    <div className="footer__heading">
                                        <p className="footer__heading-text">
                                            Theo dõi chúng tôi
                                        </p>
                                    </div>
                                    <div className="footer__list">
                                        <ul className="footer__list-list">
                                            <li className="footer__list-list-item">
                                                <a href="" className="footer__list-list-item-link">
                                                   <FaFacebook className="footer__list-list-item-link-icon"/> Facebook
                                                </a>
                                            </li>
                                            <li className="footer__list-list-item">
                                                <a href="" className="footer__list-list-item-link">
                                                    <FaInstagram className="footer__list-list-item-link-icon"/> Instagram
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col l-3">
                                    <div className="footer__heading">
                                        <p className="footer__heading-text">
                                            Liên Hệ
                                        </p>
                                    </div>
                                    <div className="footer__list">
                                        <ul className="footer__list-list">
                                            <li className="footer__list-list-item">
                                                <a href="" className="footer__list-list-item-link">
                                                    <FiNavigation className="footer__list-list-item-link-icon" />
                                                   Địa chỉ: 113 APĐ,P.Thạnh Lộc,Q.12 <br /> Thành Phố Hồ Chí Minh
                                                </a>
                                            </li>
                                            <li className="footer__list-list-item">
                                                <a href="" className="footer__list-list-item-link">
                                                    <FiPhone className="footer__list-list-item-link-icon"/> 
                                                    Điện thoại: 1900 1000 - 1900 1010
                                                </a>
                                            </li>
                                            <li className="footer__list-list-item">
                                                <a href="" className="footer__list-list-item-link">
                                                    <FiMail className="footer__list-list-item-link-icon"/> 
                                                    Email: vankhiem284@gmail.com
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="footer__verify">
                                        <img src="https://shop2banh.vn/images/dathongbao.png" alt="" className="footer__verify-img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="footer__bottom">
                        <div className="footer__bottom-title">
                            <p className="footer__bottom-title-text">
                                Copyright ©2021 All rights reserved | This website is made with  by vankhiem <FiHeart className="footer__bottom-title-icon"/>
                            </p>
                        </div>
                    </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer
