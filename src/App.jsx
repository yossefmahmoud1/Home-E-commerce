import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Common/Header";
import Footer from "./Common/Fotter";
import Home from "./Pages/Home";
import CartPage from "./Common/cartpage"; 
import WishlistPage from "./Common/WishlistPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path='/wishlist' element={<WishlistPage />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
