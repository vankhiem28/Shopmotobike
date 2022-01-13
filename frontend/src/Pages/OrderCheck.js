import React, { useEffect } from 'react'
import Footer from '../Components/Footer'
import SliderBottom from '../Components/SliderBottom'
import Header from '../Components/Header'
import { Link,useParams } from 'react-router-dom' 
import { FaCheckCircle,FaHandHoldingHeart } from "react-icons/fa";

import '../css/Grid.css'
import '../css/OrderCheck.css'

import { useDispatch, useSelector } from 'react-redux'
import { createOrder, detailsOrder } from '../actions/OrderActions'


function Order() {
    const {id} = useParams()
    const orderId = (id)
    const dispatch = useDispatch()


    const orderDetails = useSelector(state => state.orderDetails)
    const {loading,error,order} = orderDetails

    console.log(order);

    useEffect(() => {
        dispatch(detailsOrder(orderId))
    },[dispatch, orderId])

    return (
        <React.Fragment>
            <Header/>
            <div className="ordercheck__container">
                    <div className="grid wide">
                        <div className="ordercheck__contain">
                            <div className="ordercheck__title">
                                <h1 className="ordercheck__title-text">
                                    Đặt Hàng Thành Công
                                </h1>
                                <FaCheckCircle className="ordercheck__title-icon"/>
                            </div>
                            <div className="ordercheck__id">
                                <p className="ordercheck__id-text">Mã đơn hàng của bạn: {orderId}</p>
                            </div>
                            <div className="ordercheck__message">
                                <p className="ordercheck__message-text">Cảm ơn bạn đã đặt hàng <FaHandHoldingHeart className="ordercheck__message-icon"/> . Cửa hàng sẽ liên hệ với bạn để xác nhận thông tin !</p>
                            </div>
                        </div>
                    </div>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default Order
