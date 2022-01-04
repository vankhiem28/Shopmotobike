import React, { useEffect, useRef, useState } from 'react'

import Header from '../Components/Header'
import Footer from '../Components/Footer'

import {FaListUl,FaSortDown,FaCaretRight,FaCartPlus,FaChevronRight,FaChevronLeft} from 'react-icons/fa'

import '../css/Grid.css'
import '../css/ProductList.css'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/ProductActions'
import { Link } from 'react-router-dom'

function ProductList() {

    const ref =useRef()
    const ref1 =useRef()
    const ref2 =useRef()
    const ref3 =useRef()
    const ref4 =useRef()

    const pk =ref.current
    const pk1 =ref1.current
    const pk2 =ref2.current
    const pk3 =ref3.current
    const pk4 =ref4.current

    const [dcxm,setDcxm] =useState(true)
    const [pttt,setPttt] =useState(false)
    const [vbx,setVbx] =useState(false)
    const [nxm,setNxm] =useState(false)
    const [pkk,setPkk] =useState(false)


    const dispatch =useDispatch()
    const productList = useSelector((state) => state.productList)
    const {loading, error, products} = productList

    useEffect(() => {
        dispatch(listProducts());
    }, [])


    const itemDcxm=  products.filter(product =>(
        product.category === "Đồ chơi xe máy"
    ))
    const itemPttt=  products.filter(product =>(
        product.category === "Phụ tùng thay thế"
    ))
    const itemVbx=  products.filter(product =>(
        product.category === "Vỏ bánh xe"
    ))
    const itemNxm=  products.filter(product =>(
        product.category === "Nhớt xe máy"
    ))
    const itemPkk=  products.filter(product =>(
        product.category === "Phụ kiện khác"
    ))



    const handelsw = () => {
        setDcxm(true)
        setPttt(false)
        setVbx(false)
        setNxm(false)
        setPkk(false)
        pk.classList.add("productlist__category-left-filter-link--active")
        pk1.classList.remove("productlist__category-left-filter-link--active")
        pk2.classList.remove("productlist__category-left-filter-link--active")
        pk3.classList.remove("productlist__category-left-filter-link--active")
        pk4.classList.remove("productlist__category-left-filter-link--active")
        
    }
    const handelsw1 = () => {
        setPttt(true)
        setDcxm(false)
        setVbx(false)
        setNxm(false)
        setPkk(false)
        pk.classList.remove("productlist__category-left-filter-link--active")
        pk1.classList.add("productlist__category-left-filter-link--active")
        pk2.classList.remove("productlist__category-left-filter-link--active")
        pk3.classList.remove("productlist__category-left-filter-link--active")
        pk4.classList.remove("productlist__category-left-filter-link--active")
    }

    const handelsw2 = () => {
        setVbx(true)
        setPttt(false)
        setDcxm(false)
        setNxm(false)
        setPkk(false)
        pk.classList.remove("productlist__category-left-filter-link--active")
        pk1.classList.remove("productlist__category-left-filter-link--active")
        pk2.classList.add("productlist__category-left-filter-link--active")
        pk3.classList.remove("productlist__category-left-filter-link--active")
        pk4.classList.remove("productlist__category-left-filter-link--active")
    }    
    const handelsw3 = () => {
        setNxm(true)
        setDcxm(false)
        setVbx(false)
        setPttt(false)
        setPkk(false)
        pk.classList.remove("productlist__category-left-filter-link--active")
        pk1.classList.remove("productlist__category-left-filter-link--active")
        pk2.classList.remove("productlist__category-left-filter-link--active")
        pk3.classList.add("productlist__category-left-filter-link--active")
        pk4.classList.remove("productlist__category-left-filter-link--active")
    }    
    const handelsw4 = () => {
        setNxm(false)
        setDcxm(false)
        setVbx(false)
        setPttt(false)
        setPkk(true)
        pk.classList.remove("productlist__category-left-filter-link--active")
        pk1.classList.remove("productlist__category-left-filter-link--active")
        pk2.classList.remove("productlist__category-left-filter-link--active")
        pk3.classList.remove("productlist__category-left-filter-link--active")
        pk4.classList.add("productlist__category-left-filter-link--active")
    }

    return (
        <React.Fragment>
            <Header/>
            <div className="productlist__container">
                <div className="grid wide">
                    <div className="productlist__nav">
                        <p className="productlist__nav-text">Trang chủ &gt; Danh sách sảm phẩm</p>
                    </div>
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
                                        <li className="productlist__category-left-filter-item ">                                                                
                                            <p onClick={handelsw} ref={ref} href="" className="productlist__category-left-filter-link productlist__category-left-filter-link--active">
                                                Đồ chơi xe máy
                                            </p>
                                        </li>
                                        <li className="productlist__category-left-filter-item">
                                            <p onClick={handelsw1} ref={ref1} href="" className="productlist__category-left-filter-link">                
                                                Phụ tùng thay thế
                                            </p>
                                        </li>
                                        <li className="productlist__category-left-filter-item">
                                            <p ref={ref2} onClick={handelsw2} href="" className="productlist__category-left-filter-link">                
                                                Vỏ bánh xe
                                            </p>
                                        </li>
                                        <li className="productlist__category-left-filter-item">
                                            <p ref={ref3} onClick={handelsw3} href="" className="productlist__category-left-filter-link">                
                                                Nhớt xe máy
                                            </p>
                                        </li>
                                        <li className="productlist__category-left-filter-item">
                                            <p ref={ref4} onClick={handelsw4} href="" className="productlist__category-left-filter-link">                
                                                Phụ kiện khác
                                            </p>
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
                                            <div className="productlist__category-button">
                                                <button className="productlist__category-button-btn"><FaChevronLeft className='productlist__category-button-btn-icon'/></button>
                                                <button className="productlist__category-button-btn"><FaChevronRight className='productlist__category-button-btn-icon'/></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="productlist__category-right-bottom">
                                    <div className="row">
                                    {dcxm && 
                                            itemDcxm.map((item)=>(
                                                <div className="col l-3">
                                                    <div className="productlist__category-right-bottom-item">
                                                        <Link className="product__item-router" to={`/product/${item._id}`}>
                                                            <div className="productlist__category-right-bottom-item-img">
                                                                <img src={item.image} alt="" />
                                                            </div>
                                                            <div className="productlist__category-right-bottom-item-text">
                                                                <h3 className="productlist__category-right-bottom-item-text-title">{item.name}</h3>
                                                                <h3 className="productlist__category-right-bottom-item-text-price">{item.price.toLocaleString()}đ</h3>
                                                            </div>
                                                        </Link>    
                                                        <div className="productlist__category-right-bottom-item-add">
                                                            <button className="productlist__category-right-bottom-item-add-btn">
                                                                <FaCartPlus/> Thêm vào giỏ
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }

                                    {pttt && 
                                        itemPttt.map((item)=>(
                                                <div className="col l-3">
                                                    <div className="productlist__category-right-bottom-item">
                                                        <Link className="product__item-router" to={`/product/${item._id}`}>
                                                            <div className="productlist__category-right-bottom-item-img">
                                                                <img src={item.image} alt="" />
                                                            </div>
                                                            <div className="productlist__category-right-bottom-item-text">
                                                                <h3 className="productlist__category-right-bottom-item-text-title">{item.name}</h3>
                                                                <h3 className="productlist__category-right-bottom-item-text-price">{item.price.toLocaleString()}đ</h3>
                                                            </div>
                                                        </Link>    
                                                        <div className="productlist__category-right-bottom-item-add">
                                                            <button className="productlist__category-right-bottom-item-add-btn">
                                                                <FaCartPlus/> Thêm vào giỏ
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                        ))
                                    }

                                    {vbx && 
                                        itemVbx.map((item)=>(
                                                <div className="col l-3">
                                                    <div className="productlist__category-right-bottom-item">
                                                        <Link className="product__item-router" to={`/product/${item._id}`}>
                                                            <div className="productlist__category-right-bottom-item-img">
                                                                <img src={item.image} alt="" />
                                                            </div>
                                                            <div className="productlist__category-right-bottom-item-text">
                                                                <h3 className="productlist__category-right-bottom-item-text-title">{item.name}</h3>
                                                                <h3 className="productlist__category-right-bottom-item-text-price">{item.price.toLocaleString()}đ</h3>
                                                            </div>
                                                        </Link>    
                                                        <div className="productlist__category-right-bottom-item-add">
                                                            <button className="productlist__category-right-bottom-item-add-btn">
                                                                <FaCartPlus/> Thêm vào giỏ
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                        ))
                                    }

                                    {nxm && 
                                        itemNxm.map((item)=>(
                                                <div className="col l-3">
                                                    <div className="productlist__category-right-bottom-item">
                                                        <Link className="product__item-router" to={`/product/${item._id}`}>
                                                            <div className="productlist__category-right-bottom-item-img">
                                                                <img src={item.image} alt="" />
                                                            </div>
                                                            <div className="productlist__category-right-bottom-item-text">
                                                                <h3 className="productlist__category-right-bottom-item-text-title">{item.name}</h3>
                                                                <h3 className="productlist__category-right-bottom-item-text-price">{item.price.toLocaleString()}đ</h3>
                                                            </div>
                                                        </Link>    
                                                        <div className="productlist__category-right-bottom-item-add">
                                                            <button className="productlist__category-right-bottom-item-add-btn">
                                                                <FaCartPlus/> Thêm vào giỏ
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                        ))
                                    }
                                    {pkk && 
                                        itemPkk.map((item)=>(
                                                <div className="col l-3">
                                                    <div className="productlist__category-right-bottom-item">
                                                        <Link className="product__item-router" to={`/product/${item._id}`}>
                                                            <div className="productlist__category-right-bottom-item-img">
                                                                <img src={item.image} alt="" />
                                                            </div>
                                                            <div className="productlist__category-right-bottom-item-text">
                                                                <h3 className="productlist__category-right-bottom-item-text-title">{item.name}</h3>
                                                                <h3 className="productlist__category-right-bottom-item-text-price">{item.price.toLocaleString()}đ</h3>
                                                            </div>
                                                        </Link>    
                                                        <div className="productlist__category-right-bottom-item-add">
                                                            <button className="productlist__category-right-bottom-item-add-btn">
                                                                <FaCartPlus/> Thêm vào giỏ
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                        ))
                                    }
                                        {/* {products.map((item)=>(
                                            <div className="col l-3">
                                                <div className="productlist__category-right-bottom-item">
                                                    <Link className="product__item-router" to={`/product/${item._id}`}>
                                                        <div className="productlist__category-right-bottom-item-img">
                                                            <img src={item.image} alt="" />
                                                        </div>
                                                        <div className="productlist__category-right-bottom-item-text">
                                                            <h3 className="productlist__category-right-bottom-item-text-title">{item.name}</h3>
                                                            <h3 className="productlist__category-right-bottom-item-text-price">{item.price.toLocaleString()}đ</h3>
                                                        </div>
                                                    </Link>    
                                                    <div className="productlist__category-right-bottom-item-add">
                                                        <button className="productlist__category-right-bottom-item-add-btn">
                                                            <FaCartPlus/> Thêm vào giỏ
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))} */}
                                        {/* <div className="col l-3">
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
                                        </div> */}
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
