import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { listOrders } from '../actions/OrderActions'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import LoadingBox from '../Components/LoadingBox'
import MessageBox from '../Components/MessageBox'


import '../css/OrderAdmin.css'

function OrderAdmin() {

    const history = useNavigate();
    const orderList = useSelector((state)=>state.orderList)
    const {orders,loading,error} = orderList

    console.log(orderList);

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(listOrders())

    }, [dispatch])


    return (
        <React.Fragment>
            <Header/>
                <div className="order__admin__container">
                    <div className="order__admin__bg login__bg">
                        <div className="order__admin__bg-overlay"></div>
                        <div className="order__admin__bg-title">
                            <h3 className="order__admin__bg-title-text">Quản lý đơn hàng</h3>
                        </div>
                    </div>
                    <div className="grid wide">
                        <div className="order__admin__button-box">
                            <h1 className="order__admin__button-tile">Danh Sách đơn hàng</h1>
                        </div>
                        {loading ? <LoadingBox></LoadingBox> : error ? <MessageBox variant="danger">{error}</MessageBox> 
                        :
                            <table className="order__admin__table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Tên khách hàng</th>
                                        <th>Số điện thoại</th>
                                        <th>Phương thức thanh toán</th>
                                        <th>Ngày đặt mua</th>
                                        <th>Tổng tiền</th>
                                        <th>Đã thanh toán</th>
                                        <th>Đã giao hàng</th>
                                        {/* <th>Tùy Chọn</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((order)=>(
                                        <tr className="order__admin__table-detail">
                                            <td>{order._id}</td>
                                            <td>{order.shippingAddress.fullName}</td>
                                            <td>{order.shippingAddress.phoneNumber}</td>
                                            <td>{order.paymentMethod}</td>
                                            <td><p className="order__admin__table-name">{(order.createdAt)}</p></td>
                                            <td>{(order.totalPrice).toLocaleString()}đ</td>
                                            <td>{order.isPaid ? 'true' :'false'}</td>
                                            <td>{order.isDelivered ? 'true' :'false'}</td>
                                            {/* <td>
                                                <div className="order__admin__table-button">
                                                    <button onClick={()=> {history.push(`/order/${order._id}`)}}>Chi tiết</button>
                                                </div>
                                            </td> */}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        }
                    </div>    
                </div>        
            <Footer/>
        </React.Fragment>
    )
}

export default OrderAdmin
