import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

import { FaFacebook,FaGoogle,FaTwitter } from "react-icons/fa";

import '../css/Grid.css'
import '../css/NotFound.css'

function NotFound() {
    return (
        <React.Fragment>
            <Header/>
            <div className="not__found-container">
                <div className="grid wide">
                    <div className="not__found-contain">
                        <div className="not__found-logo">
                            <h1 className="not__found-logo-text">404</h1>
                        </div>
                        <div className="not__found-text">
                            <h1 className="not__found-text-title">Lỗi ! Không tìm thấy trang</h1>
                            <p className="not__found-text-des">Vui lòng liên hệ quản trị viên để khắc phục sự cố</p>
                        </div>
                        <div className="not__found-social">
                            <div className="not__found-social-logo">
                                <FaFacebook className="not__found-social-logo-icon"/>
                            </div>
                            <div className="not__found-social-logo">
                                <FaGoogle className="not__found-social-logo-icon"/>
                            </div>
                            <div className="not__found-social-logo">
                                <FaTwitter className="not__found-social-logo-icon"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default NotFound
