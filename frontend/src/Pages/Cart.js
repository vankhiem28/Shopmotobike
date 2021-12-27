import React, {useEffect,useState} from 'react'
import { useParams,useLocation, Link,useNavigate } from 'react-router-dom'
import NumberFormat from 'react-number-format'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import SliderBottom from '../Components/SliderBottom'

import '../css/Grid.css'
import '../css/Cart.css'
import { addToCart, removeFromCart } from '../actions/CartActions'
import { useDispatch, useSelector } from 'react-redux'
import MessageBox from '../Components/MessageBox'

function Cart(props) {
    const {id} = useParams()
    const {search} = useLocation()
    const productId = (id)
    const navigate = useNavigate()
    const qty = search ? Number(search.split('=')[1]) : 1

    const cart = useSelector(state=>state.cart)
    const {cartItems} =cart


    const dispatch = useDispatch()
    useEffect(() => {
        if(productId) {
            dispatch(addToCart(productId,qty))
        }
    },[dispatch,productId,qty])


    const handleDeleteItemFromCart = (id) => {
        dispatch(removeFromCart(id))
    }

    const handleButtonPay = () => {
        navigate(`/signin?redirec=shipping`)
    }
    
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
                                {
                                    cartItems.length === 0 ? <h2 className="cart__title-text">Chưa Có Sản Phẩm</h2> :<h2 className="cart__title-text">Sản Phẩm Của Bạn</h2>
                                }
                                <div className="cart__button-return">
                                    <Link to="/">
                                        <button className="cart__button-return-btn">
                                            Tiếp Tục Mua Hàng
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col l-8">
                                    <div className="cart__products-box-left">
                                        {cartItems.map(item=>(
                                            <div className="cart__products-item">
                                                <div className="cart__products-item-image">
                                                    <img src={item.image} alt="" className="cart__products-item-img" />
                                                </div>
                                                <div className="cart__products-item-box">
                                                    <div className="cart__products-item-text">
                                                        <Link className='cart__link' to={`/product/${item.product}`}>
                                                        <h3 className="cart__products-item-text-name">
                                                            {item.name}
                                                        </h3>
                                                        </Link>
                                                        <p className="cart__products-item-text-price">
                                                            {item.price.toLocaleString()}đ
                                                         </p>   
                                                    </div> 
                                                    <div className="cart__products-item-input">
                                                        <select type="text" className="cart__products-item-input-ip cart__products-item-input-select" 
                                                            value={item.qty} 
                                                            onChange={e=> dispatch(addToCart(item.product,Number(e.target.value)))}
                                                        >
                                                            {
                                                                [...Array(item.countInStock).keys()].map((x) => (
                                                                    <option value={x+1} key={x+1}>
                                                                        {x+1}
                                                                    </option>
                                                                )
                                                            )}
                                                        </select>
                                                    </div>
                                                    <div className="cart__products-item-button">
                                                        <button onClick={()=>handleDeleteItemFromCart(item.product)} className="cart__products-item-button-btn">
                                                            Xóa
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        {/* <div className="cart__products-item">
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
                                        </div> */}
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
                                            <div className="cart__products-checkout-price cart__products-checkout-price-qty">
                                                <p className="cart__products-checkout-price-text">
                                                    Tổng Số lượng
                                                </p>
                                                <p className="cart__products-checkout-price-price">
                                                    {cartItems.reduce((init,item) =>init + item.qty,0)}
                                                </p>
                                            </div>
                                            <div className="cart__products-checkout-price">
                                                <p className="cart__products-checkout-price-text">
                                                    Tổng Tiền Sản Phẩm
                                                </p>
                                                <p className="cart__products-checkout-price-price">
                                                    {cartItems.reduce((init,item) =>init + item.price * item.qty ,0).toLocaleString()}đ
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
                                                    50.000đ
                                                </p>
                                            </div>
                                            <div className="cart__products-checkout-price">
                                                <p className="cart__products-checkout-price-text">
                                                    Tổng Tiền
                                                </p>
                                                <p className="cart__products-checkout-price-price">
                                                {cartItems.reduce((init,item) =>init + item.price * item.qty,0).toLocaleString()}đ
                                                </p>
                                            </div>
                                            <div className="cart__products-checkout-button">
                                                <button onClick={handleButtonPay} disabled={cartItems.length===0} className="cart__products-checkout-button-btn">
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
