import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

import {Link,useLocation,useNavigate} from 'react-router-dom'

import '../css/ProductsAdmin.css'
import '../css/Grid.css'
import { useDispatch, useSelector } from 'react-redux'
import { signin } from '../actions/UserActions'
import LoadingBox from '../Components/LoadingBox'
import MessageBox from '../Components/MessageBox'
import { deleteProducts, listProducts, saveProduct } from '../actions/ProductActions'

function ProductsAdmin() {
    const [modalVisible,setModalVisible] = useState(false)
    const [id,setId] =useState('')
    const [name,setName] =useState('')
    const [image,setImage] =useState('')
    const [image_left,setImage_left] =useState('')
    const [image_bottom,setImage_bottom] =useState('')
    const [image_right,setImage_right] =useState('')
    const [brand,setBrand] = useState('')
    const [category,setCategory] = useState('')
    const [description,setDescription] = useState('')
    const [price,setPrice] = useState('')
    const [countInStock,setCountInStock] = useState('')

    const productList = useSelector((state)=>state.productList)
    const {products,error,loading} = productList

    
    const productSave = useSelector((state)=>state.productSave)
    const {error:errorSave,loading:loadingSave,success:successSave} = productSave  
    
    const productDelete = useSelector((state)=>state.productDelete)
    // const {loading:loadingDelete,success:successDelete} = productDelete  
    const dispatch = useDispatch()
    useEffect(() => {
        if(successSave) {
            setModalVisible(false)
        }
        dispatch(listProducts())
        return () => {

        }
    }, [successSave])

    
    const handlerSubmit = (e) => {
        e.preventDefault()
        dispatch(saveProduct({_id:id ,name,image,image_left,image_right,image_bottom,brand,category,description,price,countInStock}))
    }
    
    const openModal = (product) => {
        setModalVisible(true)
        setId(product._id)
        setName(product.name)
        setImage(product.image)
        setImage_left(product.image_left)
        setImage_bottom(product.image_bottom)
        setImage_right(product.image_right)
        setBrand(product.brand)
        setCategory(product.category)
        setDescription(product.description)
        setPrice(product.price)
        setCountInStock(product.countInStock)
    }


    const handleDelete = (product) => {
        dispatch(deleteProducts(product._id));
    }

    return (
        <div>
            <Header/>
                <div className="ProductsAdmin__container">
                    <div className="ProductsAdmin__bg login__bg">
                        <div className="ProductsAdmin__bg-overlay"></div>
                        <div className="ProductsAdmin__bg-title">
                            <h3 className="ProductsAdmin__bg-title-text">Qu???n l?? s???n ph???m</h3>
                        </div>
                    </div>
                    <div className="grid wide">
                        <div className="ProductsAdmin__button-box">
                            <h1 className="ProductsAdmin__button-tile">Danh S??ch S???n Ph???m</h1>
                            <button onClick={()=>openModal({})} className="ProductsAdmin__button-btn">T???o S???n Ph???m M???i</button>
                        </div>
                        {modalVisible &&
                            <div className="row">
                                <div className="col l-12 ProductsAdmin__flex">
                                    <form className="ProductsAdmin" onSubmit={handlerSubmit}>
                                        <div className="ProductsAdmin__title">
                                            <h1 className="ProductsAdmin__title-text">
                                                T???o S???n Ph???m
                                            </h1>
                                            {errorSave && <h1 className="login__error-mess"> Th??ng tin kh??ng h???p l??? </h1> }
                                        </div>
                                        <div className="ProductsAdmin__form">
                                            <div className="ProductsAdmin__form-input">
                                                <span>T??n S???n Ph???m</span>
                                                <input value={name} onChange={(e)=> setName(e.target.value)} type="text" className="ProductsAdmin__input__form-input-ip"/>
                                            </div>
                                            <div className="ProductsAdmin__form-input">
                                                <span>H??nh ???nh banner</span>
                                                <input value={image} onChange={(e)=> setImage(e.target.value)} type="text"   className="ProductsAdmin__input__form-input-ip"/>
                                            </div>
                                            <div className="ProductsAdmin__form-input">
                                                <span>H??nh ???nh detail 1</span>
                                                <input value={image_left} onChange={(e)=> setImage_left(e.target.value)} type="text"   className="ProductsAdmin__input__form-input-ip"/>
                                            </div>
                                            <div className="ProductsAdmin__form-input">
                                                <span>H??nh ???nh detail 2</span>
                                                <input value={image_bottom} onChange={(e)=> setImage_bottom(e.target.value)} type="text"   className="ProductsAdmin__input__form-input-ip"/>
                                            </div>
                                            <div className="ProductsAdmin__form-input">
                                                <span>H??nh ???nh detail 3</span>
                                                <input value={image_right} onChange={(e)=> setImage_right(e.target.value)} type="text"   className="ProductsAdmin__input__form-input-ip"/>
                                            </div>
                                            <div className="ProductsAdmin__form-input">
                                                <span>Th????ng hi???u</span>
                                                <input value={brand} onChange={(e)=> setBrand(e.target.value)} type="text" className="ProductsAdmin__input__form-input-ip"/>
                                            </div>
                                            <div className="ProductsAdmin__form-input">
                                                <span>Lo???i s???n ph???m</span>
                                                <input value={category} onChange={(e)=> setCategory(e.target.value)} type="text"  className="ProductsAdmin__input__form-input-ip"/>
                                            </div>
                                            <div className="ProductsAdmin__form-input">
                                                <span>Ch?? th??ch</span>
                                                <textarea value={description} onChange={(e)=> setDescription(e.target.value)} className="ProductsAdmin__input__form-input-ip"/>
                                            </div>
                                            <div className="ProductsAdmin__form-input">
                                                <span>Gi??</span>
                                                <input value={price} onChange={(e)=> setPrice(e.target.value)} type="text" className="ProductsAdmin__input__form-input-ip"/>
                                            </div>
                                            <div className="ProductsAdmin__form-input">
                                                <span>S??? l?????ng</span>
                                                <input value={countInStock} onChange={(e)=> setCountInStock(e.target.value)} type="text" className="ProductsAdmin__input__form-input-ip"/>
                                            </div>                                        
                                        </div>
                                        <div className="ProductsAdmin__form-button">
                                            <button className="ProductsAdmin__form-btn" >
                                               {id ? "S???a S???n Ph???m" : "T???o S???n Ph???m"} 
                                            </button>
                                            <button className="ProductsAdmin__form-btn"onClick= {()=> setModalVisible(false)}>
                                                Tr??? L???i
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        }
                        <table className="ProductsAdmin__table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>T??n s???n ph???m</th>
                                    {/* <th>H??nh ???nh banner</th>
                                    <th>H??nh ???nh detail 1</th>
                                    <th>H??nh ???nh detail 2</th>
                                    <th>H??nh ???nh detail 3</th> */}
                                    <th>Th????ng hi???u</th>
                                    {/* <th>Th??ng tin</th> */}
                                    <th>Gi??</th>
                                    <th>S??? l?????ng</th>
                                    <th>T??y Ch???n</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product)=>(
                                    <tr className="ProductsAdmin__table-detail">
                                        <td>{product._id}</td>
                                        <td><p className="ProductsAdmin__table-name">{product.name}</p></td>
                                        {/* <td>{product.image}</td>
                                        <td>{product.image_left}</td>
                                        <td>{product.image_bottom}</td>
                                        <td>{product.image_right}</td> */}
                                        <td>{product.brand}</td>
                                        {/* <td>{product.description}</td> */}
                                        <td>{(product.price).toLocaleString()} ??</td>
                                        <td>{product.countInStock}</td>
                                        <td>
                                            <div className="ProductsAdmin__table-button">
                                                <button onClick={()=> openModal(product)}>S???a</button>
                                                <button onClick={()=> handleDelete(product)}>X??a</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default ProductsAdmin
