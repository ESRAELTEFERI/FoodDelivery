import React from "react";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MenuPage from "./Pages/MenuPage";
import { useCart } from "./Context/CartContext";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import CartPage from "./Pages/CartPage";

function App() {
  const {
    cartItems,
    isCartOpen,
    handleAddToCart,
    handleQuantityChange,
    handleCloseCart,
    handleOpenCart,
    handleRemoveFromCart,
  } = useCart();

  return (
    <div>
      <Router>
        <Header cartCount={cartItems.length} onCartClick={handleOpenCart} />
        {isCartOpen && (
          <Cart
            items={cartItems}
            onClose={handleCloseCart}
            onQuantityChange={handleQuantityChange}
            onRemove={handleRemoveFromCart}
          />
        )}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/menu"
            element={<MenuPage onAddToCart={handleAddToCart} />}
          />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </Router>
      {/* <Hero /> */}
    </div>
  );
}

export default App;
