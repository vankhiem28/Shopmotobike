import React, { useEffect } from 'react'
import Footer from '../Components/Footer'
import SliderBottom from '../Components/SliderBottom'
import Header from '../Components/Header'
import { Link, useNavigate } from 'react-router-dom' 

import '../css/PlaceOrder.css'
import '../css/Grid.css'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder } from '../actions/OrderActions'
import { ORDER_CREATE_RESET } from '../constants/OrderConstrants'

import LoadingBox from '../Components/LoadingBox'
import MessageBox from '../Components/MessageBox'

function PlaceOrder() {
    const history = useNavigate()

    const cart =useSelector((state)=> state.cart)

    if(!cart.paymentMethod) {
        history('/payment')
    }
    // const toPrice = (num) => Number(num.toFixed(2));
    // cart.itemsPrice = toPrice(
    //     cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
    //   );
    cart.itemsPrice = cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
    cart.shippingPrice = cart.itemsPrice > 1000000 ? (0) :(50000);
    cart.totalPrice = cart.itemsPrice + cart.shippingPrice;


    const orderCreate = useSelector((state)=> state.orderCreate)
    const {loading,success,error,order} = orderCreate;
    const dispatch = useDispatch()

    console.log(order);

    const handlerOrder =() => {
        dispatch(createOrder({...cart, orderItems: cart.cartItems}))

    }

    useEffect(() => {
        if(success) {
            history(`/ordercheck/${order._id}`)
            dispatch({type: ORDER_CREATE_RESET})
        }
    },[dispatch,order,history,success])

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
                                                 Họ tên: {cart.shippingAddress.fullName}
                                             </p>
                                             <p className="order__info-address-bottom-text">
                                                 Địa chỉ: {cart.shippingAddress.address},{cart.shippingAddress.city}
                                             </p>
                                             <p className="order__info-address-bottom-text">
                                                 Số điện thoại: {cart.shippingAddress.phoneNumber}
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
                                                    {cart.paymentMethod}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="order__products-box-left">
                                    {cart.cartItems.map(item=>(
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
                                    ))}
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
                                                    {cart.cartItems.reduce((init,item) =>init + item.price * item.qty ,0).toLocaleString()}đ
                                                </p>
                                            </div>
                                            <div className="order__products-checkout-price">
                                                <p className="order__products-checkout-price-text">
                                                    Phí Vận Chuyển
                                                </p>
                                                <p className="order__products-checkout-price-price">
                                                    50,000đ
                                                    {/* {cart.shippingPrice = cart.itemsPrice > 1000000 ? (0) :(50000)}đ */}
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
                                                    {cart.cartItems.reduce((init,item) =>init + item.price * item.qty ,0).toLocaleString()}đ
                                                    {/* {cart.totalPrice = (cart.itemsPrice)}đ */}

                                                </p>
                                            </div>
                                            <div className="order__products-checkout-button">
                                                <button disabled={cart.cartItems.length === 0} onClick={handlerOrder} className="order__products-checkout-button-btn">
                                                    Đặt Hàng
                                                </button>
                                            </div>
                                            {loading && <LoadingBox></LoadingBox>}
                                            {error && <MessageBox></MessageBox>}
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

export default PlaceOrder
