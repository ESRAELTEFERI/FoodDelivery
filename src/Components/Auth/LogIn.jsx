import React, { useState } from "react";
import styles from "./LogIn.module.css";

function Login({ onClose, onSwitchToRegister }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Send login request to backend
    console.log("Logging in:", credentials);
    onClose();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>
          &times;
        </button>
        <h2 className={styles.title}>Login</h2>
        <form onSubmit={handleLogin} className={styles.form}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
            required
          />
          <button type="submit" className={styles.loginBtn}>
            Login
          </button>
        </form>

        <p className={styles.switchLink}>
          Don’t have an account?{" "}
          <span onClick={onSwitchToRegister}>Register</span>
        </p>

        <div className={styles.demoBox}>
          <strong>Demo Account:</strong>
          <br />
          <div>
            <b>Email:</b> customer@demo.com
          </div>
          <div>
            <b>Password:</b> password123
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
