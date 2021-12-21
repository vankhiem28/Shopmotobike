import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

import '../css/Grid.css'
import '../css/Register.css'
// import Product from '../Components/Product'
function Register() {
    return (
        <React.Fragment>
            <Header/>
                <div className="register__container">
                    <div className="register__bg">
                        <div className="register__bg-overlay"></div>
                        <div className="register__bg-title">
                            <h3 className="register__bg-title-text">Tạo Tài Khoản</h3>
                        </div>
                    </div>
                    <div className="grid wide">
                        <div className="row">
                            <div className="col l-12 register__flex">
                                <div className="register">
                                    <div className="register__title">
                                        <h1 className="register__title-text">
                                            Đăng ký tài khoản
                                        </h1>
                                    </div>
                                    <div className="register__form">
                                        <div className="register__form-input">
                                            <span>Email</span>
                                            <input type="email" placeholder="Email" className="register__input__form-input-ip"/>
                                        </div>
                                        <div className="register__form-input">
                                            <span>Tên Đăng Nhập</span>
                                            <input type="text" placeholder="Tên Đăng Nhập" className="register__input__form-input-ip"/>
                                        </div>
                                        <div className="register__form-input">
                                            <span>Mật Khẩu</span>
                                            <input type="password" placeholder="Mật Khẩu" className="register__input__form-input-ip"/>
                                        </div>                                        
                                        <div className="register__form-input">
                                            <span>Nhập Lại Mật Khẩu</span>
                                            <input type="password" placeholder="Nhập Lại Mật Khẩu" className="register__input__form-input-ip"/>
                                        </div>
                                    </div>
                                    <div className="register__form-button">
                                        <button className="register__form-btn">
                                            Đăng ký
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

export default Register
