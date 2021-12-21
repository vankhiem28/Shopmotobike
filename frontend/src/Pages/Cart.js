import React from 'react'

import Header from '../Components/Header'
import Footer from '../Components/Footer'
import SliderBottom from '../Components/SliderBottom'

import '../css/Grid.css'
import '../css/Cart.css'

function Cart() {
    return (
        <React.Fragment>
            <Header/>
            <div className="cart__container">
                <div className="cart__bg">
                    <div className="cart__bg-overlay"></div>
                    <div className="cart__bg-title">
                        <h2 className="cart__bg-title-text">Giỏ Hàng</h2>
                    </div>
                </div>
                <div className="grid wide">
                        <div className="cart__title">
                            <h2 className="cart__title-text">Sản Phẩm Của Bạn</h2>
                            <div className="cart__button-return">
                                <button className="cart__button-return-btn">
                                    Tiếp Tục Mua Hàng
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col l-8">
                                <div className="cart__products-box-left">
                                    <div className="cart__products-item">
                                        <div className="cart__products-item-image">
                                            <img src="https://shop2banh.vn/images/thumbs/2021/01/dia-kingspeed-245mm-4-lo-cho-exciter150-1427-slide-products-5ff425fb0ede4.jpg" alt="" className="cart__products-item-img" />
                                        </div>
                                        <div className="cart__products-item-box">
                                            <div className="cart__products-item-text">
                                                <h3 className="cart__products-item-text-name">Đĩa KingSpeed 245mm (4 lỗ mâm độ) cho Exciter 150</h3>
                                                <p className="cart__products-item-text-price">500.000đ</p>
                                            </div> 
                                            <div className="cart__products-item-input">
                                                <button className="cart__products-item-input-btn">-</button>
                                                <input type="text" className="cart__products-item-input-ip" value={1} />
                                                <button className="cart__products-item-input-btn">+</button>
                                            </div>
                                            <div className="cart__products-item-button">
                                                <button className="cart__products-item-button-btn">
                                                    Xóa
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cart__products-item">
                                        <div className="cart__products-item-image">
                                            <img src="https://shop2banh.vn/images/thumbs/2021/01/dia-kingspeed-245mm-4-lo-cho-exciter150-1427-slide-products-5ff425fb0ede4.jpg" alt="" className="cart__products-item-img" />
                                        </div>
                                        <div className="cart__products-item-box">
                                            <div className="cart__products-item-text">
                                                <h3 className="cart__products-item-text-name">Đĩa KingSpeed 245mm (4 lỗ mâm độ) cho Exciter 150</h3>
                                                <p className="cart__products-item-text-price">500.000đ</p>
                                            </div> 
                                            <div className="cart__products-item-input">
                                                <button className="cart__products-item-input-btn">-</button>
                                                <input type="text" className="cart__products-item-input-ip" value={1} />
                                                <button className="cart__products-item-input-btn">+</button>
                                            </div>
                                            <div className="cart__products-item-button">
                                                <button className="cart__products-item-button-btn">
                                                    Xóa
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cart__products-item">
                                        <div className="cart__products-item-image">
                                            <img src="https://shop2banh.vn/images/thumbs/2021/01/dia-kingspeed-245mm-4-lo-cho-exciter150-1427-slide-products-5ff425fb0ede4.jpg" alt="" className="cart__products-item-img" />
                                        </div>
                                        <div className="cart__products-item-box">
                                            <div className="cart__products-item-text">
                                                <h3 className="cart__products-item-text-name">Đĩa KingSpeed 245mm (4 lỗ mâm độ) cho Exciter 150</h3>
                                                <p className="cart__products-item-text-price">500.000đ</p>
                                            </div> 
                                            <div className="cart__products-item-input">
                                                <button className="cart__products-item-input-btn">-</button>
                                                <input type="text" className="cart__products-item-input-ip" value={1} />
                                                <button className="cart__products-item-input-btn">+</button>
                                            </div>
                                            <div className="cart__products-item-button">
                                                <button className="cart__products-item-button-btn">
                                                    Xóa
                                                </button>
                                            </div>
                                        </div>
                                    </div>                                    <div className="cart__products-item">
                                        <div className="cart__products-item-image">
                                            <img src="https://shop2banh.vn/images/thumbs/2021/01/dia-kingspeed-245mm-4-lo-cho-exciter150-1427-slide-products-5ff425fb0ede4.jpg" alt="" className="cart__products-item-img" />
                                        </div>
                                        <div className="cart__products-item-box">
                                            <div className="cart__products-item-text">
                                                <h3 className="cart__products-item-text-name">Đĩa KingSpeed 245mm (4 lỗ mâm độ) cho Exciter 150</h3>
                                                <p className="cart__products-item-text-price">500.000đ</p>
                                            </div> 
                                            <div className="cart__products-item-input">
                                                <button className="cart__products-item-input-btn">-</button>
                                                <input type="text" className="cart__products-item-input-ip" value={1} />
                                                <button className="cart__products-item-input-btn">+</button>
                                            </div>
                                            <div className="cart__products-item-button">
                                                <button className="cart__products-item-button-btn">
                                                    Xóa
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col l-4">
                                <div className="cart__products-box-right">
                                    <div className="cart__products-checkout-title">
                                        <h2 className="cart__products-checkout-title-text">
                                            Thanh Toán
                                        </h2>
                                    </div>
                                    <div className="cart__products-checkout-box">
                                        <div className="cart__products-checkout-price">
                                            <p className="cart__products-checkout-price-text">
                                                Tổng Tiền Sản Phẩm
                                            </p>
                                            <p className="cart__products-checkout-price-price">
                                                500.000đ
                                            </p>
                                        </div>
                                        <div className="cart__products-checkout-price">
                                            <p className="cart__products-checkout-price-text">
                                                Phí Vận Chuyển
                                            </p>
                                            <p className="cart__products-checkout-price-price">
                                                50.000đ
                                            </p>
                                        </div>
                                        <div className="cart__products-checkout-price">
                                            <p className="cart__products-checkout-price-text">
                                                Giảm Giá Phí Vận Chuyển
                                            </p>
                                            <p className="cart__products-checkout-price-price">
                                                0đ
                                            </p>
                                        </div>
                                        <div className="cart__products-checkout-price">
                                            <p className="cart__products-checkout-price-text">
                                                Tổng Tiền
                                            </p>
                                            <p className="cart__products-checkout-price-price">
                                                550.000đ
                                            </p>
                                        </div>
                                        <div className="cart__products-checkout-button">
                                            <button className="cart__products-checkout-button-btn">
                                                Thanh Toán Ngay
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SliderBottom/>
                    </div>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default Cart
