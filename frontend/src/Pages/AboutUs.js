import React, { useRef } from 'react'
import Slider from 'react-slick'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../css/AboutUs.css'
import '../css/Grid.css'

import about1 from '../img/img/about1.jpg'
import about2 from '../img/img/about2.jpg'
import about3 from '../img/img/about3.jpg'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

function AboutUs() {

    const aboutImageBtn = useRef()

    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
      }

    return (
        <React.Fragment>
                <Header/>
                <div className="about__container">
                    <div className="about__bg">
                        <div className="about__bg-overlay"></div>
                        <div className="about__bg-title">
                            <h2 className="about__bg-title-text">Về chúng tôi</h2>
                        </div>
                    </div>
                    <div className="grid wide">
                        <div className="about__contain">
                            <div className="about__text-title">
                                <h3 className="about__text-title-text">
                                    Sơ Lược
                                </h3>
                            </div>
                            <div className="row">
                                <div className="col l-5">
                                    <div className="about__text-box">
                                        <p className="about__text-des">Trung tâm Buôn bán Phụ tùng, đồ chơi xe máy vankhiem shop chuyên bán đầy đủ phụ tùng chính hãng và đồ chơi xe máy như: phuộc RCB, phuộc YSS, bao tay Barracuda, xi-nhan Spirit Beast, Đèn trợ sáng Led L4, Đèn led 2 tầng Zhi.Pat, đồ chơi Racingboy, pô Levince, Lọc gió KN, BMC, DNA, bình ắc-quy chính hãng GS, Globe, bugi Denso, NGK, Nhông sên dĩa DID, SSS, Recto, Akei, Hodaka, TFX…..</p>
                                        <p className="about__text-des">Vankhiem shop chuyên cung cấp nhớt chính hãng Motul, Repsol, Shell, Liqui Moly, Mobil 1, Voltronic, Amsol, Maxima, Wolver,… quý khách sẽ được lựa chọn những sản phẩm chất lượng đảm bảo cho chiếc xe máy của mình.</p>
                                        <p className="about__text-des">Đặc biệt, Trung tâm Đồ chơi xe máy vankhiem shop.vn chuyên cung cấp vỏ xe máy chính hãng các thương hiệu nổi tiếng trên thế giới như: Michelin, Dunlop, Maxxis, Continental, Pirelli, Metzeler, Aspira,….. đầy đủ các size cho tất cả dòng xe máy tại Việt Nam.</p>
                                        <p className="about__text-des">Với dịch vụ sửa xe chuyên nghiệp tại Trung tâm vankhiem shop Đồ chơi xe máy được đầu tư khá quy mô về trang thiết bị hiện đại, cơ sở hạ tầng khang trang, rộng rãi, đội ngũ kỹ thuật viên đông đảo, tay nghề cao, nhiệt tình, nhiều năm kinh nghiệm, được đào tạo chuyên nghiệp sửa các loại xe máy, đặc biệt xe tay ga cao cấp như SH300i, SH, AB, Vario, Click, Nouvo, PCX, Exciter, Wave, Sirius, Wave, Future,...</p>
                                        <p className="about__text-des">Quý khách đặt mua sản phẩm ở nội thành sẽ được giao hàng tận nơi và ở các tỉnh thành khác sẽ giao hàng qua dịch vụ giao hàng tận nhà, vui lòng liên hệ trực tiếp: <span className="about__text-des-hotline">Hotline:1900 1000</span></p>
                                    </div>
                                </div>
                                <div className="col l-7">
                                    <div className="about__image-box">
                                        <div className="about__image-slick">
                                            <Slider ref={aboutImageBtn} {...settings}>
                                                <div className="about__image">
                                                    <img src={about1} alt="" className="about__image-img" />
                                                </div>
                                                <div className="about__image">
                                                    <img src={about2} alt="" className="about__image-img" />
                                                </div>
                                                <div className="about__image">
                                                    <img src={about3} alt="" className="about__image-img" />
                                                </div>
                                            </Slider>
                                            <div className="about__image-button">
                                                <button className="about__image-btn about__image-btn-prev" onClick={() => aboutImageBtn?.current?.slickPrev()}><FaAngleLeft className="about__image-btn-icon"/></button>
                                                <button className="about__image-btn about__image-btn-next" onClick={() => aboutImageBtn?.current?.slickNext()}><FaAngleRight className="about__image-btn-icon"/></button>
                                            </div>
                                        </div>
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

export default AboutUs
