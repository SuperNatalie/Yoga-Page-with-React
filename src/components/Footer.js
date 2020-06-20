import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div id={styles.footer}>
      <ul id="footerUL">
        <li>YOGA</li>
        <li>About Yoga</li>
        <li>Devices</li>
        <li>Community Guidelines</li>
        <li>Terms of Use nd Privacy</li>
        <li>Spam Policy</li>
      </ul>
      <ul id="footerUL">
        <li>COMMUNITY</li>
        <li>Help Center</li>
        <li>Careers</li>
        <li>Write for Gala</li>
      </ul>
      <ul id="footerUL">
        <li>MORE</li>
        <li>Investor Relations</li>
      </ul>
    </div>
  );
}

export default Footer;
