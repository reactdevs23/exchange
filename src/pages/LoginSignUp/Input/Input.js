import React from "react";

import styles from "./Input.module.css";

const Input = ({ label, type, name, placeholder, onChange, value }) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name} className={`${styles.label}`}>
        {label} <span className={styles.required}>*</span>
      </label>
      <input
        required
        type={type}
        id={name}
        name={name}
        value={value}
        className={`${styles.input} ${styles.text}`}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
