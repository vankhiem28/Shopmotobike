
import Home from './Pages/Home'
import Register from './Pages/Register'
import ProductList from './Pages/ProductList'
import ProductDetail from './Pages/ProductDetail'
import Cart from './Pages/Cart'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
function App() {
  const user =true
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
          <Route path="cart" element={<Cart/>}>
          </Route>
          <Route path="register" element={user ? <Navigate to="/"/> : <Register/>}>
          </Route>
        </Routes>
      </Router>
         {/* <Home/> */}
         {/* <Register/> */}
         {/* <ProductList/> */}
         {/* <ProductDetail/> */}
         {/* <Cart/> */}
    </div>

  );
}

export default App;
