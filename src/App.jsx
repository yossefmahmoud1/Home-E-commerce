import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import Home from "./Pages/Home";
import CartPage from "./Common/CartPage"; 
import WishlistPage from "./Common/WishlistPage";
import Shop from "./Pages/Shop";
import NotFound from "./Pages/NotFound";
import ProductDetails from "./Pages/ProductDetails";

import ScrollToTop from "./Common/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Toaster 
        position="top-center"
        containerStyle={{
          top: 100, // Push down to avoid header overlap
          zIndex: 99999, // Ensure it's above everything
        }}
        toastOptions={{
          style: {
            background: '#fff',
            color: '#333',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '14px',
            fontWeight: '600',
            padding: '16px',
            borderRadius: '16px',
            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)',
            border: '1px solid #f3f4f6',
          },
          success: {
            iconTheme: {
              primary: '#10B981',
              secondary: 'white',
            },
            style: {
              borderLeft: '6px solid #10B981',
            },
          },
          error: {
            iconTheme: {
              primary: '#EF4444',
              secondary: 'white',
            },
            style: {
              borderLeft: '6px solid #EF4444',
            },
          },
        }} 
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path='/wishlist' element={<WishlistPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
