import React from 'react'

import Header from '../Components/Header'
import Footer from '../Components/Footer'

import {FaListUl,FaSortDown,FaCaretRight,FaCartPlus} from 'react-icons/fa'

import '../css/Grid.css'
import '../css/ProductList.css'

function ProductList() {
    return (
        <React.Fragment>
            <Header/>
            <div className="productlist__container">
                <div className="grid wide">
                    <div className="row productlist__contain">
                        <div className="col l-2">
                            <div className="productlist__category-left">
                                <div className="productlist__category-left-title">
                                    <div className="productlist__category-left-title-icon">
                                        <FaListUl/>
                                    </div>
                                    <p className="productlist__category-left-title-text">
                                        Danh Mục
                                    </p>
                                </div>
                                <div className="productlist__category-left-filter">
                                    <ul className="productlist__category-left-filter-list">
                                        <li className="productlist__category-left-filter-item productlist__category-left-filter-item--active">                                                                
                                            <a href="" className="productlist__category-left-filter-link ">
                                                Đồ chơi xe máy
                                            </a>
                                        </li>
                                        <li className="productlist__category-left-filter-item">
                                            <a href="" className="productlist__category-left-filter-link ">                
                                                Phụ tùng thay thế
                                            </a>
                                        </li>
                                        <li className="productlist__category-left-filter-item">
                                            <a href="" className="productlist__category-left-filter-link">                
                                                Vỏ bánh xe
                                            </a>
                                        </li>
                                        <li className="productlist__category-left-filter-item">
                                            <a href="" className="productlist__category-left-filter-link">                
                                                Nhớt xe máy
                                            </a>
                                        </li>
                                        <li className="productlist__category-left-filter-item">
                                            <a href="" className="productlist__category-left-filter-link">                
                                                Phụ kiện khác
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col l-10">
                            <div className="productlist__category-right">
                                <div className="productlist__category-right-top">
                                    <div className="productlist__category-right-top-filter">
                                        <div className="productlist__category-right-top-filter-title">
                                            <p className="productlist__category-right-top-filter-title-text">
                                                Sắp xếp theo
                                            </p>
                                        </div>
                                        <div className="productlist__category-right-top-filter-box">
                                            <select name="" id="" className="productlist__category-right-top-filter-select">
                                                <option value="" className="productlist__category-right-top-filter-option">
                                                    Giá
                                                </option>
                                                <option value="" className="productlist__category-right-top-filter-option">
                                                    Từ cao tới thấp
                                                </option>
                                                <option value="" className="productlist__category-right-top-filter-option">
                                                    Từ thấp tới cao
                                                </option>
                                            </select>
                                            <select name="" id="" className="productlist__category-right-top-filter-select">
                                                <option value="" className="productlist__category-right-top-filter-option">
                                                    Giá
                                                </option>
                                                <option value="" className="productlist__category-right-top-filter-option">
                                                    Từ cao tới thấp
                                                </option>
                                                <option value="" className="productlist__category-right-top-filter-option">
                                                    Từ thấp tới cao
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="productlist__category-right-bottom">
                                    <div className="row">
                                        <div className="col l-3">
                                            <div className="productlist__category-right-bottom-item">
                                                <div className="productlist__category-right-bottom-item-img">
                                                    <img src="https://shop2banh.vn/images/thumbs/2020/11/nhot-maxima-full-syn-10w40-products-1317.jpg" alt="" />
                                                </div>
                                                <div className="productlist__category-right-bottom-item-text">
                                                    <h3 className="productlist__category-right-bottom-item-text-title">Tay thắng Carbon cho Honda Sonic, MSX, CBR150</h3>
                                                    <h3 className="productlist__category-right-bottom-item-text-price">300.000 đ</h3>
                                                </div>
                                                <div className="productlist__category-right-bottom-item-add">
                                                    <button className="productlist__category-right-bottom-item-add-btn">
                                                        <FaCartPlus/> Thêm vào giỏ
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col l-3">
                                            <div className="productlist__category-right-bottom-item">
                                                <div className="productlist__category-right-bottom-item-img">
                                                    <img src="https://shop2banh.vn/images/thumbs/2020/11/nhot-maxima-full-syn-10w40-products-1317.jpg" alt="" />
                                                </div>
                                                <div className="productlist__category-right-bottom-item-text">
                                                    <h3 className="productlist__category-right-bottom-item-text-title">Tay thắng Carbon cho Honda Sonic, MSX, CBR150</h3>
                                                    <h3 className="productlist__category-right-bottom-item-text-price">300.000 đ</h3>
                                                </div>
                                                <div className="productlist__category-right-bottom-item-add">
                                                    <button className="productlist__category-right-bottom-item-add-btn">
                                                        <FaCartPlus/> Thêm vào giỏ
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col l-3">
                                            <div className="productlist__category-right-bottom-item">
                                                <div className="productlist__category-right-bottom-item-img">
                                                    <img src="https://shop2banh.vn/images/thumbs/2020/11/nhot-maxima-full-syn-10w40-products-1317.jpg" alt="" />
                                                </div>
                                                <div className="productlist__category-right-bottom-item-text">
                                                    <h3 className="productlist__category-right-bottom-item-text-title">Tay thắng Carbon cho Honda Sonic, MSX, CBR150</h3>
                                                    <h3 className="productlist__category-right-bottom-item-text-price">300.000 đ</h3>
                                                </div>
                                                <div className="productlist__category-right-bottom-item-add">
                                                    <button className="productlist__category-right-bottom-item-add-btn">
                                                        <FaCartPlus/> Thêm vào giỏ
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col l-3">
                                            <div className="productlist__category-right-bottom-item">
                                                <div className="productlist__category-right-bottom-item-img">
                                                    <img src="https://shop2banh.vn/images/thumbs/2020/11/nhot-maxima-full-syn-10w40-products-1317.jpg" alt="" />
                                                </div>
                                                <div className="productlist__category-right-bottom-item-text">
                                                    <h3 className="productlist__category-right-bottom-item-text-title">Tay thắng Carbon cho Honda Sonic, MSX, CBR150</h3>
                                                    <h3 className="productlist__category-right-bottom-item-text-price">300.000 đ</h3>
                                                </div>
                                                <div className="productlist__category-right-bottom-item-add">
                                                    <button className="productlist__category-right-bottom-item-add-btn">
                                                        <FaCartPlus/> Thêm vào giỏ
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col l-3">
                                            <div className="productlist__category-right-bottom-item">
                                                <div className="productlist__category-right-bottom-item-img">
                                                    <img src="https://shop2banh.vn/images/thumbs/2020/11/nhot-maxima-full-syn-10w40-products-1317.jpg" alt="" />
                                                </div>
                                                <div className="productlist__category-right-bottom-item-text">
                                                    <h3 className="productlist__category-right-bottom-item-text-title">Tay thắng Carbon cho Honda Sonic, MSX, CBR150</h3>
                                                    <h3 className="productlist__category-right-bottom-item-text-price">300.000 đ</h3>
                                                </div>
                                                <div className="productlist__category-right-bottom-item-add">
                                                    <button className="productlist__category-right-bottom-item-add-btn">
                                                        <FaCartPlus/> Thêm vào giỏ
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col l-3">
                                            <div className="productlist__category-right-bottom-item">
                                                <div className="productlist__category-right-bottom-item-img">
                                                    <img src="https://shop2banh.vn/images/thumbs/2020/11/nhot-maxima-full-syn-10w40-products-1317.jpg" alt="" />
                                                </div>
                                                <div className="productlist__category-right-bottom-item-text">
                                                    <h3 className="productlist__category-right-bottom-item-text-title">Tay thắng Carbon cho Honda Sonic, MSX, CBR150</h3>
                                                    <h3 className="productlist__category-right-bottom-item-text-price">300.000 đ</h3>
                                                </div>
                                                <div className="productlist__category-right-bottom-item-add">
                                                    <button className="productlist__category-right-bottom-item-add-btn">
                                                        <FaCartPlus/> Thêm vào giỏ
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col l-3">
                                            <div className="productlist__category-right-bottom-item">
                                                <div className="productlist__category-right-bottom-item-img">
                                                    <img src="https://shop2banh.vn/images/thumbs/2020/11/nhot-maxima-full-syn-10w40-products-1317.jpg" alt="" />
                                                </div>
                                                <div className="productlist__category-right-bottom-item-text">
                                                    <h3 className="productlist__category-right-bottom-item-text-title">Tay thắng Carbon cho Honda Sonic, MSX, CBR150</h3>
                                                    <h3 className="productlist__category-right-bottom-item-text-price">300.000 đ</h3>
                                                </div>
                                                <div className="productlist__category-right-bottom-item-add">
                                                    <button className="productlist__category-right-bottom-item-add-btn">
                                                        <FaCartPlus/> Thêm vào giỏ
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col l-3">
                                            <div className="productlist__category-right-bottom-item">
                                                <div className="productlist__category-right-bottom-item-img">
                                                    <img src="https://shop2banh.vn/images/thumbs/2020/11/nhot-maxima-full-syn-10w40-products-1317.jpg" alt="" />
                                                </div>
                                                <div className="productlist__category-right-bottom-item-text">
                                                    <h3 className="productlist__category-right-bottom-item-text-title">Tay thắng Carbon cho Honda Sonic, MSX, CBR150</h3>
                                                    <h3 className="productlist__category-right-bottom-item-text-price">300.000 đ</h3>
                                                </div>
                                                <div className="productlist__category-right-bottom-item-add">
                                                    <button className="productlist__category-right-bottom-item-add-btn">
                                                        <FaCartPlus/> Thêm vào giỏ
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col l-3">
                                            <div className="productlist__category-right-bottom-item">
                                                <div className="productlist__category-right-bottom-item-img">
                                                    <img src="https://shop2banh.vn/images/thumbs/2020/11/nhot-maxima-full-syn-10w40-products-1317.jpg" alt="" />
                                                </div>
                                                <div className="productlist__category-right-bottom-item-text">
                                                    <h3 className="productlist__category-right-bottom-item-text-title">Tay thắng Carbon cho Honda Sonic, MSX, CBR150</h3>
                                                    <h3 className="productlist__category-right-bottom-item-text-price">300.000 đ</h3>
                                                </div>
                                                <div className="productlist__category-right-bottom-item-add">
                                                    <button className="productlist__category-right-bottom-item-add-btn">
                                                        <FaCartPlus/> Thêm vào giỏ
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col l-3">
                                            <div className="productlist__category-right-bottom-item">
                                                <div className="productlist__category-right-bottom-item-img">
                                                    <img src="https://shop2banh.vn/images/thumbs/2020/11/nhot-maxima-full-syn-10w40-products-1317.jpg" alt="" />
                                                </div>
                                                <div className="productlist__category-right-bottom-item-text">
                                                    <h3 className="productlist__category-right-bottom-item-text-title">Tay thắng Carbon cho Honda Sonic, MSX, CBR150</h3>
                                                    <h3 className="productlist__category-right-bottom-item-text-price">300.000 đ</h3>
                                                </div>
                                                <div className="productlist__category-right-bottom-item-add">
                                                    <button className="productlist__category-right-bottom-item-add-btn">
                                                        <FaCartPlus/> Thêm vào giỏ
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="productlist__category-right-button">
                                    <button className="productlist__category-right-button-btn">
                                        Xem Thêm
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

export default ProductList
