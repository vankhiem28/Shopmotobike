import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

import { FaSearchLocation,FaPhoneAlt,FaMailBulk } from "react-icons/fa";

import '../css/Contacts.css'
import '../css/Grid.css'

function Contacts() {
    return (
        <React.Fragment>
            <Header/>
            <div className="contact__container">
                <div className="contact__bg">
                    <div className="contact__bg-overlay"></div>
                    <div className="contact__bg-title">
                        <h2 className="contact__bg-title-text">Giỏ Hàng</h2>
                    </div>
                </div>
                <div className="grid wide">
                    <div className="row">
                        <div className="col l-5">
                            <div className="contact__left-box">
                                <div className="contact__text">
                                    <h1 className="contact__text-title">
                                        Liên Hệ Với Chúng Tôi
                                    </h1>
                                    <p className="contact__text-des">
                                        Trung tâm Buôn bán Phụ tùng, đồ chơi xe máy vankhiemshop.com chuyên bán đầy đủ phụ tùng chính hãng và đồ chơi xe máy như: phuộc RCB, phuộc YSS, bao tay Barracuda, xi-nhan Spirit Beast, Đèn trợ sáng Led L4...
                                    </p>
                                </div>
                                <div className="contact__info">
                                    <p className="contact__info-text">
                                        <FaSearchLocation className="contact__info-icon" />
                                        Địa chỉ: 113 APĐ,P.Thạnh Lộc,Q.12Thành Phố Hồ Chí Minh
                                    </p>
                                    <p className="contact__info-text">
                                        <FaPhoneAlt className="contact__info-icon"/>
                                        Điện thoại: 1900 1000 - 1900 1010
                                    </p>
                                    <p className="contact__info-text">
                                        <FaMailBulk className="contact__info-icon"/>
                                        Email: vankhiem284@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col l-7">
                            <div className="contact__right-box">
                                <div className="contact__form">
                                    <h3 className="contact__form-input-name">Tên</h3>
                                    <div className="contact__form-input">
                                        <input type="text" className="contact__form-input-ip" />
                                    </div>
                                    <h3 className="contact__form-input-name">Email</h3>
                                    <div className="contact__form-input">
                                        <input type="email" className="contact__form-input-ip" />
                                    </div>
                                    <h3 className="contact__form-input-name">Tin nhắn</h3>
                                    <div className="contact__form-input">
                                        <textarea type="" className="contact__form-input-ip" />
                                    </div>
                                </div>
                                <div className="contact__button">
                                    <button className="contact__button-btn">
                                        Gửi Tin Nhắn
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default Contacts
