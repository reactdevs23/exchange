import { useEffect, useState } from "react";

import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Login from "./pages/LoginSignUp/Login";
import SignUp from "./pages/LoginSignUp/SignUp";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Wallet from "./pages/Wallet/Wallet";
import ConvertCurrency from "./pages/ConvertCurrency/ConvertCurrency";
import Deposit from "./pages/Deposit/Deposit";
import Pay from "./pages/Pay/Pay";
import WithdrawCryptoCurrency from "./pages/Withdraw/WithdrawCryptoCurrency";
import Footer from "./components/Footer/Footer";
import Spot from "./pages/Spot/Spot";

function App() {
  const location = useLocation();

  const hideNavbar = location.pathname === "/";
  const hideFooter = location.pathname === "/spot";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spot" element={<Spot />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/convert" element={<ConvertCurrency />} />
        <Route path="/withdraw" element={<WithdrawCryptoCurrency />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      {!hideFooter && <Footer />}
    </>
  );
}

export default App;
