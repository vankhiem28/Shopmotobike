import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import { cartReducer } from './reducers/CartReducers'
import { orderCreateReducer, orderDetailsReducer, orderListReducer, orderMineListReducer } from './reducers/OrderReducers'
import { productDetailsReducer, productListReducer, productSaveReducer } from './reducers/ProductReducers'
import { userDetailsReducer, userRegisterReducer, userSigninReducer, userUpdateProfileReducer } from './reducers/UserReducers'

const initialState ={
    userSignin:{
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')): null,
    },
    cart:{
        cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')):[],
        shippingAddress: localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {} ,
        paymentMethod: 'Thanh Toán Khi Nhận Hàng'
    }
}
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    orderCreate: orderCreateReducer,
    productSave:productSaveReducer,
    orderDetails:orderDetailsReducer,
    orderList:orderListReducer,
    userDetails:userDetailsReducer,
    userUpdateProfile:userUpdateProfileReducer,
    orderMineList: orderMineListReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, initialState,composeEnhancer(applyMiddleware(thunk)))

export default store