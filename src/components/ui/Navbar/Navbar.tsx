import React from "react";
import styles from "./Navbar.module.css";

const Navbar: React.FC<object> = () => {
  return (
    <div className={styles.Navbar} data-testid="Navbar">
      Navbar Component
    </div>
  );
};

export default Navbar;
