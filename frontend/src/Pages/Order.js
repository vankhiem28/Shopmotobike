import React, { useEffect } from 'react'
import Footer from '../Components/Footer'
import SliderBottom from '../Components/SliderBottom'
import Header from '../Components/Header'
import { Link,useParams } from 'react-router-dom' 

import '../css/PlaceOrder.css'
import '../css/Grid.css'
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
            <div className="order__container">
                <div className="order__bg">
                    <div className="order__bg-overlay"></div>
                    <div className="order__bg-title">
                        <h2 className="order__bg-title-text">Thanh Toán</h2>
                    </div>
                </div>
                    <div className="grid wide">
                            <div className="order__title">
                                <h1>
                                    {/* {order._id} */}
                                </h1>
                            </div>
                            <div className="row">
                                <div className="col l-8">
                                    <div className="order__info">
                                        <div className="order__info-address">
                                         <div className="order__info-address-top">
                                             <h3 className="order__info-address-top-text">
                                                 Thông Tin Thanh Toán
                                             </h3>
                                         </div>
                                         <div className="order__info-address-bottom">
                                             <p className="order__info-address-bottom-text">
                                                 {/* Họ tên: {order.shippingAddress.fullName} */}
                                             </p>
                                             <p className="order__info-address-bottom-text">
                                                 {/* Địa chỉ: {order.shippingAddress.address},{order.shippingAddress.city} */}
                                             </p>
                                             <p className="order__info-address-bottom-text">
                                                 {/* Số điện thoại: {order.shippingAddress.phoneNumber} */}
                                             </p>
                                         </div>
                                        </div>
                                        <div className="order__info-payment">
                                            <div className="order__info-payment-top">
                                                <h3 className="order__info-payment-top-text">
                                                    Phương thức thanh toán
                                                </h3>
                                            </div>
                                            <div className="order__info-payment-bottom">
                                                <h3 className="order__info-payment-bottom-text">
                                                    {/* {order.paymentMethod} */}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="order__products-box-left">
                                        {/* {order.orderItems.map(item=>(
                                                <div className="order__products-item">
                                                    <div className="order__products-item-image">
                                                        <img src={item.image} alt="" className="order__products-item-img" />
                                                    </div>
                                                    <div className="order__products-item-box">
                                                        <div className="order__products-item-text">
                                                            <Link className='cart__link' to={`/product/${item.product}`}>
                                                                <h3 className="order__products-item-text-name">                                                    
                                                                    {item.name}
                                                                </h3>
                                                            </Link>    
                                                            <p className="order__products-item-text-price">
                                                                    {item.qty} x {item.price.toLocaleString()} = {(item.qty * item.price).toLocaleString()}
                                                            </p>   
                                                        </div> 
                                                    </div>
                                                </div>
                                        ))} */}
                                    </div>
                                </div>
                                <div className="col l-4">
                                    <div className="order__products-box-right">
                                        <div className="order__products-checkout-title">
                                            <h2 className="order__products-checkout-title-text">
                                                Thanh Toán
                                            </h2>
                                        </div>
                                        <div className="order__products-checkout-box">
                                            <div className="order__products-checkout-price">
                                                <p className="order__products-checkout-price-text">
                                                    Tổng Tiền Sản Phẩm
                                                </p>
                                                <p className="order__products-checkout-price-price">
                                                    {/* {cart.itemsPrice = cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0).toLocaleString()}đ */}
                                                    {/* {order.orderItems.reduce((init,item) =>init + item.price * item.qty ,0).toLocaleString()}đ */}
                                                </p>
                                            </div>
                                            <div className="order__products-checkout-price">
                                                <p className="order__products-checkout-price-text">
                                                    Phí Vận Chuyển
                                                </p>
                                                <p className="order__products-checkout-price-price">
                                                    50,000đ
                                                </p>
                                            </div>
                                            <div className="order__products-checkout-price">
                                                <p className="order__products-checkout-price-text">
                                                    Giảm Giá Phí Vận Chuyển
                                                </p>
                                                <p className="order__products-checkout-price-price">
                                                    50.000đ
                                                </p>
                                            </div>
                                            <div className="order__products-checkout-price">
                                                <p className="order__products-checkout-price-text">
                                                    Tổng Tiền
                                                </p>
                                                <p className="order__products-checkout-price-price">
                                                    {/* {order.orderItems.reduce((init,item) =>init + item.price * item.qty ,0).toLocaleString()}đ */}
                                                    {/* {cart.totalPrice = (cart.itemsPrice)}đ */}
                                                </p>
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

export default Order
