import Sregisterpage from "./pages/seller-registraion-page/Sregisterpage"
import Ulogin from "./components/loginforusers/Ulogin"
import Usign from "./components/loginforusers/Usign"
import Detailsproduct from "./pages/detailpage/Detailsproduct"
import Adminlogin from "./admin/adminlogin/Adminlogin"
import Adminpage from "./admin/adminepage/Adminpage"
import Home from "./components/home/Home"
import { Routes, Route } from "react-router-dom"
import Pagenotfound from "./pages/P404/Pagenotfound"
import Cart from "./pages/cart/Cart"
import Superadminpage from "./admin/superadminpage/Superadminpage"
import Adminsignin from "./admin/adminlogin/Adminsignin"
import Userloginhome from "./components/home/Userloginhome"
import Selectedcategorypage from "./pages/selected/Selectedcategorypage"
import Search from "./pages/search/Search"
import Buynowpage from "./pages/Buynow/Buynowpage"
import Paymentmode from "./pages/Buynow/Paymentmode"
import Event from "./pages/events/Event"
import Eventbuynowpage from "./pages/events/Eventbuynowpage"
import Eventdetailpage from "./pages/events/Eventdetailpage"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/userlogin" element={<Ulogin />} />
      <Route path="/usersign" element={<Usign />} />
      <Route path="/userlogin/home" element={<Userloginhome />} />
      <Route path="/sregister" element={<Sregisterpage />} />

      <Route path="/cart" element={<Cart />} />
      <Route path="/superadmin" element={<Superadminpage />} />
      <Route path="/superadmin" element={<Superadminpage />} />
      <Route path="/Selectedcategorypage" element={<Selectedcategorypage />} />
      <Route path="/event" element={<Event />} />
      <Route path="/eventsdetail/:id" element={<Eventdetailpage />} />
      <Route path="/eventsbuynow/:id/" element={<Eventbuynowpage />} />

      <Route path="/details/:id" element={<Detailsproduct />} />
      <Route path="/product/search" element={<Search />} />
      <Route path="/buynowpage/:id" element={<Buynowpage />} />
      <Route path="/buynowpage/:id/mode" element={<Paymentmode />} />
      {/* <Adminlogin /> */}

      <Route path="/admin" element={<Adminpage />} />
      <Route path="/sellerregistration" element={<Adminsignin />} />
      <Route path="/admin/login" element={<Adminlogin />} />
      <Route path="*" element={<Pagenotfound />} />
    </Routes>
  )
}

export default App