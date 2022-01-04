import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { savePaymentMethod } from '../actions/CartActions';
import Footer from '../Components/Footer'
import Header from '../Components/Header'


import '../css/Payment.css'

function Payment() {

    const history = useNavigate()

    const [payment,setPayment] =useState("Thanh toán khi nhận hàng");
    const dispatch = useDispatch()
    const handlerSubmit = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(payment))
        history('/placeorder')
    }
    return (
        <React.Fragment>
            <Header/>
                <div className="payment__address__container">
                    <div className="grid wide">
                        <div className="row">
                            <div className="col l-12 payment__address__flex">
                                <form className="payment__address" onSubmit={handlerSubmit}>
                                    <div className="payment__address__title">
                                        <h1 className="payment__address__title-text">
                                            Phương thức thanh toán
                                        </h1>
                                    </div>
                                    <div className="payment__address__form">
                                        <div className="payment__address__form-input">
                                            <span>Chuyển khoản</span>
                                            <input name="payment" value="Chuyển khoản" onChange={(e)=>setPayment(e.target.value)} type="radio" className="payment__address__input__form-input-ip"/>
                                        </div>
                                        <div className="payment__address__form-input">
                                            <span>Thanh toán khi nhận hàng</span>
                                            <input name="payment" value="Thanh toán khi nhận hàng" onChange={(e)=>setPayment(e.target.value)} type="radio" className="payment__address__input__form-input-ip"/>
                                        </div>
                                    </div>
                                    <div className="payment__address__form-button">
                                        <button className="payment__address__form-btn">
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

export default Payment
