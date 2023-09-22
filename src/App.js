import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Wallet from "./pages/Wallet/Wallet";
import WithDrawCrypto from "./components/WithDrawCrypto/WithDrawCrypto";
import ChooseCurrency from "./components/ConvertCurrency/ChooseCurrency/ChooseCurrency";
import WithdrawCryptoSuccess from "./components/WithDrawCrypto/WithdrawCryptoSuccess/WithdrawCryptoSuccess";
import Footer from "./components/Footer/Footer";
import Convert from "./pages/ConvertCurrency/ConvertCurrency";
import Deposit from "./pages/Deposit/Deposit";
import Pays from "./pages/Pay/Pay";

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
        <Route path="/pay" element={<Pays />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
