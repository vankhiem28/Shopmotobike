import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

import '../css/ShippingAddress.css'
import '../css/Grid.css'

import { useDispatch, useSelector } from 'react-redux'
import { savePaymentMethod, saveShippingAddress } from '../actions/CartActions'

function ShippingAddress() {

    const history = useNavigate()
    const userSignin = useSelector((state)=>state.userSignin)
    const {userInfo}=userSignin
    const cart = useSelector(state=>state.cart)
    const {shippingAddress} =cart;

    if(!userInfo || !shippingAddress) {
        history('/signin')
    }
    const [fullName,setFullName] = useState(shippingAddress.fullName)
    const [email,setEmail] = useState(shippingAddress.email)
    const [phoneNumber,setPhoneNumber] = useState(shippingAddress.phoneNumber)
    const [address,setAddress] = useState(shippingAddress.address)
    const [city,setCity] = useState(shippingAddress.city)

    const dispatch = useDispatch()

    const handlerSubmit = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({fullName, phoneNumber,email,address,city}))
        history('/payment')
    }

    return (
        <React.Fragment>
            <Header/>
                <div className="shipping__address__container">
                    <div className="shipping__address__bg">
                        <div className="shipping__address__bg-overlay"></div>
                        <div className="shipping__address__bg-title">
                            <h3 className="shipping__address__bg-title-text">Thông Tin Giao Hàng</h3>
                        </div>
                    </div>
                    <div className="grid wide">
                        <div className="row">
                            <div className="col l-12 shipping__address__flex">
                                <form className="shipping__address" onSubmit={handlerSubmit}  >
                                    <div className="shipping__address__title">
                                        <h1 className="shipping__address__title-text">
                                            Thông Tin Giao Hàng
                                        </h1>
                                    </div>
                                    <div className="shipping__address__form">
                                        <div className="shipping__address__form-input">
                                            <span>Họ và tên</span>
                                            <input value={fullName} onChange={(e)=>setFullName(e.target.value)} type="text"  placeholder="Họ và tên" className="shipping__address__input__form-input-ip"/>
                                        </div>
                                        <div className="shipping__address__form-input">
                                            <span>Email</span>
                                            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email"  placeholder="Email" className="shipping__address__input__form-input-ip"/>
                                        </div>
                                        <div className="shipping__address__form-input">
                                            <span>Số điện thoại</span>
                                            <input value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} type="text"  placeholder="Số điện thoại" className="shipping__address__input__form-input-ip"/>
                                        </div>                                        
                                        <div className="shipping__address__form-input">
                                            <span>Địa chỉ</span>
                                            <input value={address} onChange={(e)=>setAddress(e.target.value)} type="text"  placeholder="Đỉa chỉ" className="shipping__address__input__form-input-ip"/>
                                        </div>
                                        <div className="shipping__address__form-input">
                                            <span>Thành phố</span>
                                            <input value={city} onChange={(e)=>setCity(e.target.value)} type="text"  placeholder="Thành phố" className="shipping__address__input__form-input-ip"/>
                                        </div>
                                    </div>
                                    <div className="shipping__address__form-button">
                                        <button className="shipping__address__form-btn" >
                                            Tiếp Tục
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
        </React.Fragment>
    )
}

export default ShippingAddress
