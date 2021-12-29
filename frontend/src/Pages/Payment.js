// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux';
// import Footer from '../Components/Footer'
// import Header from '../Components/Header'

// function Payment() {

//     const [payment,setPayment] =useState("Thanh toán khi nhận hàng");
//     const dispatch = useDispatch()
//     const handlerSubmit = (e) => {
//         e.preventDefault();
//         dispatch(savePaymentMethod(payment))
        
//     }
//     return (
//         <React.Fragment>
//             <Header/>
//                 <div className="shipping__address__container">
//                     <div className="grid wide">
//                         <div className="row">
//                             <div className="col l-12 shipping__address__flex">
//                                 <form className="shipping__address" onSubmit={handlerSubmit}>
//                                     <div className="shipping__address__title">
//                                         <h1 className="shipping__address__title-text">
//                                             Phương thức thanh toán
//                                         </h1>
//                                     </div>
//                                     <div className="shipping__address__form">
//                                         <div className="shipping__address__form-input">
//                                             <span>Chuyển khoản</span>
//                                             <input value="ck" onChange={(e)=>setPayment(e.target.value)} type="radio"className="shipping__address__input__form-input-ip"/>
//                                         </div>
//                                         <div className="shipping__address__form-input">
//                                             <span>Thanh toán khi nhận hàng</span>
//                                             <input value="tt" onChange={(e)=>setPayment(e.target.value)} type="radio"className="shipping__address__input__form-input-ip"/>
//                                         </div>
//                                     </div>
//                                     <div className="shipping__address__form-button">
//                                         <button className="shipping__address__form-btn">
//                                             Tiếp Tục
//                                         </button>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             <Footer/>
//         </React.Fragment>
//     )
// }

// export default Payment
