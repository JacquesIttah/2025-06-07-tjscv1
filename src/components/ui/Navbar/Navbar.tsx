import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

interface INavbarProps {
  data:string
}
interface INavbarState {
  value:number
}
const navbarInitialState = {value:0};
const Navbar: React.FC<INavbarProps> = ({data=""}) => {
  const [state, setstate] = useState<INavbarState>(
    navbarInitialState
  );
  useEffect(() => {
    return () => {
      //demontage
    };
  }, []);
  return (
    <div className={styles.Navbar} data-testid="Navbar">
      Navbar Component props.data:{data}, state:{JSON.stringify(state)}
    </div>
  );
};

export default Navbar;
