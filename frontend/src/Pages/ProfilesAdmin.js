import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { detailsUser, updateUserProfile } from '../actions/UserActions'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import LoadingBox from '../Components/LoadingBox'
import MessageBox from '../Components/MessageBox'
import { USER_UPDATE_PROFILE_RESET } from '../constants/UserConstants'


import '../css/ProfilesAdmin.css'

function ProfilesAdmin() {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [comfirmPassword,setComfirmPassword] = useState('')

    
    const dispatch =useDispatch()

    const userSignin = useSelector((state)=>state.userSignin)
    const {userInfo} = userSignin

    const userDetails = useSelector((state)=>state.userDetails)
    const {loading,error,user} = userDetails


    const userUpdateProfile = useSelector((state)=>state.userUpdateProfile)
    const {loading: loadingUpdate ,error :errorUpdate ,success} = userUpdateProfile

    console.log(user);

    useEffect(() => { 
        if(!user) {
            dispatch({type:USER_UPDATE_PROFILE_RESET})
            dispatch(detailsUser(userInfo._id))
        }else {
            setName(user.name)
            setEmail(user.email)
        }  
    },[dispatch, userInfo._id],user)


    console.log(userDetails);

    const handleSubmit = (e) => {
        e.preventDefault()
        if(password !== comfirmPassword) {
            alert("Please enter your password")
        }else {
            dispatch(updateUserProfile({userId: user._id,name,email,password}))
        }
    }
    
    return (
        <React.Fragment>
             <Header/>
                <div className="ProfilesAdmin__container">
                    <div className="ProfilesAdmin__bg login__bg">
                        <div className="ProfilesAdmin__bg-overlay"></div>
                        <div className="ProfilesAdmin__bg-title">
                            <h3 className="ProfilesAdmin__bg-title-text">Thông tin tài khoản</h3>
                        </div>
                    </div>
                    <div className="grid wide">
                        <div className="ProfilesAdmin__button-box">
                            <h1 className="ProfilesAdmin__button-tile">Thông tin người dùng</h1>
                        </div>
                        {loadingUpdate && <LoadingBox className="ProfilesAdmin__loading"></LoadingBox>}
                        {errorUpdate && <MessageBox>{errorUpdate}</MessageBox>}
                        {success && <h1 className="ProfilesAdmin__button-tile-message" >Sửa thông tin thành công</h1>}
                        {loading ? (<LoadingBox></LoadingBox>) : error ? (<MessageBox></MessageBox>)
                        :
                            <div className="row">
                                <div className="col l-12 ProfilesAdmin__flex">
                                    <form className="ProfilesAdmin" onSubmit={handleSubmit} >
                                        <div className="ProfilesAdmin__form">
                                            <div className="ProfilesAdmin__form-input">
                                                <span>Tên</span>
                                                <input value={name} onChange={(e)=>(setName(e.target.value))} className="ProfilesAdmin__input__form-input-ip"/>
                                            </div>
                                            <div className="ProfilesAdmin__form-input">
                                                <span>Email</span>
                                                <input value={email} onChange={(e)=>(setEmail(e.target.value))} className="ProfilesAdmin__input__form-input-ip"/>
                                            </div>
                                            <div className="ProfilesAdmin__form-input">
                                                <span>Mật khẩu</span>
                                                <input type="password" onChange={(e)=>(setPassword(e.target.value))} className="ProfilesAdmin__input__form-input-ip"/>
                                            </div>
                                            <div className="ProfilesAdmin__form-input">
                                                <span>Nhập lại mật khẩu</span>
                                                <input type="password" onChange={(e)=>(setComfirmPassword(e.target.value))} className="ProfilesAdmin__input__form-input-ip"/>
                                            </div>                                     
                                        </div>
                                        <div className="ProfilesAdmin__form-button">
                                            <button className="ProfilesAdmin__form-btn">
                                                Chỉnh sửa
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        }
                    </div>
                </div>
            <Footer/>
        </React.Fragment>
    )
}

export default ProfilesAdmin
