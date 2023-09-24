import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Wallet from "./pages/Wallet/Wallet";
import ConvertCurrency from "./pages/ConvertCurrency/ConvertCurrency";
import Deposit from "./pages/Deposit/Deposit";
import Pay from "./pages/Pay/Pay";
import WithdrawCryptoCurrency from "./pages/Withdraw/WithdrawCryptoCurrency";
import Footer from "./components/Footer/Footer";
function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/";
  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/convert" element={<ConvertCurrency />} />
        <Route path="/withdraw" element={<WithdrawCryptoCurrency />} />
        <Route path="/pay" element={<Pay />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
