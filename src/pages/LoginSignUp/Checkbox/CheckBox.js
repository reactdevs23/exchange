import React from "react";
import styles from "./CheckBox.module.css";

const CheckBox = ({ label, checked, setChecked }) => {
  return (
    <div className={styles.checkBoxContainer}>
      <label className={styles.container}>
        <input
          type="checkbox"
          value={checked}
          onChange={() => setChecked((prev) => !prev)}
          className={styles.checkBox}
        />
        <span className={styles.checkmark}></span>{" "}
      </label>
      <p className={styles.label}> {label}</p>
    </div>
  );
};

export default CheckBox;
