
import Home from './Pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Login'
import ProductList from './Pages/ProductList'
import ProductDetail from './Pages/ProductDetail'
import Cart from './Pages/Cart'
import ShippingAddress from './Pages/ShippingAddress'
import Payment from './Pages/Payment'
import PlaceOrder from './Pages/PlaceOrder'
import ProductsAdmin from './Pages/ProductsAdmin'
import Contacts from './Pages/Contacts'
import OrderAdmin from './Pages/OrderAdmin'
import OrderCheck from './Pages/OrderCheck'
import ProfilesAdmin from './Pages/ProfilesAdmin'
import NotFound from './Pages/NotFound'
import AboutUs from './Pages/AboutUs'

import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { useSelector } from 'react-redux'
function App() {
  // const user =true
  // const cart =useSelector(state=>state.cart)
  // const {cartItems} =cart


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}>
          </Route>
          <Route path="/productsList" element={<ProductList/>}>
          </Route>
          <Route exact path="/product/:id" element={<ProductDetail/>}>
          </Route>
          <Route exact path="/cart/view" element={<Cart/>}>
          </Route>
          <Route exact path="/cart/:id" element={<Cart/>}>
          </Route>
          <Route path="/register" element={<Register/>}>
          </Route>
          <Route path="/signin" element={<Login/>}>
          </Route>
          <Route path="/shipping" element={<ShippingAddress/>}>
          </Route>
          <Route path="/payment" element={<Payment/>}>
          </Route>
          <Route path="/placeorder" element={<PlaceOrder/>}>
          </Route>
          <Route path="/productsAdmin" element={<ProductsAdmin/>}>
          </Route>
          <Route path="/contact" element={<Contacts/>}>
          </Route>
          <Route path="/ordercheck/:id" element={<OrderCheck/>}>
          </Route>
          <Route path="/ordersAdmin" element={<OrderAdmin/>}>
          </Route>
          <Route path="/profile" element={<ProfilesAdmin/>}>
          </Route>
          <Route path="/404" element={<NotFound/>}>
          </Route>
          <Route path="/about" element={<AboutUs/>}>
          </Route>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
