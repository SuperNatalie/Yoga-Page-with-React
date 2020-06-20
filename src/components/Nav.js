import React from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav>
      <h1>Yoga</h1>
      <ul id={styles.NavUL}>
        <li>Discover</li>
        <li>Guide</li>
        <li>Online Class</li>
      </ul>
      <button>EN</button>
    </nav>
  );
};

export default Nav;
