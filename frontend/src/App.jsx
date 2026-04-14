import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserLayout from "./components/Layout/UserLayout"
import Home from "./components/pages/Home"
import {Toaster} from "sonner"
import Login from "./components/pages/Login"
import Register from "./components/pages/Register"
import Profile from "./components/pages/Profile"
import CollectionPage from "./components/pages/CollectionPage"
import ProductDetails from "./components/Products/ProductDetails"
import Checkout from "./components/Cart/Checkout"
import OrderConfirmationPage from "./components/pages/OrderConfirmationPage"
import OrderDetailsPage from "./components/pages/OrderDetailsPage"
import MyOrdersPage from "./components/pages/MyOrdersPage"
import AdminLayout from "./components/Admin/AdminLayout"
import AdminHome from "./components/pages/AdminHome"
import Usermanagement from "./components/Admin/Usermanagement"
import ProductManagement from "./components/Admin/ProductManagement"
import EditProductPage from "./components/Admin/EditProductPage"
import OrderManagement from "./components/Admin/OrderManagement"

function App() {


  return (
    <BrowserRouter>
    <Toaster position="top-right"/>
      <Routes>
        <Route path="/" element={<UserLayout />} >
          <Route index element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="collections/:collection" element={<CollectionPage/>}/>
          <Route path="product/:id" element={<ProductDetails/>}/>
          <Route path="checkout" element={<Checkout/>}/>
          <Route path="order-confirmation" element={<OrderConfirmationPage/>}/>
          <Route path="order/:id" element={<OrderDetailsPage/>}/>
          <Route path="/my-orders" element={<MyOrdersPage/>}/>
        </Route>
        <Route path="/admin" element={<AdminLayout/>}>{/*Admin layout*/}
        <Route index element={<AdminHome/>}/>
        <Route path="user" element={<Usermanagement/>}/>
        <Route path="products" element={<ProductManagement/>}/>
        <Route path="product/:id/edit" element={<EditProductPage/>}/>
        <Route path="orders" element={<OrderManagement/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
