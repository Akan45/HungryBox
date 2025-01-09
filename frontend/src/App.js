import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import Verify from "./pages/Verify/Verify";
import MyOrders from "./pages/MyOrders/MyOrders";
import ContactUs from "./pages/ContactUs/ContactUs";
import { Subscription } from "./pages/Subscription/Subscription";
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/Navbar/ThemeToggle';
import './styles/theme.css';
const App = () => {
  const [showLogin, setShowLogin] = useState(false);

//   return (
//     <>
//       {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
//       <div className="app">
//         <Navbar setShowLogin={setShowLogin} />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/subscription" element={<Subscription />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/order" element={<PlaceOrder />} />
//           <Route path="/verify" element={<Verify />} />
//           <Route path="/myorders" element={<MyOrders />} />
//           <Route path="/contactus" element={<ContactUs />} />
//         </Routes>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default App;
return (
  <ThemeProvider> {/* Wrap everything in ThemeProvider */}
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <div className="theme-toggle-container">
          {/* Theme Toggle Button */}
          <ThemeToggle />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </div>
      <Footer />
    </>
  </ThemeProvider>
);
};

export default App;