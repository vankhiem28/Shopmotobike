import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

import {Link,useLocation,useNavigate} from 'react-router-dom'

import '../css/Grid.css'
import '../css/Register.css'
import { useDispatch, useSelector } from 'react-redux'
import { signin } from '../actions/UserActions'
import LoadingBox from '../Components/LoadingBox'
import MessageBox from '../Components/MessageBox'

function Login() {

    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')
    const {search} =useLocation();
    const history = useNavigate()
    const redirect = search ? search.split('=')[1] :'/'

    const userSignin = useSelector((state)=>state.userSignin)
    const {userInfo,error,loading} = userSignin

    const dispatch = useDispatch()

    const handlerSubmit = (e) => {
        e.preventDefault()
        dispatch(signin(email, password))
    }

    useEffect(() => {
        if(userInfo) {
            history(redirect)
        }
    },[history,redirect,userInfo])

    return (
        <div>
            <Header/>
                <div className="register__container">
                    <div className="register__bg login__bg">
                        <div className="register__bg-overlay"></div>
                        <div className="register__bg-title">
                            <h3 className="register__bg-title-text">Đăng Nhập</h3>
                        
                        </div>
                    </div>
                    <div className="grid wide">
                        <div className="row">
                            <div className="col l-12 register__flex">
                                <form className="register"  >
                                    <div className="register__title">
                                        <h1 className="register__title-text">
                                            Đăng nhập tài khoản
                                        </h1>
                                        {error && <h1 className="login__error-mess"> Sai Thông Tin Đăng Nhập </h1> }
                                    </div>
                                    <div className="register__form">
                                        <div className="register__form-input">
                                            <span>Email</span>
                                            <input onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Email" className="register__input__form-input-ip"/>
                                        </div>
                                        <div className="register__form-input">
                                            <span>Mật Khẩu</span>
                                            <input onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Mật Khẩu" className="register__input__form-input-ip"/>
                                        </div>                                        
                                    </div>
                                    <div className="login__question">
                                        <h3 className="login__question-text">Bạn chưa có tài khoản ?</h3>
                                       <Link to={`/register?redirect=${redirect}`} >
                                            <h3 className="login__question-register">Đăng Ký Ngay</h3>
                                       </Link> 
                                    </div>
                                    <div className="register__form-button">
                                        <button className="register__form-btn" onClick={handlerSubmit}>
                                            Đăng Nhập
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default Login
