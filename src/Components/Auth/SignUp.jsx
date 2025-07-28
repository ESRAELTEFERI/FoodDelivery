import React, { useState } from "react";
import styles from "./SignUp.module.css";

function SignUp({ onClose, onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle register logic (API call)
    console.log("Registering:", formData);
    onClose();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>
          &times;
        </button>
        <h2 className={styles.title}>Register</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            name="fullName"
            placeholder="Enter your full name"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            required
          />
          <input
            name="phone"
            placeholder="Enter your phone number"
            onChange={handleChange}
            required
          />
          <textarea
            name="address"
            placeholder="Enter your delivery address"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Create a password"
            onChange={handleChange}
            required
          />
          <button type="submit" className={styles.registerBtn}>
            Register
          </button>
        </form>
        <p className={styles.loginLink}>
          Already have an account? <span onClick={onSwitchToLogin}>Login</span>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
