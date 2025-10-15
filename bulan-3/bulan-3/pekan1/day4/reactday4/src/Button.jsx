// src/Button.jsx
import React from "react";
import styles from "./Button.module.css";

export default function ButtonExample() {
  return (
    <div>
      <button className={styles.default}>Default Button</button>
      <button className={styles.primary}>Primary Button</button>
    </div>
  );
}
