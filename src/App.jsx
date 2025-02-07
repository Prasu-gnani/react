// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import AboutUs from "./AboutUs";
// import Orders from "./Orders";
// import Cart from "./cart";
// import Veg from "./Veg";
// import Nonveg from "./Nonveg";
// import Home from "./Home";
// import ContactUs from "./ContactUs";
// import "./App.css"
// import { useDispatch, useSelector } from "react-redux";
// import Milk from "./Milk";
// import { logout } from "./store";
// import Login from "./login";
// import NotFound from "./NotFound";
// import "./Navbar.css"
// import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
// function App()
// {
//   let cart =useSelector(state=>state.cart);
//   let totalitems=cart.reduce((sum,item)=>sum+item.quantity,0);
//   let auth = useSelector((state)=>state.auth);
//   let isAuthenticated = auth.isAuthenticated;
//   let user = auth.user;
//   let dispatch=useDispatch();

//   return(
//     <>
//      <BrowserRouter>
//        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
       
//           <Link to="/home" className="navbar-brand">
//             MyStore
//           </Link>
//        <Link to="/home" className="linkstyle">Home</Link>
//        <Link to="/veg" className="linkstyle">Veg</Link>
//        <Link to="/nonveg" className="linkstyle">Nonveg</Link>
//        <Link to="/milk" className="linkstyle">Milk</Link>
//        <Link to="/cart" className="linkstyle">Cart<span>{totalitems}</span></Link>
//        <Link to="/orders" className="linkstyle">Orders</Link>
//        <Link to="/notfound"className="linkstyle">NotFound</Link>
//        <Link to="/aboutus" className="linkstyle">AboutUs</Link>
//        <Link to="/contactus" className="linkstyle">ContactUs</Link>
//        {isAuthenticated?(
//         <>
//         <span className="welcome">welcome,{user}!</span>
//         <button onClick={()=>dispatch(logout())}
//         className="logout">logout</button>
//         </>
//        ) : (
//         <Link to ="/login" className="linkstyle" >login</Link>
//        )}
//        </nav>
//      <Routes>
//       <Route path="/home" element={<Home/>} />
//       <Route path="/veg" element={<Veg/>} />
//       <Route path="/nonveg" element={<Nonveg/>} />
//       <Route path="/milk" element={<Milk/>} />
//       <Route path="/cart" element={<Cart/>} />
//       <Route path="/orders" element={<Orders/>} />
//       <Route path="/*"element={<NotFound/>}/>
//       <Route path="/aboutus" element={<AboutUs/>} />
//       <Route path="/contactus" element={<ContactUs/>} />
//       <Route path="/login" element={<Login/>} />
//      </Routes>
//      </BrowserRouter>
//     </>
//   )
// }
// export default App;
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs";
import Orders from "./Orders";
import Cart from "./cart";
import Veg from "./Veg";
import Nonveg from "./Nonveg";
import Home from "./Home";
import ContactUs from "./ContactUs";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Milk from "./Milk";
import { logout } from "./store";
import Login from "./login";
import NotFound from "./NotFound";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS

function App() {
  let cart = useSelector((state) => state.cart);
  let totalitems = cart.reduce((sum, item) => sum + item.quantity, 0);
  let auth = useSelector((state) => state.auth);
  let isAuthenticated = auth.isAuthenticated;
  let user = auth.user;
  let dispatch = useDispatch();

  return (
    <BrowserRouter>
      {/* 🌟 Beautiful Gradient Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-gradient shadow fixed-top">
        <div className="container">
          <Link to="/mystore" className="navbar-brand fw-bold fs-4">
            🛍️ My Store
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
            <li className="nav-item">
            <Link to="/home" className="nav-link"> 🏠Home</Link>
            </li>
              <li className="nav-item">
                <Link to="/veg" className="nav-link">🥦 Veg</Link>
              </li>
              <li className="nav-item">
                <Link to="/nonveg" className="nav-link">🍗 Nonveg</Link>
              </li>
              <li className="nav-item">
                <Link to="/milk" className="nav-link">🥛 Milk</Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link position-relative">
                  🛒 Cart
                  {totalitems > 0 && (
                    <span className="badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle">
                      {totalitems}
                    </span>
                  )}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/orders" className="nav-link">📦 Orders</Link>
              </li>
              <li className="nav-item">
                <Link to="/aboutus" className="nav-link">ℹ️ About Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/contactus" className="nav-link">📞 Contact Us</Link>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              {isAuthenticated ? (
                <>
                  <span className="text-white fw-bold me-3">👋 Welcome, {user}!</span>
                  <button onClick={() => dispatch(logout())} className="btn btn-danger shadow">
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login" className="btn btn-primary shadow">Login</Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* 🌟 Beautiful Container for Routes */}
      <div className="container py-4">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/nonveg" element={<Nonveg />} />
          <Route path="/milk" element={<Milk />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
