import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

import { register,signin } from '../actions/UserActions'

import '../css/Grid.css'
import '../css/Register.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

function Register() {

    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')
    const [name,setName] =useState('')
    const [confirmPassword,setConfirmPassword] =useState('')
    const {search} =useLocation();
    const history = useNavigate()
    const redirect = search ? search.split('=')[1] :'/'

    const userRegister = useSelector((state)=> state.userRegister)
    const {userInfo,error} = userRegister

    const dispatch = useDispatch()

    const handlerSubmit = (e) => {
        e.preventDefault()
        if(password !== confirmPassword)
        {
            alert('Mật khẩu nhập lại không chính xác')
        }else {

            dispatch(register(name,email,password))
        }
    }

    useEffect(() => {
        if(userInfo) {
            history(redirect)
        }
    },[history,redirect,userInfo])

    return (
        <React.Fragment>
            <Header/>
                <div className="register__container">
                    <div className="register__bg">
                        <div className="register__bg-overlay"></div>
                        <div className="register__bg-title">
                            <h3 className="register__bg-title-text">Tạo Tài Khoản</h3>
                        </div>
                    </div>
                    <div className="grid wide">
                        <div className="row">
                            <div className="col l-12 register__flex">
                                <from className="register" >
                                    <div className="register__title">
                                        <h1 className="register__title-text">
                                            Đăng ký tài khoản
                                        </h1>
                                        {error && <h1 className="login__error-mess"> Sai Thông Tin Đăng Nhập </h1> }
                                    </div>
                                    <div className="register__form">
                                        <div className="register__form-input">
                                            <span>Tên</span>
                                            <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Tên" className="register__input__form-input-ip"/>
                                        </div>
                                        <div className="register__form-input">
                                            <span>Email</span>
                                            <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="register__input__form-input-ip"/>
                                        </div>
                                        <div className="register__form-input">
                                            <span>Mật Khẩu</span>
                                            <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Mật Khẩu" className="register__input__form-input-ip"/>
                                        </div>                                        
                                        <div className="register__form-input">
                                            <span>Nhập Lại Mật Khẩu</span>
                                            <input type="password" onChange={(e)=>setConfirmPassword(e.target.value)} placeholder="Nhập Lại Mật Khẩu" className="register__input__form-input-ip"/>
                                        </div>
                                    </div>
                                    <div className="login__question">
                                        <h3 className="login__question-text">Bạn đã có tài khoản ?</h3>
                                       <Link to={`/signin?redirect=${redirect}`} >
                                            <h3 className="login__question-register">Đăng Nhập Ngay</h3>
                                       </Link> 
                                    </div>
                                    <div className="register__form-button">
                                        <button className="register__form-btn" onClick={handlerSubmit}>
                                            Đăng ký
                                        </button>
                                    </div>
                                </from>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
        </React.Fragment>
    )
}

export default Register
