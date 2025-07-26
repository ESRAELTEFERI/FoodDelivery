import React from "react";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import { useCart } from "./Context/CartContext";
import Cart from "./Components/Cart/Cart";

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
          <Route path="/" element={<Home />} />
          <Route
            path="/menu"
            element={<Menu onAddToCart={handleAddToCart} />}
          />
        </Routes>
      </Router>
      {/* <Hero /> */}
    </div>
  );
}

export default App;
