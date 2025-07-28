import React from "react";
import styles from "./Header.module.css";
import { FaShoppingCart, FaUserPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useCart } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";

function Header() {
  // const { cartCount, handleOpenCart } = useCart();
  const { cartItems } = useCart();
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <div className={styles.logoCircle}>ምኣ</div>

        <h2 className={styles.brand}>ምዓም ኣምበሳ</h2>
      </div>

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
          to="/about"
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
        <button className={`${styles.btn} ${styles.order}`}>Order Now</button>
        <button className={`${styles.btn} ${styles.signup}`}>
          <FaUserPlus style={{ marginRight: "5px", fontSize: "1rem" }} /> Sign
          Up
        </button>
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
