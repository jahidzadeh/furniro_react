import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Product from "./pages/Product";

import LoginSignup from "./pages/LoginSignup/LoginSignup";
import Footer from "./components/Footer/Footer";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./context/CartContext";
import { GlobalStyle } from "./styles/global";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <CartProvider>
        <Router>
          <GlobalStyle>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/product/:name" element={<Product />} />
              <Route path="/loginSignup" element={<LoginSignup />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </GlobalStyle>
        </Router>
      </CartProvider>
    </Provider>
  );
};

export default App;
