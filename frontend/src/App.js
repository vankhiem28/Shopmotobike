
import Home from './Pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Login'
import ProductList from './Pages/ProductList'
import ProductDetail from './Pages/ProductDetail'
import Cart from './Pages/Cart'
import ShippingAddress from './Pages/ShippingAddress'
import PlaceOrder from './Pages/PlaceOrder'

import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { useSelector } from 'react-redux'
function App() {
  const user =true
  const cart =useSelector(state=>state.cart)
  const {cartItems} =cart


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}>
          </Route>
          <Route path="/products/:category" element={<ProductList/>}>
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
          <Route path="/placeorder" element={<PlaceOrder/>}>
          </Route>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
