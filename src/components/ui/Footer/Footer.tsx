import React from "react";
import styles from "./Footer.module.css";

 
const Footer: React.FC = () => {
  
  return (
    <div className={styles.Footer} data-testid="Footer">
      Desorbaix &copy; Orsys 2025
    </div>
  );
};

export default Footer;
