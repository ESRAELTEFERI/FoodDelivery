import React, { useState } from "react";
import styles from "./Header.module.css";
import { FaShoppingCart, FaUserPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useCart } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";
import SignUp from "../Auth/SignUp";
import LogIn from "../Auth/LogIn";

function Header() {
  // const { cartCount, handleOpenCart } = useCart();
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <header className={styles.header}>
      <NavLink to={"/"} style={{ textDecoration: "none" }}>
        <div className={styles.leftSection}>
          <div className={styles.logoCircle}>ምኣ</div>

          <h2 className={styles.brand}>ምዓም ኣምበሳ</h2>
        </div>
      </NavLink>

      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/menu"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          Menu
        </NavLink>
        <NavLink
          to="/aboutus"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          About Us
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          Contact
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          Settings
        </NavLink>
      </nav>

      <div className={styles.rightSection}>
        <button
          className={`${styles.btn} ${styles.order}`}
          onClick={() => navigate("/menu")}
        >
          Order Now
        </button>
        <button
          className={`${styles.btn} ${styles.signup}`}
          onClick={() => setShowSignUp(true)}
        >
          <FaUserPlus style={{ marginRight: "5px", fontSize: "1rem" }} /> Sign
          Up
        </button>
        {showSignUp && (
          <SignUp
            onClose={() => setShowSignUp(false)}
            onSwitchToLogin={() => {
              setShowSignUp(false);
              setShowLogin(true);
            }}
          />
        )}
        {showLogin && (
          <LogIn
            onClose={() => setShowLogin(false)}
            onSwitchToRegister={() => {
              setShowLogin(false);
              setShowSignUp(true);
            }}
          />
        )}
        {/* <div className={styles.cart} onClick={handleOpenCart}>
          <FaShoppingCart />
          {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
        </div> */}
        <div className={styles.cart} onClick={() => navigate("/cart")}>
          <FaShoppingCart />
          {cartItems.length > 0 && (
            <span className={styles.badge}>{cartItems.length}</span>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
